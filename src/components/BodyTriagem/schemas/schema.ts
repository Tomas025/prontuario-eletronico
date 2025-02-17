import * as z from "zod";



export const anamnesisSchema = z.object({
  serviceId: z.string(),
  bloodPressure: z.string()
    .regex(/^\d{1,3}\/\d{1,3}$/, "Insira a pressão no formato correto (ex: 120/80)")
    .nonempty("Pressão arterial é obrigatória."),
  glucose: 
    z.string()
    .regex(/^\d+(mg\/dl)?$/, "Insira a glicose no formato correto (ex: 130mg/dl)")
    .nonempty("Glicose é obrigatória."),
  temperature: 
    z.string()
    .regex(/^\d{1,2}(.\d)?°?$/, "Insira a temperatura no formato correto (ex: 37°)")
    .nonempty("Temperatura é obrigatória."),
  weight: 
    z.string()
    .regex(/^\d{1,3}(kg)?$/, "Insira o peso no formato correto (ex: 64kg)")
    .nonempty("Peso é obrigatório."),
  heartRate: 
    z.string()
    .regex(/^\d{1,3}( bpm)?$/, "Insira a frequência cardíaca no formato correto (ex: 70 bpm)")
    .nonempty("Frequência cardíaca é obrigatória."),
  respiratoryRate:
    z.string()
    .regex(/^\d{1,3}( ipm)?$/, "Insira a frequência respiratória no formato correto (ex: 20 ipm)")
    .nonempty("Frequência respiratória é obrigatória."),
  bloodType: 
    z.string()
    .refine(
      (value) =>
        ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].includes(value),
      "Tipo sanguíneo inválido."
    ),
  saturation: 
    z.string()
    .regex(/^\d{1,3}( SpO2)?$/, "Insira a saturação no formato correto (ex: 99 SpO2)")
    .nonempty("Saturação é obrigatória."),
  height: 
    z.string()
    .regex(/^\d{1},\d{2}m$/, "Insira a altura no formato correto (ex: 1,67m)")
    .nonempty("Altura é obrigatória."),
  antecPathological: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para antecedentes."),
  necesPsicobio: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para necessidade psicobiológica."),
  diabetes: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para diabetes."),
  medicationsInUse: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para medicamentos em uso."),
  useOfProthesis: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para uso de prótese."),
  allergies: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para alergias."),
  allergiesType: z.string().optional(), // Campo opcional para listar alergias
  antecPathologicalType: z.string().optional(), // Campo opcional para antecedentes
  medicationInUseType: z.string().optional(), // Campo opcional para medicamentos
  previousSurgeries: z.string().optional(), // Campo opcional para cirurgias prévias
  signsAndSymptoms: z.string().optional(), // Campo opcional para sinais e sintomas
  classificationStatus: z.enum(["EMERGENCY", "VERY_URGENT", "URGENCY", "LESS_SERIOUS", "LIGHTWEIGHT"]), // Campo para classificação
  medicalHypothesis: z.string().optional(), // Campo opcional para hipótese médica
}).required();

export type AnamnesisFormData = z.infer<typeof anamnesisSchema>;
