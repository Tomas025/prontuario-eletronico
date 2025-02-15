import { useRouter } from 'next/navigation';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { PostNewPatient } from '@/services/PatientService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { mySchema, typeMySchema } from '../schema/schema';

export type typePatientForBack = {
  name: string;
  socialName: string | null;
  birthDate: string | null;
  sus: string | null;
  cpf: string;
  rg: string | null;
  phone: string | null;
  motherName: string | null;
  address: {
    cep?: string;
    street?: string;
    city?: string;
    number?: number;
    neighborhood?: string;
  } | null;
  emergencyContactDetails?: {
    name?: string;
    phone?: string;
    relationship?: string;
  }[];
};

export function useNovoPaciente() {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema)
  });

  const {
    fields: emergencyContactFields,
    append,
    remove
  } = useFieldArray({
    control: form.control,
    name: 'emergencyContact'
  });

  const postNewPatientMutation = useMutation({
    mutationFn: (data: typePatientForBack) => PostNewPatient(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['Patient', 'NO_SERVICE'],
        exact: true
      });
    }
  });

  const submitForm: SubmitHandler<typeMySchema> = async (data) => {
    const dataForBack: typePatientForBack = {
      name: data.nomeCompleto,
      socialName: data.nomeSocial || null,
      birthDate: data.dataNascimento
        ? new Date(data.dataNascimento).toISOString()
        : null,
      sus: data.sus || null,
      cpf: data.cpf,
      rg: data.rg || null,
      phone: data.telefone || null,
      motherName: data.nomeMae || null,
      address:
        data.cep || data.rua || data.cidade || data.numero || data.bairro
          ? {
              cep: data.cep,
              street: data.rua,
              city: data.cidade,
              number: Number(data.numero),
              neighborhood: data.bairro
            }
          : {},
      emergencyContactDetails: data.emergencyContact.map(
        (emergencyContact) => ({
          name: emergencyContact.nomeContatoEmergencia,
          phone: emergencyContact.telefoneContatoEmergencia,
          relationship: emergencyContact.parentesco
        })
      )
    };

    const result = await postNewPatientMutation.mutateAsync(dataForBack);

    if (result.status === 200) {
      toast.success('Paciente cadastrado com sucesso');
      push('/atendimentos/listaAtendimentos');
    } else {
      // Verificar possibilidade de usar melhorar a mensagem de erro
      // Utilizando o erro retornado do backend
      toast.error('Erro ao cadastrar paciente');
    }
  };

  return {
    form,
    submitForm,
    emergencyContactFields,
    append,
    remove
  };
}
