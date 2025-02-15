import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMySchema } from '../schemas/schema';

export function useNewAtendimentoMedico() {
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      // Preenchimento Médico
      medicalHypothesis: 'Gastrite aguda',
      medicationPrescription: [
        {
          medication: 'Omeprazol 20mg, 1x ao dia por 7 dias'
        }
      ],
      examsPrescription: [{ exam: 'Exame de sangue, ultrassom abdominal' }],
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
      respiratoryPattern: '',
      pulmonaryAscultation: '',
      skinColor: '',
      // Cardio
      heartSounds: '',
      pulse: '',
      rhythm: '',
      // Neuro
      pupilReaction: '',
      speech: '',
      consciousnessLevel: '',
      motorResponse: ''
    }
  });

  const arrayFieldMedicationPrescription = useFieldArray({
    control: form.control,
    name: 'medicationPrescription'
  });

  const arrayFieldExamsPrescription = useFieldArray({
    control: form.control,
    name: 'examsPrescription'
  });

  const submitForm: SubmitHandler<typeMySchema> = (data) => {
    console.log(data);
  };

  return {
    form,
    submitForm,
    arrayFieldMedicationPrescription,
    arrayFieldExamsPrescription
  };
}
