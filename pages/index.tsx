import React from 'react';
import { Inter } from 'next/font/google';
import { CardsGrid } from '@/features/persons/components/CardsGrid';
import { Header } from '@/components/composite/Header';

const inter = Inter({ subsets: ['latin'] });

const Page = () => {
  return (
    <main className={inter.className}>
      <Header />
      <div style={{ paddingTop: 50 }}>
        <CardsGrid />
      </div>
    </main>
  );
};

export default Page;
