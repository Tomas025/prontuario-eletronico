import { getSession } from 'next-auth/react';
import { AxiosError } from 'axios';
import { api } from './api';

export async function GetMedicalRecordById(medicalRecordId: number) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.get(`/MedicalRecord/${medicalRecordId}`, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`
      }
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao carregar o prontuário');
    }

    throw new Error('Erro desconhecido ao carregar o prontuário');
  }
}

export async function PostAnamnese(anamneseData: Record<string, any>) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.post('/MedicalRecord/anamnese', anamneseData, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('Erro ao adicionar anamnese');
    }

    throw new Error('Erro desconhecido ao adicionar anamnese');
  }
}
