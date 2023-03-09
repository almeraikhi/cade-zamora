import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { AppRouter } from './routers/_app';

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type PersonGetOneOutput = RouterOutput['person']['getOne'];
