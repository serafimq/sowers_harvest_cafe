'use client';

import { Lora, Poppins } from 'next/font/google';

import './globals.css';
import { JSX, ReactNode } from 'react';

import Header from '@/components/layout/Header';
import { MenuProvider } from '@/providers/MenuContext';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} antialiased`}>
        <MenuProvider>
          <Header />
          <div className="bg-white">{children}</div>
        </MenuProvider>
      </body>
    </html>
  );
}
