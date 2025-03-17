// Определяем тип категорий на основе фактических данных
export type DishCategory = 'Breakfast' | 'Salads' | 'Burgers' | 'Drinks';

export interface Dish {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  ingredients: string[];
  price: number;
  image: string;
  category: DishCategory;
  allergens: string[];
  recommended?: string;
  isFavorite: boolean;
}

export type NewDish = Omit<Dish, 'id'>; 