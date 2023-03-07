import { router, publicProcedure } from '../trpc';
import { Person } from '@prisma/client';

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

export const personRouter = router({
  getAll: publicProcedure.query(async (req) => {
    return mockPersons;
  }),
});
