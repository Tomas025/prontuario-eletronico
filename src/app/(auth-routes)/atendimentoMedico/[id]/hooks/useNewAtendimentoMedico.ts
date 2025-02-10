import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMySchema } from '../schemas/schema';

export function useNewAtendimentoMedico() {
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      // Preenchimento Médico
      medicalHypothesis: 'Gastrite aguda',
      medicationPrescription: 'Omeprazol 20mg, 1x ao dia por 7 dias',
      examsPrescription: 'Exame de sangue, ultrassom abdominal',
      // Outros campos
      allergies: 'Nenhuma conhecida',
      pathologicalHistory: 'Nenhum histórico de doenças graves',
      currentMedications: 'Nenhum medicamento atualmente',
      previousSurgeries: 'Apendicectomia em 2015',
      signsAndSymptoms: 'Dor abdominal intensa, náusea e febre',
      // Anamnese
      bloodPressure: '120/80 mmHg',
      glucose: '95 mg/dL',
      temperature: '37.2°C',
      weight: '72 kg',
      heartRate: '75 bpm',
      respiratoryRate: '16 rpm',
      bloodType: 'O+',
      oxygenSaturation: '98%',
      height: '1.72 m',
      medicalHistory: 'Sim',
      psychobiologicalNeeds: 'Sim',
      allergie: 'Não',
      prosthesisUse: 'Não',
      currentMedication: 'Sim',
      // Necessidades Psico
      respiratoryPattern: 'Regular',
      pulmonaryAscultation: 'Sem estertores ou roncos',
      skinColor: 'Parda',
      // Cardio
      heartSounds: 'Normais, sem sopros',
      pulse: 'Ritmo regular, 75 bpm',
      rhythm: 'Síncrono',
      // Neuro
      pupilReaction: 'Normal',
      speech: 'Lenta, mas coerente',
      consciousnessLevel: 'Alerta',
      motorResponse: 'Normal, sem paresia'
    }
  });

  const submitForm: SubmitHandler<typeMySchema> = (data) => {
    console.log(data);
  };

  return { form, submitForm };
}
