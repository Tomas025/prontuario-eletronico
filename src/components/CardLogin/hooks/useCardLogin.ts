import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { mySchema, typeMyschema } from '../schemas/schema';

export function useCardLogin() {
  const { push } = useRouter();
  const form = useForm<typeMyschema>({
    resolver: zodResolver(mySchema)
  });

  const submitForm: SubmitHandler<typeMyschema> = async (data) => {
    const response = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (response?.status === 200) {
      push('/atendimentos');
    }
  };

  return {
    form,
    submitForm
  };
}
