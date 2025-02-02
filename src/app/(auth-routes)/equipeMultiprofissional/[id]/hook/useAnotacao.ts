import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMySchema } from '../schema/schema';

export function useAnotacao() {
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema)
  });

  const submitForm: SubmitHandler<typeMySchema> = async (data) => {
    console.log(data);
  };

  return {
    form,
    submitForm
  };
}
