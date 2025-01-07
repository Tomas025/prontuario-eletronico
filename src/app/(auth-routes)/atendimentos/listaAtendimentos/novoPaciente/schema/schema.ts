import { z } from 'zod';

export const mySchema = z
  .object({
    nomeCompleto: z.string({ required_error: 'Campo obrigatório' }),
    nomeSocial: z.string().optional(),
    dataNascimento: z
      .string()
      .optional()
      .refine(
        (data) => {
          if (!data) return true; // Permite campo vazio
          const dataNascimento = new Date(data);
          return !isNaN(dataNascimento.getTime());
        },
        {
          message: 'Data de nascimento inválida'
        }
      )
  })
  .required();

export type typeMyschema = z.infer<typeof mySchema>;
