import { z } from 'zod';

export const mySchema = z.object({
  anotacao: z
    .string({ required_error: 'Campo obrigatório' })
    .min(1, 'Campo obrigatório')
});

export type typeMySchema = z.infer<typeof mySchema>;
