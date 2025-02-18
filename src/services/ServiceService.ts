import { getSession } from 'next-auth/react';

import { AxiosError } from 'axios';

import { api } from './api';

export async function GetPatientService(patientId: number) {
  const session = await getSession();

  try {
    const response = api.get(`/Service/patient/${patientId}`, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      },
      params: {
        pageSize: 9999
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw (
        error.response?.data ||
        new Error('Erro carregar prontuários anteriores')
      );
    }

    throw new Error('Erro desconhecido carregar prontuários anteriores');
  }
}
