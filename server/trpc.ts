import { Context } from './context';
import { initTRPC } from '@trpc/server';

const t = initTRPC.context<Context>().create({
  // this is put in here as a placeholder so we could add a custom error formatter later
  errorFormatter: ({ shape }) => {
    return shape;
  },
});

export const router = t.router;

// this is the equivalent of a public API endponit
export const publicProcedure = t.procedure;
