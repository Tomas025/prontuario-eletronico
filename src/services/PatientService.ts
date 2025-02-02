import { getSession } from 'next-auth/react';

import { AxiosError } from 'axios';

import { api } from './api';

export async function GetPatientFilter(filter?: string, status?: string) {
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
