import * as z from 'zod';

export const anamnesisSchema = z
  .object({
    serviceId: z.string({ required_error: 'Campo obrigatório' }),
    bloodPressure: z.string({ required_error: 'Campo obrigatório' }),
    glucose: z.string({ required_error: 'Campo obrigatório' }),
    temperature: z.string({ required_error: 'Campo obrigatório' }),
    weight: z.string({ required_error: 'Campo obrigatório' }),
    heartRate: z.string({ required_error: 'Campo obrigatório' }),
    respiratoryRate: z.string({ required_error: 'Campo obrigatório' }),
    bloodType: z
      .string()
      .refine(
        (value) =>
          ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'].includes(value),
        'Tipo sanguíneo inválido.'
      ),
    saturation: z.string({ required_error: 'Campo obrigatório' }),
    height: z.string({ required_error: 'Campo obrigatório' }),
    antecPathological: z
      .string()
      .refine(
        (value) => ['Sim', 'Nao'].includes(value),
        "Escolha 'Sim' ou 'Não' para antecedentes."
      ),
    necesPsicobio: z
      .string()
      .refine(
        (value) => ['Sim', 'Nao'].includes(value),
        "Escolha 'Sim' ou 'Não' para necessidade psicobiológica."
      ),
    diabetes: z
      .string()
      .refine(
        (value) => ['Sim', 'Nao'].includes(value),
        "Escolha 'Sim' ou 'Não' para diabetes."
      ),
    medicationsInUse: z
      .string()
      .refine(
        (value) => ['Sim', 'Nao'].includes(value),
        "Escolha 'Sim' ou 'Não' para medicamentos em uso."
      ),
    useOfProthesis: z
      .string()
      .refine(
        (value) => ['Sim', 'Nao'].includes(value),
        "Escolha 'Sim' ou 'Não' para uso de prótese."
      ),
    allergies: z
      .string()
      .refine(
        (value) => ['Sim', 'Nao'].includes(value),
        "Escolha 'Sim' ou 'Não' para alergias."
      ),
    allergiesType: z.string().optional(), // Campo opcional para listar alergias
    antecPathologicalType: z.string().optional(), // Campo opcional para antecedentes
    medicationInUseType: z.string().optional(), // Campo opcional para medicamentos
    previousSurgeries: z.string().optional(), // Campo opcional para cirurgias prévias
    signsAndSymptoms: z.string().optional(), // Campo opcional para sinais e sintomas
    classificationStatus: z.enum([
      'EMERGENCY',
      'VERY_URGENT',
      'URGENCY',
      'LESS_SERIOUS',
      'LIGHTWEIGHT'
    ]), // Campo para classificação
    medicalHypothesis: z.string().optional() // Campo opcional para hipótese médica
  })
  .required();

export type AnamnesisFormData = z.infer<typeof anamnesisSchema>;
