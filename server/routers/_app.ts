import { router, publicProcedure } from '../trpc';
import { prisma } from '../prisma';

export const appRouter = router({
  healthcheck: publicProcedure.query(async (req) => {
    // await prisma.person.findMany();

    return { greeting: 'hello world' };
  }),
});

export type AppRouter = typeof appRouter;
