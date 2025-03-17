import { Dish, DishCategory } from '@/types/dish';

// Breakfast dishes
const breakfastDishes: Dish[] = [
    {
        "id": 22,
        "name": "Cheese Omelet",
        "shortDescription": "Classic omelet with a mix of cheeses",
        "description": "A fluffy omelet filled with a delicious blend of cheddar, provolone, and swiss cheese.",
        "ingredients": ["Eggs", "Cheddar", "Provolone", "Swiss cheese"],
        "price": 10.95,
        "image": "/omelets/Cheese_Omelet.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk"],
        "recommended": "Great with toast or a side salad.",
        'isFavorite': false
    },
    {
        "id": 24,
        "name": "Greek Omelet",
        "shortDescription": "Mediterranean-style omelet with feta and vegetables",
        "description": "A flavorful omelet packed with onions, tomatoes, olives, spinach, and feta cheese.",
        "ingredients": ["Eggs", "Onions", "Tomatoes", "Olives", "Spinach", "Feta"],
        "price": 12.95,
        "image": "/omelets/Greek_Omelet.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk"],
        "recommended": "Pairs well with whole wheat toast.",
        'isFavorite': false
    },
    {
        "id": 29,
        "name": "Veggie Pesto Omelet",
        "shortDescription": "Vegetable omelet with housemade pesto",
        "description": "A nutritious omelet filled with onions, peppers, tomatoes, mushrooms, spinach, housemade pesto, and provolone cheese.",
        "ingredients": ["Eggs", "Onions", "Peppers", "Tomatoes", "Mushrooms", "Spinach", "Pesto", "Provolone"],
        "price": 13.95,
        "image": "/omelets/Veggie_Pesto_Omelet.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk", "Nuts"],
        "recommended": "Delicious with a side of fresh fruit.",
        'isFavorite': true
    },
    {
        "id": 34,
        "name": "Garden Turkey Omelet",
        "shortDescription": "Turkey and vegetable omelet with garlic",
        "description": "A wholesome omelet with turkey, onions, peppers, spinach, swiss cheese, and a hint of garlic.",
        "ingredients": ["Eggs", "Turkey", "Onions", "Peppers", "Spinach", "Swiss cheese", "Garlic"],
        "price": 12.75,
        "image": "/omelets/Garden_Turkey_Omelet.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk"],
        "recommended": "Try it with a side of hash browns.",
        'isFavorite': false
    },
    {
        "id": 35,
        "name": "French Toast",
        "shortDescription": "Golden French toast with sweet toppings",
        "description": "Thick slices of golden-brown French toast, served with whipped cream, maple syrup, and a choice of chocolate chips, blueberries, strawberries, or pecans.",
        "ingredients": ["Bread", "Eggs", "Milk", "Maple syrup", "Choice of toppings"],
        "price": 13.50,
        "image": "/breakfast/French_Toast.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk", "Gluten"],
        "recommended": "Goes great with a hot latte.",
        'isFavorite': true
    },
    {
        "id": 38,
        "name": "Yogurt Parfait",
        "shortDescription": "Organic yogurt with housemade granola",
        "description": "A refreshing parfait featuring organic yogurt, housemade granola, and your choice of two fruits: strawberries, blueberries, pineapples, mangoes, or bananas.",
        "ingredients": ["Yogurt", "Granola", "Choice of fruits"],
        "price": 6.75,
        "image": "/breakfast/Yogurt_Parfait.webp",
        "category": "Breakfast",
        "allergens": ["Milk", "Nuts"],
        "recommended": "Perfect as a light breakfast or snack.",
        'isFavorite': false
    },
    {
        "id": 41,
        "name": "Fruit Cup",
        "shortDescription": "Fresh fruit selection",
        "description": "A healthy selection of three fresh fruits, including strawberries, blueberries, bananas, and pineapples.",
        "ingredients": ["Choice of fresh fruits"],
        "price": 5.50,
        "image": "/breakfast/Fruit_Cup.webp",
        "category": "Breakfast",
        "allergens": [],
        "recommended": "Pairs well with a yogurt parfait.",
        'isFavorite': false
    },
    {
        "id": 43,
        "name": "Garlic Turkey Egg Sandwich",
        "shortDescription": "Savory turkey and egg sandwich with garlic mayo",
        "description": "A hearty breakfast sandwich with turkey, onions, peppers, spinach, swiss cheese, and a touch of garlic mayo.",
        "ingredients": ["Turkey", "Eggs", "Onions", "Peppers", "Spinach", "Swiss cheese", "Garlic mayo"],
        "price": 9.50,
        "image": "/breakfast/Garlic_Turkey_Egg_Sandwich.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk", "Gluten"],
        "recommended": "Enjoy with a side of fresh fruit.",
        'isFavorite': false
    },
    {
        "id": 45,
        "name": "Sowers Granola with Milk",
        "shortDescription": "Housemade granola with milk",
        "description": "A crunchy and nutritious mix of housemade granola served with milk.",
        "ingredients": ["Granola", "Milk"],
        "price": 5.75,
        "image": "/breakfast/Sowers_Granola_with_Milk.webp",
        "category": "Breakfast",
        "allergens": ["Milk", "Nuts"],
        "recommended": "Delicious with fresh fruit.",
        'isFavorite': false
    },
    {
        "id": 46,
        "name": "Chipotle Bacon Egg Sandwich",
        "shortDescription": "Spicy bacon and egg sandwich with chipotle mayo",
        "description": "A bold breakfast sandwich with crispy bacon, cheddar cheese, and chipotle mayo.",
        "ingredients": ["Bacon", "Eggs", "Cheddar", "Chipotle mayo"],
        "price": 9.75,
        "image": "/breakfast/Chipotle_Bacon_Egg_Sandwich.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk", "Gluten"],
        "recommended": "Best enjoyed with a cappuccino.",
        'isFavorite': false
    },
    {
        "id": 49,
        "name": "Pesto-Port Egg Sandwich",
        "shortDescription": "Mushroom and egg sandwich with housemade pesto",
        "description": "A savory sandwich featuring portabella mushrooms, provolone cheese, and housemade pesto.",
        "ingredients": ["Portabella mushrooms", "Eggs", "Provolone", "Pesto"],
        "price": 9.50,
        "image": "/breakfast/Pesto_Port_Egg_Sandwich.webp",
        "category": "Breakfast",
        "allergens": ["Eggs", "Milk", "Nuts", "Gluten"],
        "recommended": "Try it with a hot tea.",
        'isFavorite': false
    },
    {
        "id": 50,
        "name": "Avocado Toast",
        "shortDescription": "Simple and delicious avocado toast",
        "description": "Wheat toast topped with creamy avocado, garlic salt, and crumbled feta cheese.",
        "ingredients": ["Wheat toast", "Avocado", "Garlic salt", "Feta cheese"],
        "price": 8.75,
        "image": "/breakfast/Avocado_Toast.webp",
        "category": "Breakfast",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Goes great with a fresh fruit cup.",
        'isFavorite': false
    }
];

