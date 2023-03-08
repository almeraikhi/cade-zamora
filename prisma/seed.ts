import { prisma } from '@/server/prisma';
import { Person } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { getRandomGenderOption } from '@/utils/getRandomGenderOption';
import { getRandomNumber } from '@/utils/getRandomNumber';
import { getRandomImageUrl } from '@/utils/getRandomImageUrl';

type CreatePersonInput = Omit<
  Person,
  'id' | 'createdAt' | 'updatedAt' | 'color'
>;

const main = async () => {
  // create 10 random people
  const mockData: CreatePersonInput[] = Array.from({ length: 10 }).map(() => ({
    name: faker.name.fullName(),
    age: getRandomNumber(18, 60),
    address: faker.address.streetAddress(),
    gender: getRandomGenderOption(),
    imageUrl: getRandomImageUrl(),
  }));
  // create the people in the database
  await prisma.person.createMany({ data: mockData });
};

main();
