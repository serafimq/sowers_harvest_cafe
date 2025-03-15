'use client';

import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC, JSX } from "react";

interface AboutProps {}

const About: FC<AboutProps> = (): JSX.Element => {
  return (
    <section className="bg-hero grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center text-white" id="about">
        {/* text */}
        <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="xl:pl-[135px]"
        >
            <h1 className="mb-9">There is more to Business than just profits!</h1>
            <p className="mb-8 text-white">We have learned that it is our people that create our environment so we carefully hire workers who are in alignment with our guiding principles. We put a lot of effort into sourcing our ingredients locally to bring you the fresh, natural cuisine you love</p>
            <p className="mb-10 text-white">Creating a peaceful space around coffee and cuisine to cultivate conversations that change the world</p>
        </motion.div>
        {/* image */}
        <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className="xl:pl-[135px]"
        >
            <Image 
                src="/about/img.avif" 
                width={705} 
                height={771} 
                alt="About Us"
                className="hidden xl:flex"
            /> 
        </motion.div>
    </section>
  );
}

export default About;