// Salad dishes
const saladDishes: Dish[] = [
    {
        "id": 1,
        "name": "Harvest Salad",
        "shortDescription": "Spinach salad with turkey, feta, apples, and pecans",
        "description": "A refreshing salad with fresh spinach, turkey, feta cheese, apples, pecans, and housemade honey poppy seed dressing.",
        "ingredients": ["Spinach", "Turkey", "Feta", "Apples", "Pecans", "Honey poppy seed dressing"],
        "price": 13.25,
        "image": "/salads/Harvest_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk", "Nuts"],
        "recommended": "Perfect with a side of warm bread.",
        'isFavorite': true
    },
    {
        "id": 2,
        "name": "Garden Salad",
        "shortDescription": "Classic salad with fresh vegetables and shredded cheese",
        "description": "A mix of lettuce, onions, peppers, tomatoes, mushrooms, shredded cheese, and ranch dressing.",
        "ingredients": ["Lettuce mix", "Onions", "Peppers", "Tomatoes", "Mushrooms", "Shredded cheese", "Ranch dressing"],
        "price": 10.95,
        "image": "/salads/Garden_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk"],
        "recommended": "Add grilled chicken for extra protein.",
        'isFavorite': false
    },
    {
        "id": 3,
        "name": "Greek Salad",
        "shortDescription": "Traditional Greek salad with feta and olives",
        "description": "A Greek-style salad with romaine lettuce, onions, peppers, tomatoes, olives, feta cheese, and Greek dressing.",
        "ingredients": ["Romaine lettuce", "Onions", "Peppers", "Tomatoes", "Olives", "Feta cheese", "Greek dressing"],
        "price": 12.50,
        "image": "/salads/Greek_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk"],
        "recommended": "Pairs well with pita bread or hummus.",
        'isFavorite': false
    },
    {
        "id": 4,
        "name": "Spicy Chicken Salad",
        "shortDescription": "Chicken salad with hot sauce and bleu cheese",
        "description": "A zesty salad featuring lettuce mix, onions, chicken with hot sauce, bleu cheese, shredded cheese, and bleu cheese dressing.",
        "ingredients": ["Lettuce mix", "Onions", "Chicken", "Hot sauce", "Bleu cheese", "Shredded cheese", "Bleu cheese dressing"],
        "price": 12.95,
        "image": "/salads/Spicy_Chicken_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk"],
        "recommended": "Great with a refreshing iced tea.",
        'isFavorite': true
    },
    {
        "id": 5,
        "name": "Chicken Caesar Salad",
        "shortDescription": "Classic Caesar salad with grilled chicken",
        "description": "A timeless Caesar salad with romaine lettuce, grilled chicken, croutons, parmesan cheese, and creamy Caesar dressing.",
        "ingredients": ["Romaine lettuce", "Chicken", "Croutons", "Parmesan cheese", "Caesar dressing"],
        "price": 12.50,
        "image": "/salads/Chicken_Caesar_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk", "Gluten"],
        "recommended": "Enjoy with a side of garlic bread.",
        'isFavorite': false
    },
    {
        "id": 6,
        "name": "Hawaiian BBQ Salad",
        "shortDescription": "BBQ chicken with pineapple and fresh greens",
        "description": "A tropical twist on a salad, featuring lettuce mix, BBQ chicken, onions, pineapple, shredded cheese, and ranch dressing.",
        "ingredients": ["Lettuce mix", "BBQ chicken", "Onions", "Pineapple", "Shredded cheese", "Ranch dressing"],
        "price": 12.95,
        "image": "/salads/Hawaiian_BBQ_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk"],
        "recommended": "Perfect for those who love a sweet and savory combination.",
        'isFavorite': false
    },
    {
        "id": 7,
        "name": "Garden Side Salad",
        "shortDescription": "A smaller version of the classic garden salad",
        "description": "A light salad with fresh lettuce, onions, peppers, tomatoes, mushrooms, shredded cheese, and a choice of dressing.",
        "ingredients": ["Lettuce", "Onions", "Peppers", "Tomatoes", "Mushrooms", "Shredded cheese", "Choice of dressing"],
        "price": 6.75,
        "image": "/salads/Garden_Side_Salad.webp",
        "category": "Salads",
        "allergens": ["Milk"],
        "recommended": "A great side dish for any meal.",
        'isFavorite': false
    }
];

