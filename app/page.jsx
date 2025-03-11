'use client';

import FavoriteMenu from "@/components/features/home/FavoriteMenu";
import Hero from "@/components/features/home/Hero";
import About from "@/components/features/home/About";
import DishDetails from "@/components/features/menu/DishDetails";

import { useMenu } from "@/providers/MenuContext";

export default function Home() {
    const { selectedDish } = useMenu();
    return <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden"> 
              <Hero />
              <FavoriteMenu />
              <About />

              {selectedDish && <DishDetails />}
          </main>;
};