import links from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  isActive: boolean;
  containerStyles?: string;
  linkStyles?: string;
}

const Nav: React.FC<NavProps> = (
  { containerStyles = '', linkStyles = '', isActive }
) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link 
          key={index} 
          href={link.path}
          className={`
            ${isActive || pathname === link.path ? "text-orange border-b-2" : "text-white"}
            ${linkStyles} 
            uppercase font-light`
          }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;