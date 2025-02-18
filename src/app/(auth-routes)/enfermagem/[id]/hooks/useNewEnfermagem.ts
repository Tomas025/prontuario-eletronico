import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMySchema } from '../schemas/schema';

export function useNewEnfermagem() {
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      patientMonitoring: [
        {
          bloodPressureNursing: '147',
          glucoseNursing: '80',
          temperatureNursing: '36',
          toxygenSaturationNursing: '100',
          isBackEnd: true
        }
      ],
      nursingNotes: [
        { note: 'Exemplo de anotação', isBackEnd: true },
        { note: 'Exemplo de anotação parte 2', isBackEnd: true }
      ],
      medicalHypothesis: 'Gastrite aguda',
      medicationPrescription: [
        {
          medication: 'Omeprazol 20mg, 1x ao dia por 7 dias',
          isChecked: false
        },
        { medication: 'Dipirona 1g, 1x ao dia por 7 dias', isChecked: true }
      ],
      examsPrescription: [
        { exam: 'Exame de sangue', isChecked: false },
        { exam: 'Exame de sangue', isChecked: true }
      ],
      allergies: 'Nenhuma conhecida',
      pathologicalHistory: 'Nenhum histórico de doenças graves',
      currentMedications: 'Nenhum medicamento atualmente',
      previousSurgeries: 'Apendicectomia em 2015',
      signsAndSymptoms: 'Dor abdominal intensa, náusea e febre',
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
      respiratoryPattern: 'Eupneico',
      pulmonaryAscultation: '100',
      skinColor: 'Normocorada',
      heartSounds: 'Normofonéticas',
      pulse: 'Filiforme',
      rhythm: 'Sinusal',
      pupilReaction: '',
      speech: '',
      consciousnessLevel: '',
      motorResponse: ''
    }
  });

  const [status, setStatus] = useState<string>('');
  const [serviceStatus, setServiceStatus] = useState<string>('');

  const patientMonitoringFields = useFieldArray({
    control: form.control,
    name: 'patientMonitoring'
  });

  const nursingNotesFields = useFieldArray({
    control: form.control,
    name: 'nursingNotes'
  });

  const {
    fields: medicationFields,
    append: appendMedication,
    remove: removeMedication
  } = useFieldArray({
    control: form.control,
    name: 'medicationPrescription'
  });

  const {
    fields: examFields,
    append: appendExam,
    remove: removeExam
  } = useFieldArray<typeMySchema, 'examsPrescription'>({
    control: form.control,
    name: 'examsPrescription'
  });

  const submitForm: SubmitHandler<typeMySchema> = (data) => {
    console.log(
      Object.assign(data, { status: status, serviceStatus: serviceStatus })
    );
  };

  return {
    form,
    submitForm,
    medicationFields,
    appendMedication,
    removeMedication,
    examFields,
    appendExam,
    removeExam,
    patientMonitoringFields,
    nursingNotesFields,
    status,
    setStatus,
    serviceStatus,
    setServiceStatus
  };
}
