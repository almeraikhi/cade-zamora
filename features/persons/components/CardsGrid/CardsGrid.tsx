import { trpc } from '@/utils/trpc';
import React from 'react';
import { PersonCard } from '../PersonCard';
import { Container } from './Elements';

export const CardsGrid = () => {
  const { data, isLoading, isError } = trpc.person.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || isError) {
    return <div>an error has occured</div>;
  }

  return (
    <Container>
      {data.map((person) => (
        <PersonCard key={person.id + Date.now()} {...person} />
      ))}
    </Container>
  );
};
