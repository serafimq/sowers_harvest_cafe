import { JSX } from 'react';

import { useMenu } from '@/providers/MenuContext';
import { Dish } from '@/types/dish';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }): JSX.Element => {
  const { setSelectedDish } = useMenu();

  return (
    <div
      className="group w-full cursor-pointer bg-white shadow-md rounded-md overflow-hidden"
      onClick={() => setSelectedDish(dish)}
    >
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          onError={e => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/assets/images/default-dish.jpg';
          }}
        />
        <div className="absolute top-[10px] right-[10px] bg-primary/80 text-white px-2 py-[0.3rem] rounded-[20px] text-[0.8rem] font-medium">
          {dish.category}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-[1.3rem] mb-2 text-primary">{dish.name}</h3>
        <p className="text-[0.9rem] leading-5 mb-2 text-gray-600 line-clamp-2">
          {dish.shortDescription}
        </p>
        <div className="font-bold text-[1.1rem] text-accent">${dish.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default DishCard;
