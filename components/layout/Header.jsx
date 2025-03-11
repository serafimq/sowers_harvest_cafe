'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {Link as ScrollLink} from 'react-scroll';
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "../ui/button";

const Header = () => {
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setActive(true);
            } else {
                setActive(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


  return (
    <header className={`
    fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200 ease-in-out
    ${active ? "bg-light py-4" : "bg-transparent py-4"}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
            {/* logo, nav */}
            {/* logo */}
            <Link href='/'>
                <Image src={'/logo.avif'} width={151} height={97} alt="logo"/>
            </Link>
            {/* nav */}
            <Nav 
                containerStyles={'hidden xl:flex gap-x-12 text-white'}
                linkStyle='capitalize'
            />
            {/* btn */}
            <ScrollLink to="reservations" smooth={true} duration={500}>
                <Button variant='orange' size={'sm'}>Make an order</Button>
            </ScrollLink>
            {/* mobile-nav */}
            <NavMobile 
                containerStyles='xl:hidden' 
                iconStyles={'text-3xl'}
                linkStyles={'uppercase'}
            />
        </div>
      </div>
    </header>
  );
}

export default Header;