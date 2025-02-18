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
        patientId: patientId,
        pageNumber: 1,
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

export async function initService(patientId: number) {
  const session = await getSession();

  try {
    const response = api.post('/Service/initService',patientId ,
      {
        headers: {
          Authorization: `Bearer ${session?.user.accessToken}`,
          "Content-Type": "application/json",
        }
        }
    );

    return response;
    }
    catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao iniciar atendimento');
    }

    throw new Error('Erro desconhecido ao iniciar atendimento');
    }   
}
