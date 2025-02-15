import { useParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { GetNotes } from '@/services/NotesService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';

import { mySchema, typeMySchema } from '../schema/schema';

export type typeAnotacao = {
  id: number;
  nameUser: string;
  positionUser: string;
  description: string;
  createdAt: string;
};

export function useAnotacao() {
  const params = useParams();
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema)
  });
  const { data: anotacoes, isLoading } = useQuery({
    queryKey: ['Anotacoes', params.id],
    queryFn: () => GetNotes(Number(params.id)),
    staleTime: 1 * 60 * 1000
  });

  const submitForm: SubmitHandler<typeMySchema> = async (data) => {
    console.log(data);
  };

  return {
    form,
    submitForm,
    anotacoes,
    isLoading
  };
}
