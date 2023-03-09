import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from '@/server/routers/_app';
import { getBaseUrl } from './getBaseUrl';

export const trpc = createTRPCNext<AppRouter>({
  config({ ctx }) {
    return {
      queryClientConfig: {
        defaultOptions: { queries: { retry: 0 } },
      },
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },

  ssr: false,
});