// Burger dishes
const burgerDishes: Dish[] = [
    {
        "id": 8,
        "name": "Jallelujah Harvest",
        "shortDescription": "BBQ burger with a kick",
        "description": "A smoky BBQ burger with housemade sauce, mayo, and a perfectly grilled beef patty.",
        "ingredients": ["Beef patty", "BBQ sauce", "Mayo", "Lettuce", "Tomato", "Burger bun"],
        "price": 12.95,
        "image": "/burgers/Jallelujah_Harvest.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Pairs well with sweet potato fries.",
        'isFavorite': false
    },
    {
        "id": 9,
        "name": "Sowers BBQ Burger",
        "shortDescription": "BBQ burger with a smoky twist",
        "description": "A juicy beef patty topped with housemade BBQ sauce, mayo, and melted American cheese.",
        "ingredients": ["Beef patty", "BBQ sauce", "Mayo", "American cheese", "Burger bun"],
        "price": 11.95,
        "image": "/burgers/Sowers_BBQ_Burger.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Perfect with a side of fries.",
        'isFavorite': false
    },
    {
        "id": 10,
        "name": "Bleu Moon Burger",
        "shortDescription": "Spicy buffalo burger with bleu cheese",
        "description": "A bold burger with hot sauce, ranch, bleu cheese, and melted swiss cheese.",
        "ingredients": ["Beef patty", "Hot sauce", "Ranch", "Bleu cheese", "Swiss cheese", "Burger bun"],
        "price": 12.95,
        "image": "/burgers/Bleu_Moon_Burger.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Try it with a cold iced tea.",
        'isFavorite': false
    },
    {
        "id": 11,
        "name": "Aloha Burger",
        "shortDescription": "Sweet and savory Hawaiian-style burger",
        "description": "A tropical burger with housemade BBQ sauce, chipotle mayo, pineapple, bacon, and provolone cheese.",
        "ingredients": ["Beef patty", "BBQ sauce", "Chipotle mayo", "Pineapple", "Bacon", "Provolone cheese", "Burger bun"],
        "price": 12.95,
        "image": "/burgers/Aloha_Burger.webp",
        "category": "Burgers",
        "allergens": ["Gluten", "Milk"],
        "recommended": "Great with a refreshing lemonade.",
        'isFavorite': false
    }
];

