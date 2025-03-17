'use client';

import { FC, JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/variants";

const MenuHero: FC = (): JSX.Element => {
  return (
    <section className="hidden sm:block py-20 md:py-20 bg-hero">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.2}}
          className="grid sm:grid-cols-2 md:grid-cols-4 sm:grid-rows-auto md:grid-rows-5 gap-4 h-auto md:h-[800px]"
        >
          {/* Блок 1 - верхний левый большой */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            className="sm:col-span-2 md:col-span-2 sm:row-span-1 md:row-span-2 overflow-hidden rounded-2xl border border-gray-200 flex flex-col bg-white"
          >
            <div className="p-6 md:p-8">
                <h2 className="text-gray-800 mb-7">Quality, local and ethically sourced foods</h2>              
            </div>
          </motion.div>

          {/* Блок 2 - вертикальный в центре вверху */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="sm:col-span-1 md:row-span-3 md:col-start-3 overflow-hidden rounded-2xl border border-gray-200 bg-white"
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-2xl md:text-4xl font-serif text-gray-800">WEDNESDAY</h3>
            </div>
            <div className="relative flex-1 h-48 md:h-96">
              <Image
                src="/menu/wednesday-special.webp"
                alt="Wednesday Special"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Блок 3 - верхний правый */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="sm:col-span-1 md:row-span-2 md:col-start-4 overflow-hidden rounded-2xl border border-gray-200 flex flex-col bg-white"
          >
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl md:text-4xl font-serif mb-3 text-gray-800">SATURDAY</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1">
                Нежный французский тост, украшенный сезонными фруктами, йогуртом и кленовым сиропом.
              </p>
              <div className="h-32 sm:h-36 md:h-48 relative overflow-hidden rounded-xl">
                <Image
                  src="/menu/saturday-special.webp"
                  alt="Saturday Special"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Блок 4 - нижний широкий центральный */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="sm:col-span-2 md:col-span-2 sm:row-span-1 md:row-span-2 md:col-start-2 md:row-start-4 overflow-hidden rounded-2xl border border-gray-200 flex flex-col justify-center items-center bg-white"
          >
            <div className="p-6 md:p-10 text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#A04E32] tracking-wide mb-4">WE BRUNCH!</h2>
              <div className="w-20 h-1 bg-[#A04E32] mx-auto mb-4"></div>
              <p className="text-gray-600">
                Наслаждайтесь нашим фирменным бранчем каждые выходные с 10:00 до 15:00. 
                Более 20 авторских блюд от шеф-повара.
              </p>
            </div>
          </motion.div>

          {/* Блок 5 - высокий левый */}
          <motion.div 
            variants={fadeIn('right', 0.4)}
            className="sm:col-span-1 md:row-span-3 md:col-start-1 md:row-start-3 overflow-hidden rounded-2xl border border-gray-200 bg-white flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-3xl font-serif text-[#A04E32] mb-3">WEEKDAY</h3>
              <div className="w-12 h-1 bg-[#A04E32] mx-auto mb-2"></div>
              <h3 className="text-xl md:text-3xl font-serif text-[#A04E32] mb-0">OR</h3>
              <div className="w-12 h-1 bg-[#A04E32] mx-auto my-2"></div>
              <h3 className="text-xl md:text-3xl font-serif text-[#A04E32]">WEEKEND</h3>
            </div>
            <div className="h-36 md:h-64 relative">
              <Image
                src="/menu/saturday-special.webp"
                alt="Special Any Day"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Блок 6 - маленький средний */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="sm:col-span-1 md:col-start-2 md:row-start-3 overflow-hidden rounded-2xl border border-gray-200 bg-white flex flex-col"
          >
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800">THURSDAY</h3>
            </div>
            <div className="flex-1 relative h-36 md:h-auto">
              <Image
                src="/menu/wednesday-special.webp"
                alt="Thursday Special"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Блок 7 - маленький правый */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            className="sm:col-span-1 md:col-start-4 md:row-start-3 overflow-hidden rounded-2xl border border-gray-200 bg-white flex flex-col"
          >
            <div className="p-5 border-b border-gray-100">
              <h3 className="text-lg md:text-xl font-serif text-gray-800">CAKE OF THE DAY</h3>
            </div>
            <div className="flex-1 relative h-36 md:h-auto">
              <Image
                src="/menu/monday-special.webp"
                alt="Dessert of the Day"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Блок 8 - нижний правый */}
          <motion.div 
            variants={fadeIn('up', 0.4)}
            className="sm:col-span-1 md:row-span-2 md:col-start-4 md:row-start-4 overflow-hidden rounded-2xl border border-gray-200 flex flex-col bg-white"
          >
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-2xl md:text-3xl font-serif text-gray-800">SUNDAY</h3>
            </div>
            <div className="relative flex-1 h-36 md:h-auto">
              <Image
                src="/menu/monday-special.webp"
                alt="Sunday Special"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-xs text-gray-600">
              Наш фирменный бургер с мраморной говядиной, ароматными травами и соусом из трюфеля.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
