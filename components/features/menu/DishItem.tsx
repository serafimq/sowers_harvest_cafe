'use client';

import { FC } from 'react';

import { useMenu } from '@/providers/MenuContext';
import { Dish } from '@/types/dish';

interface DishItemProps {
  dish: Dish;
}

const DishItem: FC<DishItemProps> = ({ dish }) => {
  const { setSelectedDish } = useMenu();

  const handleOpenDetails = () => {
    setSelectedDish(dish);
  };

  return (
    <div className="py-4 border-b border-gray-100">
      <div className="flex justify-between items-center">
        <h3
          className="text-2xl font-serif text-gray-800 hover:text-primary cursor-pointer"
          onClick={handleOpenDetails}
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleOpenDetails()}
          aria-label={`Показать детали блюда ${dish.name}`}
        >
          {dish.name}
        </h3>
        <span className="text-2xl font-serif text-red-600">${dish.price}</span>
      </div>
      <div className="mt-2 text-gray-600">
        {dish.ingredients &&
          dish.ingredients.map((ingredient, index) => (
            <span key={index}>
              {ingredient}
              {index < dish.ingredients.length - 1 && <span className="mx-2">|</span>}
            </span>
          ))}
      </div>
    </div>
  );
};

export default DishItem;
