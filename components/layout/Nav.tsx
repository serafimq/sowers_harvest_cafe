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
            ${isActive ? "text-orange" : "text-white"}
            ${pathname === link.path ? 'border-b-2': ''}
            ${linkStyles} font-light`
          }
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;