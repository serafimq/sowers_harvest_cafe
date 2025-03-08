'use client';


const links = [
    { 
        icon: <RiHomeFill />,
        path: "home",
        name: "home",
        offset: 0
    },
    {
        icon: <BiSolidFoodMenu />,
        path: "menu",
        name: "menu",
        offset: 0
    },
    {
        icon: <FaUsers />,
        path: "about",
        name: "about",
        offset: -50
    }, 
    {
        icon: <FaEnvelope />,
        path: "contact",
        name: "contact",
        offset: 0
    },
    ];

import Link from "next/link";
import React, { useState } from "react";
import {RiMenu2Line, RiHomeFill} from 'react-icons/ri';
import {IoCloseOutline} from 'react-icons/io5';
import {BiSolidFoodMenu} from 'react-icons/bi';
import {FaUsers, FaEnvelope} from 'react-icons/fa';

import {Link as ScrollLink} from 'react-scroll';
import Image from "next/image";
import { Button } from "./ui/button";

 

const NavMobile = ({containerStyles, iconStyles, linkStyles}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${containerStyles}`}>
            {/* nav trigger btn */}
            <div 
                onClick={() => setIsOpen(!isOpen)} 
                className="cursor-pointer outline-none"
            >
                <RiMenu2Line className="text-white text-3xl transition-all duration-200" />
            </div>
            <aside className={`
                fixed top-0 left-0 right-0 bottom-0 bg-black-heavy z-50 w-full p-10 transform transition-all duration-500 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-between h-full">
                        {/* nav close btn */}
                        <div 
                            className="cursor-pointer outline-none text-4xl text-white absolute w-10 h-10 left-8 top-8 flex items-center justify-center" 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <IoCloseOutline />
                        </div>
                        {/* Logo */}
                        <Link href='/'>
                            <Image src={'/logo.svg'} width={90} height={36} alt="logo"/>
                        </Link>
                        {/* nav links */}
                        <div className="flex flex-col gap-y-8">
                            {links.map((link, index) => (
                                <ScrollLink 
                                    key={index} 
                                    to={link.path}
                                    smooth={'false'}
                                    spy={'true'}
                                    offset={link.offset}
                                    duration={500}
                                    className={`${linkStyles} capitalize text-white text-xl flex items-center gap-x-3`}
                                >
                                    <div className={`${iconStyles}`}>{link.icon}</div>
                                    <div className={`${linkStyles}`}>{link.name}</div>
                                    
                                </ScrollLink>
                            ))}
                        </div>
                        {/* btn */}
                        <ScrollLink to="reservations" smooth={true} offset={-150} duration={500}>
                            <Button variant='orange' size={'sm'}>Make an order</Button>
                        </ScrollLink>
                    </div>
            </aside>
        </div>
    );
}

export default NavMobile;