// Определяем тип категорий на основе данных из миграции
export type DishCategory = 
  | 'Breakfast'
  | 'Omelets'
  | 'Specialty Breakfast Sandwiches'
  | 'Paninis and Grillatillas'
  | 'Salads'
  | 'Baked Goods'
  | 'Hot Drinks'
  | 'Teas'
  | 'SAKU Blends'
  | 'Cold Drinks'
  | 'Fruit Smoothies'
  | 'Soft Pretzels'
  | 'Specialty Burgers';

export interface Dish {
  // ID теперь строка, как в MongoDB _id
  id: string; 
  name: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  // Цена теперь объект с ключами-строками и значениями-числами
  price: {
    [size: string]: number;
  };
  image: string;
  // Используем обновленный DishCategory
  category: DishCategory; 
  allergens: string[];
  recommended?: string;
  isFavorite: boolean;
  // Добавляем поле isAvailable из схемы IMenuItem
  isAvailable: boolean; 
}

// Тип NewDish теперь не нужен, так как ID генерируется базой данных
// export type NewDish = Omit<Dish, \'id\'>;
