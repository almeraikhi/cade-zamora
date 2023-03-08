import { router, publicProcedure } from '../trpc';
import { prisma } from '@/server/prisma';

export const personRouter = router({
  getAll: publicProcedure.query(async (req) => {
    const persons = await prisma.person.findMany();
    return persons;
  }),
});
