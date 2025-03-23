'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FC, JSX } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { favoriteDishes } from '@/data/initialDishes';
import { fadeIn } from '@/lib/variants';
import { Dish, useMenu } from '@/providers/MenuContext';

interface MenuProps {}

const Menu: FC<MenuProps> = (): JSX.Element => {
  const { setSelectedDish } = useMenu();
  return (
    <section className="relative py-12 xl:py-36" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">Favorite menu</h2>
          <Link
            href="/menu"
            className="text-green flex justify-center xl:justify-end items-center mb-16"
          >
            View all
            <IoIosArrowRoundForward className="text-3xl" />
          </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-x-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {favoriteDishes.map((item: Dish, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.4)}
              className="max-w-[270px] mx-auto bg-white shadow-primary xl:mx-0 group"
            >
              {/* image */}
              <div onClick={() => setSelectedDish(item)} className="overflow-hidden">
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
                <div className="text-xl font-poppins font-semibold text-orange">${item.price}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
