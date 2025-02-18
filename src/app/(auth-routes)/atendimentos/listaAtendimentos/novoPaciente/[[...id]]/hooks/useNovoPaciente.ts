/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  GetUniquePatient,
  PostNewPatient,
  PutPatient
} from '@/services/PatientService';
import { noMask } from '@/utils/MaskInput';
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
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const { push } = useRouter();
  const form = useForm<typeMySchema>({
    resolver: zodResolver(mySchema),
    defaultValues: async () => {
      setIsLoading(true);
      
      if (params && params.id?.[0]) {
      const result = await GetUniquePatient(Number(params.id[0]));

        const date = new Date(result.data.birthDate);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');

        setIsLoading(false);
        return {
          bairro: result.data.address.neighborhood,
          cep: result.data.address.cep,
          cidade: result.data.address.city,
          cpf: result.data.cpf,
          dataNascimento: `${year}-${month}-${day}`,
          nomeCompleto: result.data.name,
          nomeMae: result.data.motherName,
          nomeSocial: result.data.socialName,
          numero: result.data.address.number.toString(),
          rg: noMask(result.data.rg),
          rua: result.data.address.street,
          sus: result.data.sus,
          telefone: noMask(result.data.phone),
          emergencyContact: result.data.emergencyContactDetails.map(
            (emergencyContactFields: any) => ({
              nomeContatoEmergencia: emergencyContactFields.name,
              parentesco: emergencyContactFields.relationship,
              telefoneContatoEmergencia: noMask(emergencyContactFields.phone)
            })
          )
        };
      } else {
        setIsLoading(false);
        return {
          bairro: '',
          cep: '',
          cidade: '',
          cpf: '',
          dataNascimento: '',
          nomeCompleto: '',
          nomeMae: '',
          nomeSocial: '',
          numero: '',
          rg: '',
          rua: '',
          sus: '',
          telefone: '',
          emergencyContact: [
            {
              nomeContatoEmergencia: '',
              parentesco: '',
              telefoneContatoEmergencia: ''
            }
          ]
        };
      }
    }
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

  const PutPatientMutation = useMutation({
    mutationFn: (data: typePatientForBack & { id: number }) => PutPatient(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['Patient', 'NO_SERVICE'],
        exact: true
      });
      await queryClient.refetchQueries({
        queryKey: ['PatientMedicalRecord', params.id[0]],
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

    if (params.id?.[0]) {
      const objectPut = Object.assign(dataForBack, {
        id: Number(params.id[0])
      });

      const result = await PutPatientMutation.mutateAsync(objectPut);

      if (result.status === 200) {
        toast.success('Paciente atualizado com sucesso');
        push(`/paciente/${params.id[0]}`);
      } else {
        // Verificar possibilidade de usar melhorar a mensagem de erro
        // Utilizando o erro retornado do backend
        toast.error('Erro ao atualizar paciente');
      }
    } else {
      const result = await postNewPatientMutation.mutateAsync(dataForBack);

      if (result.status === 200) {
        toast.success('Paciente cadastrado com sucesso');
        push('/atendimentos/listaAtendimentos');
      } else {
        // Verificar possibilidade de usar melhorar a mensagem de erro
        // Utilizando o erro retornado do backend
        toast.error('Erro ao cadastrar paciente');
      }
    }
  };

  return {
    form,
    submitForm,
    emergencyContactFields,
    append,
    remove,
    isLoading
  };
}
