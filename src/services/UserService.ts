import { AxiosError } from 'axios';

import { api } from './api';

export async function PutUser(data: {
  email: string;
  accessCode: string;
  password: string;
}) {
  try {
    const response = api.put('/User', data);

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao atualizar senha');
    }

    throw new Error('Erro desconhecido ao atualizar senha');
  }
}
