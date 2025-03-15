'use client';

import Link from "next/link";
import React, { JSX, useState } from "react";
import {RiMenu2Line} from 'react-icons/ri';
import {IoCloseOutline} from 'react-icons/io5';

import Image from "next/image";
import links from "@/data/navLinks";

interface NavMobileProps {
    containerStyles?: string;
    iconStyles?: string;
    linkStyles?: string;
    isActive: boolean;
  }

const NavMobile: React.FC<NavMobileProps> = ({ containerStyles = "", iconStyles = "", linkStyles = "", isActive }): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className={containerStyles}>
            {/* nav trigger btn */}
            <div 
                onClick={() => setIsOpen(true)} 
                className="cursor-pointer outline-none"
            >
                <RiMenu2Line
                    className={`
                        ${isActive ? 'text-orange' : 'text-white'}
                        text-3xl transition-all duration-200
                    `} />
            </div>
            <aside className={`
                fixed top-0 left-0 right-0 bottom-0 bg-black-heavy z-50 w-full p-10 transform transition-all duration-500 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-between h-full">
                        {/* nav close btn */}
                        <div 
                            className="cursor-pointer outline-none text-4xl text-white absolute w-10 h-10 left-8 top-8 flex items-center justify-center" 
                            onClick={() => setIsOpen(false)}
                        >
                            <IoCloseOutline />
                        </div>
                        {/* Logo */}
                        <Link href='/'>
                            <Image src={'/logo.avif'} width={90} height={36} alt="logo"/>
                        </Link>
                        {/* nav links */}
                        <div className="flex flex-col gap-y-8">
                            {links.map((link, index) => (
                                <Link 
                                    key={index} 
                                    href={link.path}
                                    className={`${linkStyles} capitalize text-white text-xl flex items-center gap-x-3`}
                                >
                                    <div className={`${iconStyles}`}>{<link.icon />}</div>
                                    <div className={`${linkStyles}`}>{link.name}</div>
                                    
                                </Link>
                            ))}
                        </div>
                    </div>
            </aside>
        </div>
    );
}

export default NavMobile;