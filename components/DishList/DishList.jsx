import { useMenu } from "@/context/MenuContext";
import DishCard from "../DishCard/DishCard";
import styles from "./DishList.module.scss";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const DishList = () => {
    const { getFilteredDishes } = useMenu();
    const filteredDishes = getFilteredDishes();

    const breakfastDishes = filteredDishes.filter(dish => dish.category === "Breakfast");
    const saladDishes = filteredDishes.filter(dish => dish.category === "Salads");
    const burgerDishes = filteredDishes.filter(dish => dish.category === "Burgers");
    

    return (
        <div className={styles["dish-list"]}>
            <Accordion 
                type="single" 
                collapsible
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger 
                className="text-white text-2xl outline-none">Breakfast</AccordionTrigger>
                    <AccordionContent>
                        {breakfastDishes.length === 0 ? (
                        <div className={styles["no-dishes"]}>
                            <p>No dishes found.</p>
                        </div>
                        ) : (
                        <div className={styles["dishes-grid"]}>
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
                    <AccordionContent>
                        {saladDishes.length === 0 ? (
                        <div className={styles["no-dishes"]}>
                            <p>No dishes found.</p>
                        </div>
                        ) : (
                        <div className={styles["dishes-grid"]}>
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
                    <AccordionContent>
                        {burgerDishes.length === 0 ? (
                        <div className={styles["no-dishes"]}>
                            <p>No dishes found.</p>
                        </div>
                        ) : (
                        <div className={styles["dishes-grid"]}>
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