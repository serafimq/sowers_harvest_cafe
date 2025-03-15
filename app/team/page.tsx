'use client';

import { JSX } from "react";

interface ContactProps {}

const Team: React.FC<ContactProps> = (): JSX.Element => {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto md:w-[90%] overflow-hidden"> 
      <div className="bg-hero h-[100vh]">team</div>
    </main>
  )
};

export default Team;
