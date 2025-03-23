'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC, JSX } from 'react';

import { Button } from '@/components/ui/button';
import { fadeIn } from '@/lib/variants';

interface HeroProps {}

const Hero: FC<HeroProps> = (): JSX.Element => {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-50"
      id="home"
    >
      <div className="container mx-auto">
        {/* text & image */}
        <div className="flex item-center xl:h-[960px]">
          {/* text */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-7"
            >
              coffee. cuisine. <br />
              conversation.
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-5"
            >
              by: <span className="text-orange">Sowers Harvest Cafe</span>
            </motion.p>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0"
            >
              Our team serves our guests as they would want to be served. Because each guest has
              immeasurable worth, we endeavor to relate to each person in a way that makes them feel
              valued and comfortable at our tables. As we accomplish this, Sowers becomes a
              welcoming, peaceful space for dining, working, reading, and conversing. Our hope is
              that our guests will leave with a smile on their face and a heart that is warmed.
            </motion.p>
            <motion.div
              variants={fadeIn('down', 0.8)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Button>Let's eat</Button>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[250px] xl:right-[100px]"
          >
            <Image src="/hero/plate.png" width={500} height={500} alt="plate" />
          </motion.div>
        </div>
      </div>
      {/* coffee img */}
      <motion.div
        variants={fadeIn('up', 1.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-56"
      >
        <Image src="/hero/coffee.png" width={386} height={404} alt="coffee" />
      </motion.div>
    </section>
  );
};
export default Hero;
