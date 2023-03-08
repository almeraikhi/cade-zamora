import { z } from 'zod';

export const addInputSchema = z.object({
  name: z.string(),
  age: z.number().min(1).max(120),
  gender: z.enum(['male', 'female', 'unspecified'], {
    errorMap: (err) => {
      return {
        message: "gender options must be 'male', 'female', or 'unspecified' ",
      };
    },
  }),
  address: z.string(),
  imageUrl: z.string().optional(),
});

export const updateInputSchema = addInputSchema.extend({ id: z.string() });
