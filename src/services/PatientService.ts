import { getSession } from 'next-auth/react';

import { typePatientForBack } from '@/app/(auth-routes)/atendimentos/listaAtendimentos/novoPaciente/[[...id]]/hooks/useNovoPaciente';
import { AxiosError } from 'axios';

import { api } from './api';

export async function GetPatientFilter(
  status: string | null = null,
  filter: string | null = null
) {
  const session = await getSession();

  try {
    const response = api.get('/Patient/filter', {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      },
      params: {
        filter,
        status,
        pageSize: 9999
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro carregar dados');
    }

    throw new Error('Erro desconhecido carregar dados');
  }
}

export async function PostNewPatient(data: typePatientForBack) {
  const session = await getSession();

  try {
    const response = api.post('/Patient', data, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao criar novo paciente');
    }

    throw new Error('Erro desconhecido ao criar novo paciente');
  }
}

export async function GetUniquePatient(patientId: number) {
  const session = await getSession();

  try {
    const response = api.get(`/Patient/${patientId}`, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw (
        error.response?.data ||
        new Error('Erro ao buscar as informações do paciente')
      );
    }

    throw new Error('Erro desconhecido ao buscar as informações do paciente');
  }
}
