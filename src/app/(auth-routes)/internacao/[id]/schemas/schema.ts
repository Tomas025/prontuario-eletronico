import { z } from 'zod';

export const mySchema = z.object({
  // Preenchimento Médico
  medicalHypothesis: z.string().trim(),
  medicationPrescription: z
    .object({
      medication: z.string().trim()
    })
    .array(),
  examsPrescription: z
    .object({
      exam: z.string().trim()
    })
    .array(),

  // Outros campos
  signsAndSymptoms: z.string().trim(),
  previousSurgeries: z.string().trim(),
  allergies: z.string().trim(),
  pathologicalHistory: z.string().trim(),
  currentMedications: z.string().trim(),

  // Anamnese
  bloodPressure: z.string().trim(),
  glucose: z.string().trim(),
  temperature: z.string().trim(),
  weight: z.string().trim(),
  heartRate: z.string().trim(),
  respiratoryRate: z.string().trim(),
  bloodType: z.string().trim(),
  oxygenSaturation: z.string().trim(),

  // Anamnese 2
  height: z.string().trim(),
  medicalHistory: z.string().trim(),
  psychobiologicalNeeds: z.string().trim(),
  allergie: z.string().trim(),
  prosthesisUse: z.string().trim(),
  currentMedication: z.string().trim(),

  // Necessidades psicobiológicas
  respiratoryPattern: z.string().trim(),
  pulmonaryAscultation: z.string().trim(),
  skinColor: z.string().trim(),

  // Cardio
  heartSounds: z.string().trim(),
  pulse: z.string().trim(),
  rhythm: z.string().trim(),

  // Neurológico
  pupilReaction: z.string().trim(),
  speech: z.string().trim(),
  consciousnessLevel: z.string().trim(),
  motorResponse: z.string().trim(),

  // Avaliacao
  weight1: z.string().trim(),
  FC: z.string().trim(),
  PA: z.string().trim(),

  patientMonitoring: z
    .object({
      hour: z.string().trim(),
      bloodPressure: z.string().trim(),
      glucose: z.string().trim(),
      temperature: z.string().trim(),
      saturation: z.string().trim()
    })
    .array(),

});

export type typeMySchema = z.infer<typeof mySchema>;
