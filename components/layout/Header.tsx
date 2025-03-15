'use client'

import Image from "next/image";
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);
    
    useEffect(() => {
        const handleScroll = (): void => {
          setActive(window.scrollY > 50);
        };
      
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <header className={`
    fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200 ease-in-out py-1
    ${active ? "bg-white" : "bg-transparent"}`}>

      <div className="container max-w-6xl mx-auto px-6">

        <div className="flex xl:flex-col items-center justify-between py-4">
            <div className="flex justify-start items-center gap-4 w-full" >
            {/* logo, nav */}
                {/* logo */}
                <Link href='/'>
                    <Image src={'/logo.avif'} width={151} height={97} alt="logo"/>
                </Link>

                <h1 
                    className={`
                        uppercase text-base xl:text-2xl tracking-widest font-normal
                        ${active ? "text-orange" : "text-white"}
                        `}
                >

                    Sowers Harvest Cafe
                </h1>
            </div>
            {/* nav */}
            <Nav
                isActive={active}
                containerStyles={'hidden xl:flex gap-x-12 text-white'}
                linkStyles='capitalize'
            />

            {/* mobile-nav */}
            <NavMobile
                containerStyles='xl:hidden' 
                iconStyles={'text-3xl'}
                linkStyles={'uppercase'}
                isActive={active}
            />
        </div>
      </div>
    </header>
  );
}

export default Header;