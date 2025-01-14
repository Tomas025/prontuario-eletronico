import * as z from "zod";

export const anamnesisSchema = z.object({
  pressao: z.string()
    .regex(/^\d{1,3}\/\d{1,3}$/, "Insira a pressão no formato correto (ex: 120/80)")
    .nonempty("Pressão arterial é obrigatória."),
  glicose: 
    z.string()
    .regex(/^\d+(mg\/dl)?$/, "Insira a glicose no formato correto (ex: 130mg/dl)")
    .nonempty("Glicose é obrigatória."),
  temperatura: 
    z.string()
    .regex(/^\d{1,2}(.\d)?°?$/, "Insira a temperatura no formato correto (ex: 37°)")
    .nonempty("Temperatura é obrigatória."),
  peso: 
    z.string()
    .regex(/^\d{1,3}(kg)?$/, "Insira o peso no formato correto (ex: 64kg)")
    .nonempty("Peso é obrigatório."),
  freqCardiaca: 
    z.string()
    .regex(/^\d{1,3}( bpm)?$/, "Insira a frequência cardíaca no formato correto (ex: 70 bpm)")
    .nonempty("Frequência cardíaca é obrigatória."),
  freqResp:
    z.string()
    .regex(/^\d{1,3}( ipm)?$/, "Insira a frequência respiratória no formato correto (ex: 20 ipm)")
    .nonempty("Frequência respiratória é obrigatória."),
  tipoSang: 
    z.string()
    .refine(
      (value) =>
        ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].includes(value),
      "Tipo sanguíneo inválido."
    ),
  saturacao: 
    z.string()
    .regex(/^\d{1,3}( SpO2)?$/, "Insira a saturação no formato correto (ex: 99 SpO2)")
    .nonempty("Saturação é obrigatória."),
  altura: 
    z.string()
    .regex(/^\d{1},\d{2}m$/, "Insira a altura no formato correto (ex: 1,67m)")
    .nonempty("Altura é obrigatória."),
  antPato: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para antecedentes."),
  necesPsicobio: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para necessidade psicobiológica."),
  diabetes: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para diabetes."),
  medicUso: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para medicamentos em uso."),
  protese: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para uso de prótese."),
  temAlergia: 
    z.string()
    .refine((value) => ["Sim", "Não"].includes(value), "Escolha 'Sim' ou 'Não' para alergias."),
  alergias: z.string().optional(), // Campo opcional para listar alergias
  antecedentes: z.string().optional(), // Campo opcional para antecedentes
  medicamentos: z.string().optional(), // Campo opcional para medicamentos
  cirurgias: z.string().optional(), // Campo opcional para cirurgias prévias
  sintomas: z.string().optional(), // Campo opcional para sinais e sintomas
}).required();

export type AnamnesisFormData = z.infer<typeof anamnesisSchema>;
