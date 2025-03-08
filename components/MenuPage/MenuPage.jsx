import { useMenu } from "@/context/MenuContext";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import DishList from "../DishList/DishList";
import DishDetails from "../DishDetails/DishDetails";
import Image from "next/image";

const MenuPage = () => {
    const { selectedDish } = useMenu();
    return (
        <section className="bg-hero py-20">
            <div className="container">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-[32px] p-8 md:p-12 xl:py-20 xl:p-0 items-center">
                    {/* text */}
                    <motion.div 
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}
                        className="xl:col-span-2"
                    >
                        <h1 className="text-white mb-7">Quality, local and ethically sourced foods</h1>
                        <p className="text-white mb-7">Our goal is to procure coffee and cuisine that is healthy for the body, mind, and spirit. As much as we can, we seek out local products and healthy ingredients so that we can do our part to have a positive impact on the grower, the consumer, and our environment. Because of this focus, our guests experience a fresh quality in our coffee and cuisine.</p>
                        <p className="text-white mb-7">As much as we can, we seek out local products and healthy ingredients so that we can do our part to have a positive impact on local growers and their families, our guests, and our environment. Because of this, our guests experience an often unmatched quality in our coffee and cuisine, and a peace-of-mind dining experience.</p>
                    </motion.div>
                    {/* image */}
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}
                    >
                        <Image
                            src="/about/img.png" 
                            width={705} 
                            height={771} 
                            alt="About Us"
                            className="hidden xl:flex"
                        />
                    </motion.div>
                </div>
                

                <DishList />

                {selectedDish && <DishDetails />}
            </div>
        </section>
    )
}

export default MenuPage;