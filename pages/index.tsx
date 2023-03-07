import React, { useEffect } from 'react';
import { CardsGrid } from '@/features/persons/components/CardsGrid';
import { Header } from '@/components/composite/Header';
import { CreatePersonModal } from '@/features/persons/components/CreatePerson/CreatePersonModal';
import { trpc } from '@/utils/trpc';

const Page = () => {
  const { data } = trpc.healthcheck.useQuery();

  useEffect(() => {
    console.log('data', data);
  }, [data]);

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
