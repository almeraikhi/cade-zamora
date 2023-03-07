import { PersonCard } from '@/features/persons/components/PersonCard';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Page = () => {
  return (
    <main className={inter.className}>
      <PersonCard
        id='1'
        name='Ahmed Ali Khamees'
        age={24}
        gender='male'
        address='13th Street, Khalifa City, Abu Dhabi'
        imageUrl='/images/female_a.png'
      />
    </main>
  );
};

export default Page;
