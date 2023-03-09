import { router, publicProcedure } from '../trpc';
import { prisma } from '../prisma';
import { personRouter } from './person';

export const appRouter = router({
  healthcheck: publicProcedure.query(async (req) => {
    // await prisma.person.findMany();

    return { greeting: 'hello world' };
  }),
  person: personRouter,
});

export type AppRouter = typeof appRouter;
