'use client';

import { JSX } from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = (): JSX.Element =>  {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto md:w-[90%] overflow-hidden"> 
      <div className="bg-hero h-[100vh]">gallery</div>
    </main>
  )
}; 

export default Contact;