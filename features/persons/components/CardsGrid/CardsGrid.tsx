import { initialSteps } from '@/features/tour/steps/initial';
import { trpc } from '@/utils/trpc';
import { useTour } from '@reactour/tour';
import React, { useEffect } from 'react';
import { PersonCard } from '../PersonCard';
import { Container } from './Elements';
import { useLocalStorage } from 'usehooks-ts';
import { useInitialTour } from '@/features/tour/hooks/useInitialTour';

export const CardsGrid = () => {
  const { data, isLoading, isError } = trpc.person.getAll.useQuery();
  useInitialTour({ data });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>an error has occured</div>;
  }

  return (
    <Container id='first-step'>
      {data.map((person) => (
        <PersonCard key={person.id + Date.now()} {...person} />
      ))}
    </Container>
  );
};
