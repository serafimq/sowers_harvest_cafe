'use client';

import { JSX, useEffect, useState } from 'react';

import MenuHero from '@/components/features/menu/MenuHero';
import MenuPage from '@/components/features/menu/MenuPage';
import { Dish } from '@/types/dish';

interface ContactProps {}

const Menu: React.FC<ContactProps> = (): JSX.Element => {

  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Функция для загрузки данных
    const fetchMenu = async () => {
      setLoading(true);
      setError(null);
      try {
        // При вызове из клиента можно использовать относительный путь
        const res = await fetch('/api/menu');
        if (!res.ok) {
          throw new Error(`Ошибка сети: ${res.statusText}`);
        }
        const data = await res.json();
        console.log('data: ', data);
        
        setDishes(data.dishes); // Получаем массив из { dishes: [...] }
      } catch (err) {
        if (err instanceof Error) {
           setError(`Не удалось загрузить меню: ${err.message}`);
        } else {
           setError('Произошла неизвестная ошибка при загрузке меню.');
        }
        console.error("Ошибка при загрузке меню:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании

  if (loading) {
    return <p>Загрузка меню...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto md:w-[90%] overflow-hidden">
      <MenuHero />
      <MenuPage />
    </main>
  );
};

export default Menu;