// Drinks dishes
const drinks: Dish[] = [
  {
    id: 101,
    name: "Bottled Beer Offerings",
    shortDescription: "Премиальное пиво в бутылках",
    description: "Насладитесь нашей коллекцией премиального пива в бутылках от лучших производителей во всем мире.",
    ingredients: [
      "Stella", "Blue Moon", "Red Stripe", "Corona", "Yuengling", 
      "Sweetwater 420", "Bud Light", "Michelob Ultra", "Redd's Apple Ale", 
      "Heineken", "Budweiser", "Coors Light", "Guinness"
    ],
    price: 8,
    image: "/menu/beer.jpg",
    category: "Drinks",
    allergens: ["Глютен", "Ячмень"],
    isFavorite: false
  },
  {
    id: 102,
    name: "Домашнее крафтовое пиво",
    shortDescription: "Наше фирменное крафтовое пиво",
    description: "Варится по уникальному рецепту нашего пивовара с использованием лучших сортов хмеля и солода.",
    ingredients: ["Пиво", "Хмель", "Солод", "Вода"],
    price: 10,
    image: "/menu/beer-craft.jpg",
    category: "Drinks",
    allergens: ["Глютен", "Ячмень"],
    recommended: "Идеально сочетается с нашими фирменными бургерами",
    isFavorite: false
  },
  {
    id: 103,
    name: "Винная карта",
    shortDescription: "Подборка вин со всего мира",
    description: "Тщательно отобранная коллекция вин из лучших винодельческих регионов мира.",
    ingredients: ["Вино", "Красное", "Белое", "Розовое"],
    price: 12,
    image: "/menu/wine.jpg",
    category: "Drinks",
    allergens: ["Сульфиты"],
    isFavorite: false
  },
  {
    id: 104,
    name: "Домашний лимонад",
    shortDescription: "Освежающий лимонад с мятой",
    description: "Приготовленный вручную лимонад с свежевыжатым лимонным соком, мятой и тростниковым сахаром.",
    ingredients: ["Лимон", "Мята", "Сахар", "Газированная вода"],
    price: 5,
    image: "/menu/lemonade.jpg",
    category: "Drinks",
    allergens: [],
    recommended: "Наш самый популярный безалкогольный напиток",
    isFavorite: false
  }
];

// Combine all dishes
const initialDishes: Dish[] = [
    ...breakfastDishes,
    ...saladDishes,
    ...burgerDishes,
    ...drinks
];

// Filter favorite dishes
const favoriteDishes: Dish[] = initialDishes.filter(dish => dish.isFavorite);

// Get dishes by category
export const getDishesByCategory = (category: DishCategory): Dish[] => {
    return initialDishes.filter(dish => dish.category === category);
};

export { 
    favoriteDishes,
    breakfastDishes,
    saladDishes,
    burgerDishes,
    drinks
};

export default initialDishes;
