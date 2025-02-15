import { getSession } from 'next-auth/react';

import { typeAnotacao } from '@/app/(auth-routes)/equipeMultiprofissional/[id]/hook/useAnotacao';
import { AxiosError } from 'axios';

import { api } from './api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PostNotes(data: any) {
  const session = await getSession();

  try {
    const response = api.post('/Notes', data, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao criar anotação');
    }

    throw new Error('Erro desconhecido ao criar anotação');
  }
}

export async function GetNotes(patientId: number) {
  const session = await getSession();

  try {
    const response = api.get<typeAnotacao[]>('/Notes', {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      },
      params: {
        patientId
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao carregar as anotações');
    }

    throw new Error('Erro desconhecido ao carregar as anotações');
  }
}

export async function GetNumberOfNotes(patientId: number) {
  const session = await getSession();

  try {
    const response = api.get('/Notes/Count', {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      },
      params: {
        patientId
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw (
        error.response?.data ||
        new Error('Erro ao carregar quantidade de anotações do paciente')
      );
    }

    throw new Error(
      'Erro desconhecido ao carregar quantidade de anotações do paciente'
    );
  }
}
