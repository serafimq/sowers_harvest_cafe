'use client';

import { JSX } from 'react';

import About from '@/components/features/home/About';
import FavoriteMenu from '@/components/features/home/FavoriteMenu';
import Hero from '@/components/features/home/Hero';
import DishDetails from '@/components/features/menu/DishDetails';
import { useMenu } from '@/providers/MenuContext';

export default function Home(): JSX.Element {
  const { selectedDish } = useMenu();
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto md:w-[90%] overflow-hidden">
      <Hero />
      <FavoriteMenu />
      <About />

      {selectedDish && <DishDetails />}
    </main>
  );
}
