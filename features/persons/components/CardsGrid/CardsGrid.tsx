import React from 'react';
import { PersonCard } from '../PersonCard';
import { Person } from '../PersonCard/types';
import { Container } from './Elements';

const mockPersons: Person[] = [
  {
    id: '1',
    name: 'Ahmed Ali Khamees',
    age: 24,
    gender: 'male',
    address: '13th Street, Khalifa City, Abu Dhabi',
    imageUrl: '/images/female_a.png',
  },
  {
    id: '2',
    name: 'Ahmed Ali Khamees',
    age: 24,
    gender: 'male',
    address: '13th Street, Khalifa City, Abu Dhabi',
  },
  {
    id: '3',
    name: 'Ahmed Ali Khamees',
    age: 24,
    gender: 'male',
    address: '13th Street, Khalifa City, Abu Dhabi',
  },
  {
    id: '4',
    name: 'Ahmed Ali Khamees',
    age: 24,
    gender: 'male',
    address: '13th Street, Khalifa City, Abu Dhabi',
  },
  {
    id: '5',
    name: 'Ahmed Ali Khamees',
    age: 24,
    gender: 'male',
    address: '13th Street, Khalifa City, Abu Dhabi',
  },
];

export const CardsGrid = () => {
  return (
    <Container>
      {mockPersons.map((person) => (
        <PersonCard key={person.id + Date.now()} {...person} />
      ))}
    </Container>
  );
};
