import React, { createContext, useState, useContext, useEffect } from 'react';

// Sample initial data
const initialDishes = [
  // Omelletes
  {
      "id": 22,
      "name": "Cheese Omelet",
      "shortDescription": "Classic omelet with a mix of cheeses",
      "description": "A fluffy omelet filled with a delicious blend of cheddar, provolone, and swiss cheese.",
      "ingredients": ["Eggs", "Cheddar", "Provolone", "Swiss cheese"],
      "price": 10.95,
      "image": "./omelets/Cheese_Omelet.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk"],
      "recommended": "Great with toast or a side salad."
  },
  {
      "id": 24,
      "name": "Greek Omelet",
      "shortDescription": "Mediterranean-style omelet with feta and vegetables",
      "description": "A flavorful omelet packed with onions, tomatoes, olives, spinach, and feta cheese.",
      "ingredients": ["Eggs", "Onions", "Tomatoes", "Olives", "Spinach", "Feta"],
      "price": 12.95,
      "image": "./omelets/Greek_Omelet.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk"],
      "recommended": "Pairs well with whole wheat toast."
  },
  {
      "id": 29,
      "name": "Veggie Pesto Omelet",
      "shortDescription": "Vegetable omelet with housemade pesto",
      "description": "A nutritious omelet filled with onions, peppers, tomatoes, mushrooms, spinach, housemade pesto, and provolone cheese.",
      "ingredients": ["Eggs", "Onions", "Peppers", "Tomatoes", "Mushrooms", "Spinach", "Pesto", "Provolone"],
      "price": 13.95,
      "image": "./omelets/Veggie_Pesto_Omelet.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk", "Nuts"],
      "recommended": "Delicious with a side of fresh fruit."
  },
  {
      "id": 34,
      "name": "Garden Turkey Omelet",
      "shortDescription": "Turkey and vegetable omelet with garlic",
      "description": "A wholesome omelet with turkey, onions, peppers, spinach, swiss cheese, and a hint of garlic.",
      "ingredients": ["Eggs", "Turkey", "Onions", "Peppers", "Spinach", "Swiss cheese", "Garlic"],
      "price": 12.75,
      "image": "./omelets/Garden_Turkey_Omelet.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk"],
      "recommended": "Try it with a side of hash browns."
  },
  // Breakfast
  {
      "id": 35,
      "name": "French Toast",
      "shortDescription": "Golden French toast with sweet toppings",
      "description": "Thick slices of golden-brown French toast, served with whipped cream, maple syrup, and a choice of chocolate chips, blueberries, strawberries, or pecans.",
      "ingredients": ["Bread", "Eggs", "Milk", "Maple syrup", "Choice of toppings"],
      "price": 13.50,
      "image": "./breakfast/French_Toast.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk", "Gluten"],
      "recommended": "Goes great with a hot latte."
  },
  {
      "id": 38,
      "name": "Yogurt Parfait",
      "shortDescription": "Organic yogurt with housemade granola",
      "description": "A refreshing parfait featuring organic yogurt, housemade granola, and your choice of two fruits: strawberries, blueberries, pineapples, mangoes, or bananas.",
      "ingredients": ["Yogurt", "Granola", "Choice of fruits"],
      "price": 6.75,
      "image": "./breakfast/Yogurt_Parfait.webp",
      "category": "Breakfast",
      "allergens": ["Milk", "Nuts"],
      "recommended": "Perfect as a light breakfast or snack."
  },
  {
      "id": 41,
      "name": "Fruit Cup",
      "shortDescription": "Fresh fruit selection",
      "description": "A healthy selection of three fresh fruits, including strawberries, blueberries, bananas, and pineapples.",
      "ingredients": ["Choice of fresh fruits"],
      "price": 5.50,
      "image": "./breakfast/Fruit_Cup.webp",
      "category": "Breakfast",
      "allergens": [],
      "recommended": "Pairs well with a yogurt parfait."
  },
  {
      "id": 43,
      "name": "Garlic Turkey Egg Sandwich",
      "shortDescription": "Savory turkey and egg sandwich with garlic mayo",
      "description": "A hearty breakfast sandwich with turkey, onions, peppers, spinach, swiss cheese, and a touch of garlic mayo.",
      "ingredients": ["Turkey", "Eggs", "Onions", "Peppers", "Spinach", "Swiss cheese", "Garlic mayo"],
      "price": 9.50,
      "image": "./breakfast/Garlic_Turkey_Egg_Sandwich.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk", "Gluten"],
      "recommended": "Enjoy with a side of fresh fruit."
  },
  {
      "id": 45,
      "name": "Sowers Granola with Milk",
      "shortDescription": "Housemade granola with milk",
      "description": "A crunchy and nutritious mix of housemade granola served with milk.",
      "ingredients": ["Granola", "Milk"],
      "price": 5.75,
      "image": "./breakfast/Sowers_Granola_with_Milk.webp",
      "category": "Breakfast",
      "allergens": ["Milk", "Nuts"],
      "recommended": "Delicious with fresh fruit."
  },
  {
      "id": 46,
      "name": "Chipotle Bacon Egg Sandwich",
      "shortDescription": "Spicy bacon and egg sandwich with chipotle mayo",
      "description": "A bold breakfast sandwich with crispy bacon, cheddar cheese, and chipotle mayo.",
      "ingredients": ["Bacon", "Eggs", "Cheddar", "Chipotle mayo"],
      "price": 9.75,
      "image": "./breakfast/Chipotle_Bacon_Egg_Sandwich.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk", "Gluten"],
      "recommended": "Best enjoyed with a cappuccino."
  },
  {
      "id": 49,
      "name": "Pesto-Port Egg Sandwich",
      "shortDescription": "Mushroom and egg sandwich with housemade pesto",
      "description": "A savory sandwich featuring portabella mushrooms, provolone cheese, and housemade pesto.",
      "ingredients": ["Portabella mushrooms", "Eggs", "Provolone", "Pesto"],
      "price": 9.50,
      "image": "./breakfast/Pesto_Port_Egg_Sandwich.webp",
      "category": "Breakfast",
      "allergens": ["Eggs", "Milk", "Nuts", "Gluten"],
      "recommended": "Try it with a hot tea."
  },
  {
      "id": 50,
      "name": "Avocado Toast",
      "shortDescription": "Simple and delicious avocado toast",
      "description": "Wheat toast topped with creamy avocado, garlic salt, and crumbled feta cheese.",
      "ingredients": ["Wheat toast", "Avocado", "Garlic salt", "Feta cheese"],
      "price": 8.75,
      "image": "./breakfast/Avocado_Toast.webp",
      "category": "Breakfast",
      "allergens": ["Gluten", "Milk"],
      "recommended": "Goes great with a fresh fruit cup."
  }, 
  // Salads
  {
    "id": 1,
    "name": "Harvest Salad",
    "shortDescription": "Spinach salad with turkey, feta, apples, and pecans",
    "description": "A refreshing salad with fresh spinach, turkey, feta cheese, apples, pecans, and housemade honey poppy seed dressing.",
    "ingredients": ["Spinach", "Turkey", "Feta", "Apples", "Pecans", "Honey poppy seed dressing"],
    "price": 13.25,
    "image": "./salads/Harvest_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk", "Nuts"],
    "recommended": "Perfect with a side of warm bread."
},
{
    "id": 2,
    "name": "Garden Salad",
    "shortDescription": "Classic salad with fresh vegetables and shredded cheese",
    "description": "A mix of lettuce, onions, peppers, tomatoes, mushrooms, shredded cheese, and ranch dressing.",
    "ingredients": ["Lettuce mix", "Onions", "Peppers", "Tomatoes", "Mushrooms", "Shredded cheese", "Ranch dressing"],
    "price": 10.95,
    "image": "./salads/Garden_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk"],
    "recommended": "Add grilled chicken for extra protein."
},
{
    "id": 3,
    "name": "Greek Salad",
    "shortDescription": "Traditional Greek salad with feta and olives",
    "description": "A Greek-style salad with romaine lettuce, onions, peppers, tomatoes, olives, feta cheese, and Greek dressing.",
    "ingredients": ["Romaine lettuce", "Onions", "Peppers", "Tomatoes", "Olives", "Feta cheese", "Greek dressing"],
    "price": 12.50,
    "image": "./salads/Greek_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk"],
    "recommended": "Pairs well with pita bread or hummus."
},
{
    "id": 4,
    "name": "Spicy Chicken Salad",
    "shortDescription": "Chicken salad with hot sauce and bleu cheese",
    "description": "A zesty salad featuring lettuce mix, onions, chicken with hot sauce, bleu cheese, shredded cheese, and bleu cheese dressing.",
    "ingredients": ["Lettuce mix", "Onions", "Chicken", "Hot sauce", "Bleu cheese", "Shredded cheese", "Bleu cheese dressing"],
    "price": 12.95,
    "image": "./salads/Spicy_Chicken_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk"],
    "recommended": "Great with a refreshing iced tea."
},
{
    "id": 5,
    "name": "Chicken Caesar Salad",
    "shortDescription": "Classic Caesar salad with grilled chicken",
    "description": "A timeless Caesar salad with romaine lettuce, grilled chicken, croutons, parmesan cheese, and creamy Caesar dressing.",
    "ingredients": ["Romaine lettuce", "Chicken", "Croutons", "Parmesan cheese", "Caesar dressing"],
    "price": 12.50,
    "image": "./salads/Chicken_Caesar_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk", "Gluten"],
    "recommended": "Enjoy with a side of garlic bread."
},
{
    "id": 6,
    "name": "Hawaiian BBQ Salad",
    "shortDescription": "BBQ chicken with pineapple and fresh greens",
    "description": "A tropical twist on a salad, featuring lettuce mix, BBQ chicken, onions, pineapple, shredded cheese, and ranch dressing.",
    "ingredients": ["Lettuce mix", "BBQ chicken", "Onions", "Pineapple", "Shredded cheese", "Ranch dressing"],
    "price": 12.95,
    "image": "./salads/Hawaiian_BBQ_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk"],
    "recommended": "Perfect for those who love a sweet and savory combination."
},
{
    "id": 7,
    "name": "Garden Side Salad",
    "shortDescription": "A smaller version of the classic garden salad",
    "description": "A light salad with fresh lettuce, onions, peppers, tomatoes, mushrooms, shredded cheese, and a choice of dressing.",
    "ingredients": ["Lettuce", "Onions", "Peppers", "Tomatoes", "Mushrooms", "Shredded cheese", "Choice of dressing"],
    "price": 6.75,
    "image": "./salads/Garden_Side_Salad.webp",
    "category": "Salads",
    "allergens": ["Milk"],
    "recommended": "A great side dish for any meal."
},
    {
        "id": 1,
        "name": "Jallelujah Harvest",
        "shortDescription": "BBQ burger with a kick",
        "description": "A smoky BBQ burger with housemade sauce, mayo, and a perfectly grilled beef patty.",
        "ingredients": ["Beef patty", "BBQ sauce", "Mayo", "Lettuce", "Tomato", "Burger bun"],
        "price": 12.95,
        "image": "./burgers/Jallelujah_Harvest.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Pairs well with sweet potato fries."
    },
    {
        "id": 2,
        "name": "Sowers BBQ Burger",
        "shortDescription": "BBQ burger with a smoky twist",
        "description": "A juicy beef patty topped with housemade BBQ sauce, mayo, and melted American cheese.",
        "ingredients": ["Beef patty", "BBQ sauce", "Mayo", "American cheese", "Burger bun"],
        "price": 11.95,
        "image": "./burgers/Sowers_BBQ_Burger.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Perfect with a side of fries."
    },
    {
        "id": 3,
        "name": "Bleu Moon Burger",
        "shortDescription": "Spicy buffalo burger with bleu cheese",
        "description": "A bold burger with hot sauce, ranch, bleu cheese, and melted swiss cheese.",
        "ingredients": ["Beef patty", "Hot sauce", "Ranch", "Bleu cheese", "Swiss cheese", "Burger bun"],
        "price": 12.95,
        "image": "./burgers/Bleu_Moon_Burger.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Try it with a cold iced tea."
    },
    {
        "id": 4,
        "name": "Aloha_Burger",
        "shortDescription": "Sweet and savory Hawaiian-style burger",
        "description": "A tropical burger with housemade BBQ sauce, chipotle mayo, pineapple, bacon, and provolone cheese.",
        "ingredients": ["Beef patty", "BBQ sauce", "Chipotle mayo", "Pineapple", "Bacon", "Provolone cheese", "Burger bun"],
        "price": 12.95,
        "image": "./burgers/Aloha_Burger.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Great with a refreshing lemonade."
    }
];

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [dishes, setDishes] = useState(() => {
    return initialDishes;
  });
  
  const [selectedDish, setSelectedDish] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  
  // Add a new dish
  const addDish = (newDish) => {
    const id = dishes.length > 0 ? Math.max(...dishes.map(dish => dish.id)) + 1 : 1;
    setDishes([...dishes, { ...newDish, id }]);
  };
  
  // Update an existing dish
  const updateDish = (updatedDish) => {
    setDishes(dishes.map(dish => 
      dish.id === updatedDish.id ? updatedDish : dish
    ));
  };
  
  // Delete a dish
  const deleteDish = (id) => {
    setDishes(dishes.filter(dish => dish.id !== id));
    if (selectedDish && selectedDish.id === id) {
      setSelectedDish(null);
    }
  };
  
  // Get filtered dishes based on search term and category
  const getFilteredDishes = () => {
    return dishes.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            dish.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory ? dish.category === filterCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  };
  
  // Get unique categories from dishes
  const getCategories = () => {
    const categories = dishes.map(dish => dish.category);
    return ['All', ...new Set(categories)];
  };
  
  const value = {
    dishes,
    selectedDish,
    searchTerm,
    filterCategory,
    setSelectedDish,
    setSearchTerm,
    setFilterCategory,
    addDish,
    updateDish,
    deleteDish,
    getFilteredDishes,
    getCategories
  };
  
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};