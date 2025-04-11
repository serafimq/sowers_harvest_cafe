import { FC, JSX, useEffect, useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DishItem from './DishItem';
import { Dish, DishCategory } from '@/types/dish';

// Массив категорий, полученный из типа DishCategory
// В реальном приложении это может приходить с бэкенда или быть в отдельном конфигурационном файле
const dishCategories: DishCategory[] = [
  'Breakfast',
  'Omelets',
  'Specialty Breakfast Sandwiches',
  'Paninis and Grillatillas',
  'Salads',
  'Baked Goods',
  'Hot Drinks',
  'Teas',
  'SAKU Blends',
  'Cold Drinks',
  'Fruit Smoothies',
  'Soft Pretzels',
  'Specialty Burgers',
];

const DishList: FC = (): JSX.Element => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Добавляем состояние для отслеживания выбранной категории
  const [selectedCategory, setSelectedCategory] = useState<DishCategory>(dishCategories[0]); // Начинаем с первой категории

  useEffect(() => {
    const fetchMenu = async () => {
      // Не сбрасываем dishes при смене категории, чтобы избежать мигания
      // setDishes([]); // Убираем сброс
      setLoading(true);
      setError(null);
      try {
        // Добавляем выбранную категорию как query параметр
        const res = await fetch(`/api/menu?category=${selectedCategory}`);
        if (!res.ok) {
          throw new Error(`Ошибка сети: ${res.statusText}`);
        }
        const data = await res.json();
        // console.log('data for category', selectedCategory, ':', data); // Можно оставить для дебага

        setDishes(data.dishes || []); // Убедимся, что dishes это массив
      } catch (err) {
        if (err instanceof Error) {
          setError(`Не удалось загрузить меню для категории "${selectedCategory}": ${err.message}`);
        } else {
          setError(`Произошла неизвестная ошибка при загрузке меню для категории "${selectedCategory}".`);
        }
        console.error(`Ошибка при загрузке меню для категории "${selectedCategory}":`, err);
        setDishes([]); // Сбрасываем блюда в случае ошибки
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
    // Добавляем selectedCategory в зависимости useEffect
  }, [selectedCategory]);

  // Сообщение о загрузке и ошибке остаются прежними
  if (loading && dishes.length === 0) { // Показываем загрузку только если блюд еще нет
    return <p>Загрузка меню...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      {/* Используем selectedCategory для value и onValueChange */}
      <Tabs
        value={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value as DishCategory)} // Обновляем стейт при смене таба
        className="w-full"
      >
        <TabsList>
          {/* Генерируем табы динамически */}
          {dishCategories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {/* Можно добавить логику для отображения более дружелюбных имен категорий, если нужно */}
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Используем один TabsContent, рендерящий текущие dishes */}
        {/* Ключ не обязателен, так как контент обновляется через стейт */}
        <TabsContent value={selectedCategory} className="mt-4">
           {loading && <p>Обновление...</p>} {/* Индикатор загрузки при смене таба */}
           {!loading && dishes.length === 0 && <p>Нет блюд в этой категории.</p>}
          {dishes.map((dish) => {
            return <DishItem key={dish.id} dish={dish} />;
          })}
        </TabsContent>
        {/* Убираем статичные TabsContent */}
        {/* <TabsContent value="salads">...</TabsContent> */}
        {/* <TabsContent value="burgers">...</TabsContent> */}
      </Tabs>
    </div>
  );
};

export default DishList;
