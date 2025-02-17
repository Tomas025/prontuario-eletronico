import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { GetNotes, PostNotes } from '@/services/NotesService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { mySchema, typeMySchema } from '../schema/schema';

export type typeAnotacao = {
  id: number;
  nameUser: string;
  positionUser: string;
  description: string;
  createdAt: string;
};

export type typeDataForCreateNote = {
  description: string;
  patientId: number;
  userId: number;
};

export function useAnotacao() {
  const params = useParams();
  const session = useSession();
  const queryClient = useQueryClient();
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema)
  });
  const { data: anotacoes, isLoading } = useQuery({
    queryKey: ['Anotacoes', params.id],
    queryFn: () => GetNotes(Number(params.id)),
    staleTime: 1 * 60 * 1000
  });

  const postNotesMutation = useMutation({
    mutationFn: (data: typeDataForCreateNote) => PostNotes(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['Anotacoes', params.id],
        exact: true
      });
    }
  });

  const submitForm: SubmitHandler<typeMySchema> = async (data) => {
    const dataForCreateNote: typeDataForCreateNote = {
      description: data.anotacao,
      patientId: Number(params.id),
      userId: Number(session.data?.user.id)
    };

    const result = await postNotesMutation.mutateAsync(dataForCreateNote);

    if (result.status === 200) {
      toast.success('Anotação adicionada com sucesso');
    } else {
      // Verificar possibilidade de usar melhorar a mensagem de erro
      // Utilizando o erro retornado do backend
      toast.error('Erro ao adicionar anotação');
    }
  };

  return {
    form,
    submitForm,
    anotacoes,
    isLoading
  };
}
