'use client';

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {IoIosArrowRoundForward} from 'react-icons/io';

const menu = [
    {
        img: '/menu/item-1.png',
        title: 'Stilton and pancetta penne',
        price: '$24.00'
    },
    {
        img: '/menu/item-2.png',
        title: 'Chorizo and avocado spaghetti',
        price: '$21.00'
    },
    {
        img: '/menu/item-3.png',
        title: 'Crayfish and black pepper toastie',
        price: '$12.00'
    },
    {
        img: '/menu/item-4.png',
        title: 'Orange and banana cookies',
        price: '$18.00'
    },
]

const Menu = () => {
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
            <Link href='/' className="text-green flex justify-center xl:justify-end items-center mb-16"> 
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
                    <div className="overflow-hidden">
                        <Image 
                            src={item.img} 
                            alt={item.title} 
                            width={270} 
                            height={270}
                            className="group-hover:scale-110 transition-all duration-300"
                        />
                    </div>
                    {/* title & price */}
                    <div className="pt-[20px] pb-[26px] px-[30px]">
                        <Link href={'/'}>
                            <h3 className="font-poppins text-black mb-[14px]">{item.title}</h3>
                        </Link>
                        <div className="text-xl font-poppins font-semibold text-orange">
                            {item.price}
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