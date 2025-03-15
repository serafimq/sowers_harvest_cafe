
import {RiMenu2Line, RiHomeFill} from 'react-icons/ri';
import {IoCloseOutline} from 'react-icons/io5';
import {BiSolidFoodMenu} from 'react-icons/bi';
import {FaUsers, FaEnvelope} from 'react-icons/fa';
import { JSX } from 'react';

interface NavLink {
  path: string;
  name: string;
  icon: JSX.Element;
}

const links = [
    { 
      path: "/",
      name: "home",
      icon: RiHomeFill
    },
    { 
      path: "/menu",
      name: "menu",
      icon: BiSolidFoodMenu,
    },
    { 
       path: "/team",
       name: "team",
       icon: FaUsers,
    },
    { 
       path: "/gallery",
       name: "gallery",
       icon: FaEnvelope,
    },
  ];

export default links;