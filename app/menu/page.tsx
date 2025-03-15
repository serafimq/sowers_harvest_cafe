'use client';

import { JSX } from "react";
import MenuPage from "@/components/features/menu/MenuPage";

interface ContactProps {}

const Menu: React.FC<ContactProps> = (): JSX.Element => {
  return <main className="w-full max-w-[1440px] bg-white mx-auto md:w-[90%] overflow-hidden"> 
            <MenuPage />
         </main>;
};

export default Menu;
