import { router, publicProcedure } from '../trpc';
import { prisma } from '@/server/prisma';
import { addInputSchema, updateInputSchema } from '@/dtos/person';
import { z } from 'zod';

export const personRouter = router({
  getAll: publicProcedure.query(async (req) => {
    const persons = await prisma.person.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    return persons;
  }),
  getOne: publicProcedure.input(z.object({ id: z.string() })).query((req) => {
    const { id } = req.input;
    const person = prisma.person.findFirst({ where: { id } });
    return person;
  }),
  add: publicProcedure.input(addInputSchema).mutation(async (req) => {
    const input = req.input;
    const person = await prisma.person.create({ data: input });
    return person;
  }),
  update: publicProcedure.input(updateInputSchema).mutation(async (req) => {
    const { id, ...data } = req.input;
    const person = await prisma.person.update({ where: { id: id }, data });
    return person;
  }),
  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (req) => {
      const { id } = req.input;
      await prisma.person.delete({ where: { id } });
      return {};
    }),
});
