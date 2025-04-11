import mongoose from 'mongoose';

// Определение интерфейса для кэша соединения
interface IMongoDatabaseConnection {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Определяем тип для глобального объекта
declare global {
  // eslint-disable-next-line no-var
  var mongoose: IMongoDatabaseConnection | undefined;
}

// Кэшируем соединение
let cached = global.mongoose as IMongoDatabaseConnection;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Подключение к базе данных MongoDB
 * @returns {Promise<typeof mongoose>}
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  // Если у нас уже есть готовое соединение в кэше
  if (cached.conn) {
    // Проверим на всякий случай, что соединение действительно активно
    if (cached.conn.connection.readyState === 1) { // 1 === 'connected'
      console.log(`✅ Using cached MongoDB connection to database: ${cached.conn.connection.name}`);
      return cached.conn;
    } else {
      // Если соединение в кэше по какой-то причине "умерло", сбросим кэш
      console.warn('⚠️ Cached connection found but was not ready. Reconnecting...');
      cached.conn = null;
      cached.promise = null;
    }
  }

  // Если соединение еще не устанавливается
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Рекомендуется для лучшей обработки ошибок
      serverSelectionTimeoutMS: 5000, // Таймаут выбора сервера (мс)
    };

    // !!! ВАЖНО: Используйте переменную без NEXT_PUBLIC_ префикса !!!
    const MONGODB_URI = process.env.MONGODB_URI; // ЗАМЕНИТЕ НА ВАШУ ПЕРЕМЕННУЮ

    if (!MONGODB_URI) {
      throw new Error('❌ Please define the MONGODB_URI environment variable inside .env.local');
    }
    console.log('🚀 Attempting new MongoDB connection...');
    console.log(`💡 Using URI starting with: ${MONGODB_URI.substring(0, MONGODB_URI.indexOf('@') > 0 ? MONGODB_URI.indexOf('@') : 20)}...`); // Логируем начало URI без пароля

    cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongooseInstance => {
      console.log(`✅ Successfully established new MongoDB connection to database: ${mongooseInstance.connection.name}`);
      // Добавляем обработчики событий для мониторинга (опционально, но полезно)
      mongooseInstance.connection.on('error', err => {
        console.error('❌ MongoDB connection error after initial connection:', err);
        cached.conn = null; // Сбросить кэш при ошибке
        cached.promise = null;
      });
      mongooseInstance.connection.on('disconnected', () => {
        console.warn('⚠️ MongoDB disconnected.');
        cached.conn = null; // Сбросить кэш при отключении
        cached.promise = null;
      });
      return mongooseInstance;
    });
  } else {
    console.log('⏳ Waiting for existing connection promise to resolve...');
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Обнуляем промис при ошибке, чтобы следующая попытка создала новый
    console.error('❌ MongoDB connection failed:', e);
    // Пробрасываем ошибку дальше, чтобы API роут мог ее обработать
    throw new Error(`Failed to connect to database. ${e instanceof Error ? e.message : e}`);
  }

  return cached.conn;
}

export default connectToDatabase;