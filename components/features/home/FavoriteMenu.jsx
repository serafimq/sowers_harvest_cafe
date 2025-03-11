'use client';

import { useMenu } from "@/providers/MenuContext";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {IoIosArrowRoundForward} from 'react-icons/io';

const menu = [
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
        "recommended": "Delicious with a side of fresh fruit."
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
      "recommended": "Goes great with a hot latte."
    },
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
      "recommended": "Perfect with a side of warm bread."
  },
  {
      "id": 4,
      "name": "Aloha Burger",
      "shortDescription": "Sweet and savory Hawaiian-style burger",
      "description": "A tropical burger with housemade BBQ sauce, chipotle mayo, pineapple, bacon, and provolone cheese.",
      "ingredients": ["Beef patty", "BBQ sauce", "Chipotle mayo", "Pineapple", "Bacon", "Provolone cheese", "Burger bun"],
      "price": 12.95,
      "image": "/burgers/Aloha_Burger.webp",
      "category": "Burgers",
      "allergens": ["Gluten", "Milk"],
      "recommended": "Great with a refreshing lemonade."
  }
]

const Menu = () => {
  const { setSelectedDish } = useMenu();
  return (
    <section className="relative py-12 xl:py-36" id="menu">
      <div className="container mx-auto">
        <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="max-w-[570px] mx-auto text-center xl:text-right"
        >
            <h2 className="mb-3">Favorite menu</h2>
            <Link href='/menu' className="text-green flex justify-center xl:justify-end items-center mb-16"> 
                View all
                <IoIosArrowRoundForward className="text-3xl" />
            </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="grid grid-cols-1 gap-x-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
            {menu.map((item, index) => (
                <motion.div 
                    key={index} 
                    variants={fadeIn} 
                    className="max-w-[270px] mx-auto bg-white shadow-primary xl:mx-0 group"
                >   
                    {/* image */}
                    <div
                        onClick={() => setSelectedDish(item)}
                        className="overflow-hidden"
                    >
                        <Image 
                            src={item.image} 
                            alt={item.name} 
                            width={270} 
                            height={270}
                            className="group-hover:scale-110 transition-all duration-300"
                        />
                    </div>
                    {/* title & price */}
                    <div className="pt-[20px] pb-[26px] px-[30px]">
                        <Link href={'/menu'}>
                            <h3 className="font-poppins text-black mb-[14px]">{item.name}</h3>
                        </Link>
                        <div className="text-xl font-poppins font-semibold text-orange">
                            ${item.price}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Menu;