import { Dish, useMenu } from "@/providers/MenuContext";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import DishCard from "./DishCard";
import { FC, JSX } from "react";

const DishList: FC = (): JSX.Element => {
    const { dishes } = useMenu();
    

    const breakfastDishes = dishes.filter((dish: Dish) => dish.category === "Breakfast");
    const saladDishes = dishes.filter((dish: Dish) => dish.category === "Salads");
    const burgerDishes = dishes.filter((dish: Dish) => dish.category === "Burgers");
    

    return (
        <div>
            <Accordion type="single" collapsible>
                <AccordionItem 
                    value="item-1"
                >
                    <AccordionTrigger 
                        className="text-white text-2xl outline-none"
                    > 
                        Breakfast
                    </AccordionTrigger>
                    <AccordionContent className={''}>
                        {breakfastDishes.length === 0 ? (
                        <div className='text-center py-12 text-gray-600'>
                            <p className="text-[1.1rem]">No dishes found.</p>
                        </div>
                        ) : (
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
                            {breakfastDishes.map(dish => (
                            <DishCard key={dish.id} dish={dish} />
                            ))}
                        </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion 
                type="single" 
                collapsible
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                className="text-white text-2xl outline-none">Salads</AccordionTrigger>
                    <AccordionContent className={''}>
                        {saladDishes.length === 0 ? (
                        <div className="text-center py-12 text-gray-600">
                            <p className="text-[1.1rem]">No dishes found.</p>
                        </div>
                        ) : (
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
                            {saladDishes.map(dish => (
                            <DishCard key={dish.id} dish={dish} />
                            ))}
                        </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion 
                type="single" 
                collapsible
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                className="text-white text-2xl outline-none">Specialty Burgers</AccordionTrigger>
                    <AccordionContent className={''}>
                        {burgerDishes.length === 0 ? (
                        <div className='text-center py-12 text-gray-600'>
                            <p className="text-[1.1rem]">No dishes found.</p>
                        </div>
                        ) : (
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3'>
                            {burgerDishes.map(dish => (
                            <DishCard key={dish.id} dish={dish} />
                            ))}
                        </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default DishList;