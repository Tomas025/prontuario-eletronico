import { z } from 'zod';

export const mySchema = z.object({
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
      { message: 'Data de nascimento inválida' }
    ),
  sus: z
    .string()
    .optional()
    .refine((sus) => !sus || /^\d{15}$/.test(sus), {
      message: 'Número do SUS inválido'
    }),
  cpf: z
    .string({ required_error: 'Campo obrigatório' })
    .refine((cpf) => /^\d{11}$/.test(cpf), { message: 'CPF inválido' }),
  rg: z
    .string()
    .optional()
    .refine((rg) => !rg || /^\d{9}$/.test(rg), { message: 'RG inválido' }),
  telefone: z
    .string()
    .optional()
    .refine((telefone) => !telefone || /^\d{10,11}$/.test(telefone), {
      message: 'Telefone inválido'
    }),
  nomeMae: z.string().optional(),
  cep: z
    .string()
    .optional()
    .refine((cep) => !cep || /^\d{8}$/.test(cep), { message: 'CEP inválido' }),
  cidade: z.string().optional(),
  bairro: z.string().optional(),
  rua: z.string().optional(),
  numero: z
    .string()
    .optional()
    .refine((numero) => !numero || /^\d+$/.test(numero), {
      message: 'Número inválido'
    }),
  nomeContatoEmergencia: z.string().optional(),
  parentesco: z
    .string()
    .optional()
    .refine(
      (value) =>
        !value ||
        ['Pai', 'Mãe', 'Irmão(a)', 'Esposo(a)', 'Filho(a)', 'Outro'].includes(
          value
        ),
      {
        message: 'Parentesco inválido'
      }
    ),
  telefoneContatoEmergencia: z
    .string()
    .optional()
    .refine((telefone) => !telefone || /^\d{10,11}$/.test(telefone), {
      message: 'Telefone de emergência inválido'
    })
});

export type typeMySchema = z.infer<typeof mySchema>;
