import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMyschema } from '../schemas/schema';

export function useCardLogin() {
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
