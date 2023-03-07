import React, { useEffect } from 'react';
import { CardsGrid } from '@/features/persons/components/CardsGrid';
import { Header } from '@/components/composite/Header';
import { CreatePersonModal } from '@/features/persons/components/CreatePerson/CreatePersonModal';
import { useTheme } from '@/theme';

const Page = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <div style={{ paddingTop: 50 }}>
        <CardsGrid />
      </div>
      <CreatePersonModal />
    </>
  );
};

export default Page;
