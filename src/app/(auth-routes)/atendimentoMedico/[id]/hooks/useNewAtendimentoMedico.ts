import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMySchema } from '../schemas/schema';

export function useNewAtendimentoMedico() {
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema),
    defaultValues: {
      signsSymptoms: '',
      medicalHypothesis: '',
      medicationPrescription: '',
      examsPrescription: ''
    }
  });

  const submitForm: SubmitHandler<typeMySchema> = (data) => {
    console.log(data);
  };

  return { form, submitForm };
}
