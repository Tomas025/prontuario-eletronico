import { z } from 'zod';

export const mySchema = z.object({
  signsSymptoms: z.string().trim(),
  medicalHypothesis: z.string().trim(),
  medicationPrescription: z.string().trim(),
  examsPrescription: z.string().trim()
});

export type typeMySchema = z.infer<typeof mySchema>;
