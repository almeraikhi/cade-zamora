import { router, publicProcedure } from '../trpc';
import { prisma } from '@/server/prisma';
import { addInputSchema } from '@/dtos/person';

export const personRouter = router({
  getAll: publicProcedure.query(async (req) => {
    const persons = await prisma.person.findMany();
    return persons;
  }),
  add: publicProcedure.input(addInputSchema).mutation(async (req) => {
    const input = req.input;
    const person = await prisma.person.create({ data: input });
    return person;
  }),
});
