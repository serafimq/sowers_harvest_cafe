module.exports = {
  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async up(db) {
    return db.collection('dishes').insertMany([
      {
        "name": "French Toast",
        "shortDescription": "Choice of topping: chocolate chips, blueberries, strawberries, or pecans. Served with whipped cream & real maple syrup",
        "description": "",
        "ingredients": ["chocolate chips", "blueberries", "strawberries", "pecans", "whipped cream", "maple syrup"],
        "price": {
          "full": 13.50,
          "half": 9.00
        },
        "image": "/breakfast/French_Toast.webp",
        "category": "Breakfast",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true 
      },
      {
        "name": "Yogurt Parfait",
        "shortDescription": "Organic yogurt, housemade granola & choice of 2 fruits: strawberries, blueberries, pineapples, mangoes, or bananas.",
        "description": "",
        "ingredients": ["organic yogurt", "housemade granola", "strawberries", "blueberries", "pineapples", "mangoes", "bananas"],
        "price": {
          "default": 6.75 
        },
        "image": "/breakfast/Yogurt_Parfait.webp",
        "category": "Breakfast",
        "allergens": ["dairy", "gluten"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true 
      },
      {
        "name": "Fruit Cup",
        "shortDescription": "Choice of 3 fruits: strawberries, blueberries, bananas, pineapples.",
        "description": "",
        "ingredients": ["strawberries", "blueberries", "bananas", "pineapples"],
        "price": {
          "default": 5.50 
        },
        "image": "/breakfast/Fruit_Cup.webp",
        "category": "Breakfast",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Sowers Granola with Milk",
        "shortDescription": "", 
        "description": "",
        "ingredients": ["housemade granola", "milk"],
        "price": {
          "default": 5.75 
        },
        "image": "/breakfast/Sowers_Granola_Milk.webp", 
        "category": "Breakfast",
        "allergens": ["dairy", "gluten"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Toast",
        "shortDescription": "",
        "description": "",
        "ingredients": ["toast"], 
        "price": {
          "default": 1.50
        },
        "image": "/breakfast/Toast.webp",
        "category": "Breakfast",
        "allergens": ["gluten"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },{
        "name": "Cheese Omelet",
        "shortDescription": "Cheddar, provolone, & swiss. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "cheddar", "provolone", "swiss", "whole wheat toast"],
        "price": {
          "default": 11.95
        },
        "image": "/omelets/Cheese_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Greek Omelet",
        "shortDescription": "Onions, tomatoes, olives, spinach, & feta. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "onions", "tomatoes", "olives", "spinach", "feta", "whole wheat toast"],
        "price": {
          "default": 12.95
        },
        "image": "/omelets/Greek_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chipotle Bacon Omelet",
        "shortDescription": "Ham, bacon, onions, cheddar, & chipotle mayo. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "ham", "bacon", "onions", "cheddar", "chipotle mayo", "whole wheat toast"],
        "price": {
          "default": 13.25
        },
        "image": "/omelets/Chipotle_Bacon_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Veggie Pesto Omelet",
        "shortDescription": "Onions, peppers, tomatoes, mushrooms, spinach, housemade pesto, & provolone. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "onions", "peppers", "tomatoes", "mushrooms", "spinach", "housemade pesto", "provolone", "whole wheat toast"],
        "price": {
          "default": 13.95
        },
        "image": "/omelets/Veggie_Pesto_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Southwestern Omelet",
        "shortDescription": "Ham, onions, peppers, tomatoes, black beans, cheddar, & side of salsa. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "ham", "onions", "peppers", "tomatoes", "black beans", "cheddar", "salsa", "whole wheat toast"],
        "price": {
          "default": 13.25
        },
        "image": "/omelets/Southwestern_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Garden Turkey Omelet",
        "shortDescription": "Turkey, onions, peppers, spinach, swiss, & garlic mayo. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "turkey", "onions", "peppers", "spinach", "swiss", "garlic mayo", "whole wheat toast"],
        "price": {
          "default": 12.95
        },
        "image": "/omelets/Garden_Turkey_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Hawaiian Omelet",
        "shortDescription": "Ham, onions, pineapple & swiss. Served with a side of whole wheat toast.",
        "description": "",
        "ingredients": ["omelet", "ham", "onions", "pineapple", "swiss", "whole wheat toast"],
        "price": {
          "default": 12.95
        },
        "image": "/omelets/Hawaiian_Omelet.webp", 
        "category": "Omelets",
        "allergens": ["dairy", "gluten", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Garlic Turkey Egg Sandwich",
        "shortDescription": "Turkey, onions, peppers, spinach, swiss, & garlic mayo on a sandwich.",
        "description": "",
        "ingredients": ["sandwich bread", "egg", "turkey", "onions", "peppers", "spinach", "swiss", "garlic mayo"],
        "price": {
          "default": 9.50
        },
        "image": "/sandwiches/Garlic_Turkey_Egg_Sandwich.webp", 
        "category": "Specialty Breakfast Sandwiches",
        "allergens": ["gluten", "egg", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chipotle Bacon Egg Sandwich",
        "shortDescription": "Bacon, cheddar, chipotle mayo on an egg sandwich.",
        "description": "",
        "ingredients": ["sandwich bread", "egg", "bacon", "cheddar", "chipotle mayo"],
        "price": {
          "default": 9.95
        },
        "image": "/sandwiches/Chipotle_Bacon_Egg_Sandwich.webp", 
        "category": "Specialty Breakfast Sandwiches",
        "allergens": ["gluten", "egg", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pesto-Port Egg Sandwich",
        "shortDescription": "Portabella mushrooms, provolone, housemade pesto on an egg sandwich.",
        "description": "",
        "ingredients": ["sandwich bread", "egg", "portabella mushrooms", "provolone", "housemade pesto"],
        "price": {
          "default": 9.50
        },
        "image": "/sandwiches/Pesto_Port_Egg_Sandwich.webp", 
        "category": "Specialty Breakfast Sandwiches",
        "allergens": ["gluten", "egg", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Classic Egg Sandwich",
        "shortDescription": "American cheese and your choice of bacon, ham, or turkey on an egg sandwich.",
        "description": "",
        "ingredients": ["sandwich bread", "egg", "american cheese", "bacon", "ham", "turkey"],
        "price": {
          "default": 9.25
        },
        "image": "/sandwiches/Classic_Egg_Sandwich.webp", 
        "category": "Specialty Breakfast Sandwiches",
        "allergens": ["gluten", "egg", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Avocado Toast",
        "shortDescription": "Wheat toast topped with avocado, garlic salt & feta.",
        "description": "",
        "ingredients": ["wheat toast", "avocado", "garlic salt", "feta"],
        "price": {
          "default": 8.75
        },
        "image": "/sandwiches/Avocado_Toast.webp",
        "category": "Specialty Breakfast Sandwiches",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chicken Caesar Panini/Grillatilla",
        "shortDescription": "Chicken, romaine, parmesan, & caesar dressing. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "chicken", "romaine", "parmesan", "caesar dressing"],
        "price": {
          "default": 12.95
        },
        "image": "/paninis/Chicken_Caesar.webp", 
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Vegetable Pesto Panini/Grillatilla",
        "shortDescription": "Onions, peppers, tomatoes, portabella mushrooms, kale, avocado, provolone, & housemade pesto. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "onions", "peppers", "tomatoes", "portabella mushrooms", "kale", "avocado", "provolone", "housemade pesto"],
        "price": {
          "default": 13.95
        },
        "image": "/paninis/Vegetable_Pesto.webp",
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chipotle Chicken Bacon Ranch Panini/Grillatilla",
        "shortDescription": "Chicken, bacon, lettuce, cheddar, chipotle mayo, & ranch. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "chicken", "bacon", "lettuce", "cheddar", "chipotle mayo", "ranch"],
        "price": {
          "default": 13.95 
        },
        "image": "/paninis/Chipotle_Chicken_Bacon_Ranch.webp", 
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Spicy Mango Sriracha Panini/Grillatilla",
        "shortDescription": "Chicken, lettuce, onion, mango, avocado, cheddar, & spicy sriracha ranch. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "chicken", "lettuce", "onion", "mango", "avocado", "cheddar", "spicy sriracha ranch"],
        "price": {
          "default": 15.25
        },
        "image": "/paninis/Spicy_Mango_Sriracha.webp",
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Buffalo Chicken Panini/Grillatilla",
        "shortDescription": "Chicken, kale, onion, swiss, bleu cheese, hot sauce, & ranch. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "chicken", "kale", "onion", "swiss", "bleu cheese", "hot sauce", "ranch"],
        "price": {
          "default": 13.95 
        },
        "image": "/paninis/Buffalo_Chicken.webp", 
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Apple Cheddar Turkey Panini/Grillatilla",
        "shortDescription": "Turkey, apples, cheddar, & apple butter. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "turkey", "apples", "cheddar", "apple butter"],
        "price": {
          "default": 12.75
        },
        "image": "/paninis/Apple_Cheddar_Turkey.webp", 
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Maui BBQ Chicken Panini/Grillatilla",
        "shortDescription": "Chicken, lettuce, onion, pineapple, cheddar, & housemade bbq sauce. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "chicken", "lettuce", "onion", "pineapple", "cheddar", "housemade bbq sauce"],
        "price": {
          "default": 12.95
        },
        "image": "/paninis/Maui_BBQ_Chicken.webp",
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Sembrador Chicken Panini/Grillatilla",
        "shortDescription": "Chicken, onions, peppers, black beans, swiss, & salsa. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "chicken", "onions", "peppers", "black beans", "swiss", "salsa"],
        "price": {
          "default": 12.95 
        },
        "image": "/paninis/Sembrador_Chicken.webp",
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pesto Cream Cheese Panini/Grillatilla",
        "shortDescription": "Housemade pesto & cream cheese. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "housemade pesto", "cream cheese"],
        "price": {
          "default": 11.50 
        },
        "image": "/paninis/Pesto_Cream_Cheese.webp",
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Three Cheese Panini/Grillatilla",
        "shortDescription": "Cheddar, provolone, & swiss. Default on Sourdough Panini.",
        "description": "Also available as Grillatilla (+$2.00) or on Gluten Free Panini (+$0.75).",
        "ingredients": ["sourdough bread", "cheddar", "provolone", "swiss"],
        "price": {
          "default": 10.50
        },
        "image": "/paninis/Three_Cheese.webp",
        "category": "Paninis and Grillatillas",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Harvest Salad",
        "shortDescription": "Spinach, pecans, craisins, apples, turkey, feta, & housemade honey poppy seed dressing.",
        "description": "",
        "ingredients": ["spinach", "pecans", "craisins", "apples", "turkey", "feta", "housemade honey poppy seed dressing"],
        "price": {
          "default": 13.25
        },
        "image": "/salads/Harvest_Salad.webp", 
        "category": "Salads",
        "allergens": ["dairy", "tree nuts"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Garden Salad",
        "shortDescription": "Lettuce mix, onions, peppers, tomatoes, mushrooms, shredded cheese, & ranch dressing.",
        "description": "Add chicken (+$2.00). Other dressings available.",
        "ingredients": ["lettuce mix", "onions", "peppers", "tomatoes", "mushrooms", "shredded cheese", "ranch dressing"],
        "price": {
          "default": 11.95 
        },
        "image": "/salads/Garden_Salad.webp", 
        "category": "Salads",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Greek Salad",
        "shortDescription": "Romaine lettuce, onions, peppers, tomatoes, olives, feta, & greek dressing.",
        "description": "Add chicken (+$2.00). Other dressings available.",
        "ingredients": ["romaine lettuce", "onions", "peppers", "tomatoes", "olives", "feta", "greek dressing"],
        "price": {
          "default": 12.50 
        },
        "image": "/salads/Greek_Salad.webp", 
        "category": "Salads",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Spicy Chicken Salad",
        "shortDescription": "Lettuce mix, onions, chicken w/ hot sauce, bleu cheese, shredded cheese, & bleu cheese dressing.",
        "description": "Other dressings available.",
        "ingredients": ["lettuce mix", "onions", "chicken", "hot sauce", "bleu cheese", "shredded cheese", "bleu cheese dressing"],
        "price": {
          "default": 12.95
        },
        "image": "/salads/Spicy_Chicken_Salad.webp", 
        "category": "Salads",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chicken Caesar Salad",
        "shortDescription": "Romaine lettuce, chicken, croutons, parmesan & caesar dressing.",
        "description": "Other dressings available.",
        "ingredients": ["romaine lettuce", "chicken", "croutons", "parmesan", "caesar dressing"],
        "price": {
          "default": 12.95
        },
        "image": "/salads/Chicken_Caesar_Salad.webp", 
        "category": "Salads",
        "allergens": ["gluten", "dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Hawaiian BBQ Salad",
        "shortDescription": "Lettuce mix, bbq chicken, onions, pineapple, shredded cheese, & ranch dressing.",
        "description": "Other dressings available.",
        "ingredients": ["lettuce mix", "bbq chicken", "onions", "pineapple", "shredded cheese", "ranch dressing"],
        "price": {
          "default": 12.95
        },
        "image": "/salads/Hawaiian_BBQ_Salad.webp",
        "category": "Salads",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Garden Side Salad",
        "shortDescription": "Smaller portion of mixed greens, veggies, and shredded cheese.",
        "description": "Choice of dressing required (Ranch, Vinaigrette, Caesar, Honey Poppy Seed, Bleu Cheese, Greek).",
        "ingredients": ["lettuce mix", "onions", "peppers", "tomatoes", "shredded cheese"], 
        "price": {
          "default": 6.75
        },
        "image": "/salads/Garden_Side_Salad.webp",
        "category": "Salads",
        "allergens": ["dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chocolate Chip Cookie",
        "shortDescription": "Freshly baked classic cookie.",
        "description": "",
        "ingredients": ["cookie dough", "chocolate chips"], 
        "price": { "default": 2.25 },
        "image": "/bakedgoods/Chocolate_Chip_Cookie.webp", 
        "category": "Baked Goods",
        "allergens": ["gluten", "dairy", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chocolate Peanut Butter Cookie",
        "shortDescription": "Freshly baked cookie with chocolate and peanut butter.",
        "description": "",
        "ingredients": ["cookie dough", "chocolate chips", "peanut butter"], 
        "price": { "default": 2.25 },
        "image": "/bakedgoods/Chocolate_Peanut_Butter_Cookie.webp",
        "category": "Baked Goods",
        "allergens": ["gluten", "dairy", "egg", "peanut"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Gluten Free Molasses Cookie",
        "shortDescription": "Freshly baked gluten-free molasses cookie.",
        "description": "",
        "ingredients": ["gluten-free flour", "molasses", "spices"], 
        "price": { "default": 2.75 }, 
        "image": "/bakedgoods/GF_Molasses_Cookie.webp", 
        "category": "Baked Goods",
        "allergens": ["dairy", "egg"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Gluten Free Chocolate Chip Cookie",
        "shortDescription": "Freshly baked gluten-free chocolate chip cookie.",
        "description": "",
        "ingredients": ["gluten-free flour", "chocolate chips"], 
        "price": { "default": 2.75 }, 
        "image": "/bakedgoods/GF_Chocolate_Chip_Cookie.webp", 
        "category": "Baked Goods",
        "allergens": ["dairy", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Blueberry Streusel Muffin",
        "shortDescription": "Sowers muffin with blueberries and streusel topping.",
        "description": "",
        "ingredients": ["muffin batter", "blueberries", "streusel topping"], 
        "price": { "default": 4.95 },
        "image": "/bakedgoods/Blueberry_Streusel_Muffin.webp", 
        "category": "Baked Goods",
        "allergens": ["gluten", "dairy", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Banana Chocolate Chip Muffin",
        "shortDescription": "Sowers muffin with banana and chocolate chips.",
        "description": "",
        "ingredients": ["muffin batter", "banana", "chocolate chips"], 
        "price": { "default": 4.95 },
        "image": "/bakedgoods/Banana_Chocolate_Chip_Muffin.webp", 
        "category": "Baked Goods",
        "allergens": ["gluten", "dairy", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Nutella Stuffed Muffin",
        "shortDescription": "Sowers muffin stuffed with Nutella.",
        "description": "",
        "ingredients": ["muffin batter", "nutella"], 
        "price": { "default": 4.95 },
        "image": "/bakedgoods/Nutella_Stuffed_Muffin.webp", 
        "category": "Baked Goods",
        "allergens": ["gluten", "dairy", "egg", "tree nuts"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Seasonal Selection Muffin",
        "shortDescription": "Ask about our current seasonal muffin flavor.",
        "description": "Flavor and allergens vary.",
        "ingredients": ["muffin batter", "seasonal ingredients"], 
        "price": { "default": 4.95 },
        "image": "/bakedgoods/Seasonal_Muffin.webp", 
        "category": "Baked Goods",
        "allergens": ["gluten", "dairy", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Gluten Free Pumpkin Chocolate Chip Muffin",
        "shortDescription": "Gluten-free Sowers muffin with pumpkin and chocolate chips.",
        "description": "",
        "ingredients": ["gluten-free flour", "pumpkin", "chocolate chips"], 
        "price": { "default": 5.45 }, 
        "image": "/bakedgoods/GF_Pumpkin_Chocolate_Chip_Muffin.webp", 
        "category": "Baked Goods",
        "allergens": ["dairy", "egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Gluten Free Mixed Berry Muffin (DF)",
        "shortDescription": "Gluten-free and dairy-free Sowers muffin with mixed berries.",
        "description": "",
        "ingredients": ["gluten-free flour", "dairy-free substitute", "mixed berries"], 
        "price": { "default": 5.45 }, 
        "image": "/bakedgoods/GF_Mixed_Berry_Muffin_DF.webp", 
        "category": "Baked Goods",
        "allergens": ["egg"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Locally Roasted Coffee",
        "shortDescription": "Freshly brewed local coffee.",
        "description": "",
        "ingredients": ["coffee"],
        "price": {
          "12oz": 2.50,
          "16oz": 3.00
        },
        "image": "/hotdrinks/Coffee.webp", 
        "category": "Hot Drinks",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Cafe-au-Lait",
        "shortDescription": "1/2 locally roasted coffee, 1/2 steamed milk.",
        "description": "",
        "ingredients": ["coffee", "steamed milk"],
        "price": {
          "12oz": 3.75,
          "16oz": 4.25
        },
        "image": "/hotdrinks/Cafe_au_Lait.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Americano",
        "shortDescription": "Double shot of espresso with hot water.",
        "description": "",
        "ingredients": ["espresso", "hot water"],
        "price": {
          "12oz": 3.25,
          "16oz": 3.50
        },
        "image": "/hotdrinks/Americano.webp", 
        "category": "Hot Drinks",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Red Eye",
        "shortDescription": "Double shot of espresso with locally roasted coffee.",
        "description": "",
        "ingredients": ["espresso", "coffee"],
        "price": {
          "12oz": 3.75,
          "16oz": 4.25
        },
        "image": "/hotdrinks/Red_Eye.webp",
        "category": "Hot Drinks",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Cappuccino",
        "shortDescription": "Double shot of espresso with foamed milk.",
        "description": "",
        "ingredients": ["espresso", "foamed milk"],
        "price": {
          "12oz": 4.50,
          "16oz": 4.75
        },
        "image": "/hotdrinks/Cappuccino.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Latte",
        "shortDescription": "Double shot of espresso with steamed milk.",
        "description": "",
        "ingredients": ["espresso", "steamed milk"],
        "price": {
          "12oz": 4.75,
          "16oz": 4.95
        },
        "image": "/hotdrinks/Latte.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Cafe Mocha",
        "shortDescription": "Double shot espresso, steamed milk & choice of sauce.",
        "description": "Sauce options: caramel, white chocolate, or dark chocolate.",
        "ingredients": ["espresso", "steamed milk", "chocolate sauce", "caramel sauce", "white chocolate sauce"], // Включаем все возможные соусы
        "price": {
          "12oz": 4.95,
          "16oz": 5.25
        },
        "image": "/hotdrinks/Cafe_Mocha.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chai Latte",
        "shortDescription": "Spiced chai concentrate with steamed milk.",
        "description": "",
        "ingredients": ["chai concentrate", "steamed milk"],
        "price": {
          "12oz": 4.95,
          "16oz": 5.25
        },
        "image": "/hotdrinks/Chai_Latte.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Hot Chocolate",
        "shortDescription": "Steamed milk with chocolate.",
        "description": "",
        "ingredients": ["steamed milk", "chocolate syrup/powder"],
        "price": {
          "12oz": 4.25,
          "16oz": 4.50
        },
        "image": "/hotdrinks/Hot_Chocolate.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "French Press Coffee",
        "shortDescription": "Locally roasted coffee brewed via French Press.",
        "description": "",
        "ingredients": ["coffee"],
        "price": {
          "20oz": 5.25,
          "32oz": 6.25
        },
        "image": "/hotdrinks/French_Press.webp", 
        "category": "Hot Drinks",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Espresso (Double Shot)",
        "shortDescription": "Double shot of espresso.",
        "description": "",
        "ingredients": ["espresso"],
        "price": {
          "2oz": 3.25 
        },
        "image": "/hotdrinks/Espresso.webp", 
        "category": "Hot Drinks",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Macchiato",
        "shortDescription": "Double shot of espresso with a dollop of foamed milk.",
        "description": "",
        "ingredients": ["espresso", "foamed milk"],
        "price": {
          "2oz": 4.25 
        },
        "image": "/hotdrinks/Macchiato.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Cortado",
        "shortDescription": "Equal parts espresso and steamed milk (2oz each).",
        "description": "",
        "ingredients": ["espresso", "steamed milk"],
        "price": {
          "4oz": 4.25 
        },
        "image": "/hotdrinks/Cortado.webp", 
        "category": "Hot Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Earl Grey Moonlight Tea",
        "shortDescription": "Black tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Black Tea",
        "ingredients": ["earl grey moonlight tea leaves", "hot water", "ice", "milk"], 
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Earl_Grey_Moonlight.webp", 
        "category": "Teas",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Sowers Harvest Tea",
        "shortDescription": "Black tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Black Tea",
        "ingredients": ["sowers harvest tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Sowers_Harvest.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Irish Breakfast Tea",
        "shortDescription": "Black tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Black Tea",
        "ingredients": ["irish breakfast tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Irish_Breakfast.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Cherry Green Tea",
        "shortDescription": "Green tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Green Tea",
        "ingredients": ["cherry green tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Cherry_Green.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "White Monkey Tea",
        "shortDescription": "Green tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Green Tea",
        "ingredients": ["white monkey tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/White_Monkey.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Peach Oolong Tea",
        "shortDescription": "Oolong tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Oolong Tea",
        "ingredients": ["peach oolong tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Peach_Oolong.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "White Strawberry Tea",
        "shortDescription": "White tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "White Tea",
        "ingredients": ["white strawberry tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/White_Strawberry.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Blood Orange Tea",
        "shortDescription": "Herbal tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Herbal Tea (Caffeine Free)",
        "ingredients": ["blood orange tea blend", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Blood_Orange.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Spearmint Tea",
        "shortDescription": "Herbal tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Herbal Tea (Caffeine Free)",
        "ingredients": ["spearmint tea leaves", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Spearmint.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Green Rooibus Blueberry Tea",
        "shortDescription": "Rooibos tea blend. Available Hot, Iced, as Latte or Frappe.",
        "description": "Rooibos Tea (Caffeine Free)",
        "ingredients": ["green rooibus blueberry tea blend", "hot water", "ice", "milk"],
        "price": {
          "hotOrIced": 4.75,
          "hotLatte12oz": 4.95,
          "icedLatte": 5.50,
          "frappe": 6.50
        },
        "image": "/teas/Green_Rooibus_Blueberry.webp", 
        "category": "Teas",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Vanilla Maple Jade (SAKU Blend)",
        "shortDescription": "Superfood blend. Available as 16oz Latte (Hot/Iced) or Frappe.",
        "description": "SAKU Superfood Blend",
        "ingredients": ["vanilla maple jade blend", "milk", "ice"], 
        "price": {
          "latte16oz": 5.95,
          "frappe": 6.95
        },
        "image": "/saku/Vanilla_Maple_Jade.webp", 
        "category": "SAKU Blends",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Maca Cocoa Jade (SAKU Blend)",
        "shortDescription": "Superfood blend. Available as 16oz Latte (Hot/Iced) or Frappe.",
        "description": "SAKU Superfood Blend",
        "ingredients": ["maca cocoa jade blend", "milk", "ice"],
        "price": {
          "latte16oz": 5.95,
          "frappe": 6.95
        },
        "image": "/saku/Maca_Cocoa_Jade.webp", 
        "category": "SAKU Blends",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Ruby Ginger (SAKU Blend)",
        "shortDescription": "Superfood blend. Available as 16oz Latte (Hot/Iced) or Frappe.",
        "description": "SAKU Superfood Blend",
        "ingredients": ["ruby ginger blend", "milk", "ice"],
        "price": {
          "latte16oz": 5.95,
          "frappe": 6.95
        },
        "image": "/saku/Ruby_Ginger.webp", 
        "category": "SAKU Blends",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Ruby Cocoa (SAKU Blend)",
        "shortDescription": "Superfood blend. Available as 16oz Latte (Hot/Iced) or Frappe.",
        "description": "SAKU Superfood Blend",
        "ingredients": ["ruby cocoa blend", "milk", "ice"],
        "price": {
          "latte16oz": 5.95,
          "frappe": 6.95
        },
        "image": "/saku/Ruby_Cocoa.webp", 
        "category": "SAKU Blends",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Golden Orange (SAKU Blend)",
        "shortDescription": "Superfood blend. Available as 16oz Latte (Hot/Iced) or Frappe.",
        "description": "SAKU Superfood Blend",
        "ingredients": ["golden orange blend", "milk", "ice"],
        "price": {
          "latte16oz": 5.95,
          "frappe": 6.95
        },
        "image": "/saku/Golden_Orange.webp", 
        "category": "SAKU Blends",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Golden Chai (SAKU Blend)",
        "shortDescription": "Superfood blend. Available as 16oz Latte (Hot/Iced) or Frappe.",
        "description": "SAKU Superfood Blend",
        "ingredients": ["golden chai blend", "milk", "ice"],
        "price": {
          "latte16oz": 5.95,
          "frappe": 6.95
        },
        "image": "/saku/Golden_Chai.webp", 
        "category": "SAKU Blends",
        "allergens": [],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Iced Coffee",
        "shortDescription": "Locally roasted coffee served over ice (16 oz).",
        "description": "Available Syrups: vanilla, caramel, hazelnut, peppermint, coconut, honey, maple syrup. Dairy-free milk (Almond, Macadamia, Oat) available +$1.00.",
        "ingredients": ["coffee", "ice"],
        "price": {
          "iced16oz": 3.75
        },
        "image": "/colddrinks/Iced_Coffee.webp", 
        "category": "Cold Drinks",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Latte (Iced / Frappe)",
        "shortDescription": "Espresso with milk (16 oz), served iced or blended as a frappe.",
        "description": "Available Syrups: vanilla, caramel, hazelnut, peppermint, coconut, honey, maple syrup. Dairy-free milk (Almond, Macadamia, Oat) available +$1.00.",
        "ingredients": ["espresso", "milk", "ice"],
        "price": {
          "iced16oz": 5.25,
          "frappe16oz": 6.25
        },
        "image": "/colddrinks/Latte_IcedFrappe.webp", 
        "category": "Cold Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Mocha (Iced / Frappe)",
        "shortDescription": "Espresso, milk, and chocolate (16 oz), served iced or blended as a frappe.",
        "description": "Available Syrups: vanilla, caramel, hazelnut, peppermint, coconut, honey, maple syrup. Dairy-free milk (Almond, Macadamia, Oat) available +$1.00.",
        "ingredients": ["espresso", "milk", "chocolate sauce", "ice"],
        "price": {
          "iced16oz": 5.50,
          "frappe16oz": 6.50
        },
        "image": "/colddrinks/Mocha_IcedFrappe.webp",
        "category": "Cold Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Chai (Iced / Frappe)",
        "shortDescription": "Spiced chai concentrate with milk (16 oz), served iced or blended as a frappe.",
        "description": "Available Syrups: vanilla, caramel, hazelnut, peppermint, coconut, honey, maple syrup. Dairy-free milk (Almond, Macadamia, Oat) available +$1.00.",
        "ingredients": ["chai concentrate", "milk", "ice"],
        "price": {
          "iced16oz": 5.50,
          "frappe16oz": 6.50
        },
        "image": "/colddrinks/Chai_IcedFrappe.webp",
        "category": "Cold Drinks",
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Strawberry Smoothie",
        "shortDescription": "Classic strawberry fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["strawberry", "fruit base"], 
        "price": { "default": 6.95 },
        "image": "/smoothies/Strawberry.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Strawberry Mango Smoothie",
        "shortDescription": "Strawberry and mango fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["strawberry", "mango", "fruit base"],
        "price": { "default": 6.95 },
        "image": "/smoothies/Strawberry_Mango.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Lemonade Smoothie",
        "shortDescription": "Refreshing lemonade smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["lemon", "fruit base"], 
        "price": { "default": 6.95 },
        "image": "/smoothies/Lemonade.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Strawberry Banana Smoothie",
        "shortDescription": "Strawberry and banana fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["strawberry", "banana", "fruit base"],
        "price": { "default": 6.95 },
        "image": "/smoothies/Strawberry_Banana.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Strawberry Lemonade Smoothie",
        "shortDescription": "Strawberry and lemonade fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["strawberry", "lemon", "fruit base"],
        "price": { "default": 6.95 },
        "image": "/smoothies/Strawberry_Lemonade.webp",
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Mango Tropics Smoothie",
        "shortDescription": "Mango and tropical fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["mango", "tropical fruits", "fruit base"], 
        "price": { "default": 6.95 },
        "image": "/smoothies/Mango_Tropics.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Peach Pear Apricot Smoothie",
        "shortDescription": "Peach, pear, and apricot fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["peach", "pear", "apricot", "fruit base"],
        "price": { "default": 6.95 },
        "image": "/smoothies/Peach_Pear_Apricot.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Four Berry Smoothie",
        "shortDescription": "Mixed berry fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["mixed berries", "fruit base"], 
        "price": { "default": 6.95 },
        "image": "/smoothies/Four_Berry.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Organic Mango Smoothie",
        "shortDescription": "Organic mango fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["organic mango", "fruit base"],
        "price": { "default": 7.95 },
        "image": "/smoothies/Organic_Mango.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Organic Pineapple Smoothie",
        "shortDescription": "Organic pineapple fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["organic pineapple", "fruit base"],
        "price": { "default": 7.95 },
        "image": "/smoothies/Organic_Pineapple.webp",
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Organic Mango Pineapple Smoothie",
        "shortDescription": "Organic mango and pineapple fruit smoothie.",
        "description": "GF, V, DF. Add Whey Protein or Greens +$0.75.",
        "ingredients": ["organic mango", "organic pineapple", "fruit base"],
        "price": { "default": 7.95 },
        "image": "/smoothies/Organic_Mango_Pineapple.webp", 
        "category": "Fruit Smoothies",
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Original Soft Pretzel",
        "shortDescription": "Handmade soft pretzel, lightly salted.",
        "description": "",
        "ingredients": ["pretzel dough", "salt"],
        "price": { "default": 5.50 },
        "image": "/pretzels/Original_Pretzel.webp", 
        "category": "Soft Pretzels",
        "allergens": ["gluten"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Sour Cream & Onion Pretzel",
        "shortDescription": "Handmade soft pretzel with sour cream and onion seasoning.",
        "description": "",
        "ingredients": ["pretzel dough", "sour cream & onion seasoning"],
        "price": { "default": 6.00 },
        "image": "/pretzels/Sour_Cream_Onion_Pretzel.webp", 
        "category": "Soft Pretzels",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Garlic Parmesan Pretzel",
        "shortDescription": "Handmade soft pretzel with garlic and parmesan.",
        "description": "",
        "ingredients": ["pretzel dough", "garlic", "parmesan cheese"],
        "price": { "default": 6.00 },
        "image": "/pretzels/Garlic_Parmesan_Pretzel.webp", 
        "category": "Soft Pretzels",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Cinnamon Sugar Pretzel",
        "shortDescription": "Handmade soft pretzel coated in cinnamon sugar.",
        "description": "",
        "ingredients": ["pretzel dough", "cinnamon", "sugar", "butter"], 
        "price": { "default": 6.00 },
        "image": "/pretzels/Cinnamon_Sugar_Pretzel.webp",
        "category": "Soft Pretzels",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pretzel Dip - Cheese Sauce",
        "shortDescription": "Warm cheese sauce dip.",
        "description": "Dip for pretzels.",
        "ingredients": ["cheese sauce"],
        "price": { "default": 1.00 },
        "image": "/dips/Cheese_Sauce.webp", 
        "category": "Soft Pretzels", 
        "allergens": ["dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pretzel Dip - Roasted Red Pepper Cream Cheese",
        "shortDescription": "Roasted red pepper cream cheese dip.",
        "description": "Dip for pretzels.",
        "ingredients": ["cream cheese", "roasted red pepper"],
        "price": { "default": 1.00 },
        "image": "/dips/Roasted_Red_Pepper_Cream_Cheese.webp", 
        "category": "Soft Pretzels", 
        "allergens": ["dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pretzel Dip - Whipped Cream Cheese",
        "shortDescription": "Whipped cream cheese dip.",
        "description": "Dip for pretzels.",
        "ingredients": ["cream cheese"],
        "price": { "default": 1.00 },
        "image": "/dips/Whipped_Cream_Cheese.webp", 
        "category": "Soft Pretzels",
        "allergens": ["dairy"],
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pretzel Dip - Mustard",
        "shortDescription": "Mustard dip.",
        "description": "Dip for pretzels.",
        "ingredients": ["mustard"],
        "price": { "default": 1.00 },
        "image": "/dips/Mustard.webp", 
        "category": "Soft Pretzels", 
        "allergens": [], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Pretzel Dip - Housemade Pesto",
        "shortDescription": "Housemade pesto dip.",
        "description": "Dip for pretzels.",
        "ingredients": ["housemade pesto"],
        "price": { "default": 1.00 },
        "image": "/dips/Pesto.webp", 
        "category": "Soft Pretzels", 
        "allergens": ["dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true
      },
      {
        "name": "Sowers BBQ Burger",
        "shortDescription": "House beef patty, housemade bbq sauce, mayo & american cheese. Topped with lettuce, tomato, onions.",
        "description": "Available Thursdays Only. Can be served on lettuce (GF option).",
        "ingredients": ["beef patty", "bun", "lettuce", "tomato", "onions", "housemade bbq sauce", "mayo", "american cheese"],
        "price": { "default": 12.50 },
        "image": "/burgers/Sowers_BBQ_Burger.webp", 
        "category": "Specialty Burgers",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true 
      },
      {
        "name": "Bleu Moon Burger",
        "shortDescription": "House beef patty, hot sauce, ranch, bleu cheese & swiss. Topped with lettuce, tomato, onions.",
        "description": "Available Thursdays Only. Can be served on lettuce (GF option).",
        "ingredients": ["beef patty", "bun", "lettuce", "tomato", "onions", "hot sauce", "ranch", "bleu cheese", "swiss cheese"],
        "price": { "default": 13.50 },
        "image": "/burgers/Bleu_Moon_Burger.webp", 
        "category": "Specialty Burgers",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true 
      },
      {
        "name": "Aloha Burger",
        "shortDescription": "House beef patty, housemade bbq sauce, chipotle mayo, pineapple, bacon & provolone. Topped with lettuce, tomato, onions.",
        "description": "Available Thursdays Only. Can be served on lettuce (GF option).",
        "ingredients": ["beef patty", "bun", "lettuce", "tomato", "onions", "housemade bbq sauce", "chipotle mayo", "pineapple", "bacon", "provolone cheese"],
        "price": { "default": 13.50 },
        "image": "/burgers/Aloha_Burger.webp", 
        "category": "Specialty Burgers",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true 
      },
      {
        "name": "Jallelujah Harvest Burger",
        "shortDescription": "House beef patty, housemade bbq sauce, mayo, mushrooms, jalapenos, & swiss. Topped with lettuce, tomato, onions.",
        "description": "Available Thursdays Only. Can be served on lettuce (GF option).",
        "ingredients": ["beef patty", "bun", "lettuce", "tomato", "onions", "housemade bbq sauce", "mayo", "mushrooms", "jalapenos", "swiss cheese"],
        "price": { "default": 13.50 },
        "image": "/burgers/Jallelujah_Harvest_Burger.webp", 
        "category": "Specialty Burgers",
        "allergens": ["gluten", "dairy"], 
        "recommended": "",
        "isFavorite": false,
        "isAvailable": true 
      }
    ]);
  },

  /**
   * @param db {import('mongodb').Db}
   * @param client {import('mongodb').MongoClient}
   * @returns {Promise<void>}
   */
  async down(db) {
    return db.collection('dishes').deleteMany({});
  }
};
