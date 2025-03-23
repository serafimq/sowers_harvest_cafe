import React, { createContext, useState, useContext, ReactNode, useMemo, JSX } from 'react';

import dishes from '@/data/initialDishes';
import { Dish, NewDish } from '@/types/dish';

interface MenuContextState {
  dishes: Dish[];
  selectedDish: Dish | null;
  setSelectedDish: (dish: Dish | null) => void;
  addDish: (dish: NewDish) => void;
  updateDish: (updatedDish: Dish) => void;
  deleteDish: (id: number) => void;
}

interface MenuProviderProps {
  children: ReactNode;
}

const initialDishes: Dish[] = dishes;

const MenuContext = createContext<MenuContextState | null>(null);

export const useMenu = (): MenuContextState => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenu должен быть вызван внутри MenuProvider');
  }

  return context;
};

export const MenuProvider = ({ children }: MenuProviderProps): JSX.Element => {
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Add a new dish
  const addDish = (newDish: NewDish): void => {
    const newId = dishes.length > 0 ? Math.max(...dishes.map(dish => dish.id)) + 1 : 1;

    setDishes(prevDishes => [...prevDishes, { ...newDish, id: newId }]);
  };

  // Update an existing dish
  const updateDish = (updatedDish: Dish): void => {
    setDishes(prevDishes =>
      prevDishes.map(dish => (dish.id === updatedDish.id ? updatedDish : dish))
    );
  };

  // Delete a dish
  const deleteDish = (id: number): void => {
    setDishes(prevDishes => prevDishes.filter(dish => dish.id !== id));

    if (selectedDish && selectedDish.id === id) {
      setSelectedDish(null);
    }
  };

  const value = useMemo(
    () => ({
      dishes,
      selectedDish,
      setSelectedDish,
      addDish,
      updateDish,
      deleteDish,
    }),
    [dishes, selectedDish]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
