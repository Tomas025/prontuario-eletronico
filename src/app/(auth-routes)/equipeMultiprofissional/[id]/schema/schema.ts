import { z } from 'zod';

export const mySchema = z.object({
  anotacao: z.string({ required_error: 'Campo obrigatório' })
});

export type typeMySchema = z.infer<typeof mySchema>;
