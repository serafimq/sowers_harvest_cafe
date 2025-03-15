import dishes from '@/data/initialDishes';
import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

export interface Dish {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  price: number;
  image: string;
  category: string;
  allergens: string[];
  recommended?: string;
  isFavorite: boolean;
}

interface MenuContextState {
  dishes: Dish[];
  selectedDish: Dish | null;
  setSelectedDish: (dish: Dish | null) => void;
  addDish: (dish: Omit<Dish, 'id'>) => void;
  updateDish: (updatedDish: Dish) => void;
  deleteDish: (id: number) => void;
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

interface MenuProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [dishes, setDishes] = useState<Dish[]>(initialDishes);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  
  
  // Add a new dish
  const addDish = (newDish: Omit<Dish, 'id'>) => {
    const id = dishes.length > 0 ? Math.max(...dishes.map(dish => dish.id)) + 1 : 1;
    setDishes([...dishes, { ...newDish, id }]);
  };
  
  // Update an existing dish
  const updateDish = (updatedDish: Dish) => {
    setDishes(dishes.map(dish => 
      dish.id === updatedDish.id ? updatedDish : dish
    ));
  };
  
  // Delete a dish
  const deleteDish = (id: number) => {
    setDishes(dishes.filter(dish => dish.id !== id));
    if (selectedDish && selectedDish.id === id) {
      setSelectedDish(null);
    }
  };
  

  const value: MenuContextState = useMemo(() => ({
    dishes,
    selectedDish,
    setSelectedDish,
    addDish,
    updateDish,
    deleteDish,
  }), [dishes, selectedDish]);
  
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};