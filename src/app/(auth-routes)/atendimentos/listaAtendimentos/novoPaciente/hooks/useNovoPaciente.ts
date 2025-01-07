import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMyschema } from '../schema/schema';

export function useNovoPaciente() {
  const form = useForm<typeMyschema>({
    resolver: zodResolver(mySchema)
  });

  const submitForm: SubmitHandler<typeMyschema> = async (data) => {
    console.log(data);
  };

  return {
    form,
    submitForm
  };
}
