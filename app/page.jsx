import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FavoriteMenu from "@/components/FavoriteMenu";
import StyleGuide from "@/components/StyleGuide";

export default function Home() {
  return <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden"> 
            <Hero />
            <FavoriteMenu />
            <About />
         </main>;
};