import { RiHomeFill } from 'react-icons/ri';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { FaUsers, FaEnvelope } from 'react-icons/fa';
import { NavLink } from '@/types/navigation';

const links: NavLink[] = [
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