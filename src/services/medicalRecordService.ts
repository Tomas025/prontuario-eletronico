import { getSession } from 'next-auth/react';

import { typeTriagemAnamnesi } from '@/components/BodyTriagem/hooks/useBodyTriagem';

import {
  FinalizePatientExamMedicationData,
  PatientExamMedicationData,
  PatientMonitoringData
} from '@/utils/interfacesMedicalRecord';
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

export async function postAnamnese(data: typeTriagemAnamnesi) {
  const session = await getSession();

  try {
    const response = await api.post('/MedicalRecord/anamnese', data, {
      headers: {
        Authorization: `Bearer ${session?.user.accessToken}`
      }
    });

    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Erro ao adicionar anamnese'
      );
    }

    throw new Error('Erro desconhecido ao adicionar anamnese');
  }
}

export async function postPatientMonitoring(data: PatientMonitoringData) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.post(
      '/api/MedicalRecord/PatientMonitoring',
      data,
      {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message ||
          'Erro ao adicionar monitoramento do paciente'
      );
    }

    throw new Error('Erro desconhecido ao adicionar monitoramento do paciente');
  }
}

export async function postPatientExam(data: PatientExamMedicationData[]) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.post('/api/MedicalRecord/PatientExam', data, {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Erro ao adicionar exame do paciente'
      );
    }

    throw new Error('Erro desconhecido ao adicionar exame do paciente');
  }
}

export async function finalizePatientExam(
  data: FinalizePatientExamMedicationData
) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.post(
      '/api/MedicalRecord/FinalizePatientExam',
      data,
      {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Erro ao finalizar exame do paciente'
      );
    }

    throw new Error('Erro desconhecido ao finalizar exame do paciente');
  }
}

export async function postPatientMedication(data: PatientExamMedicationData[]) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.post(
      '/api/MedicalRecord/AddPatientMedication',
      data,
      {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Erro ao adicionar exame do paciente'
      );
    }

    throw new Error('Erro desconhecido ao adicionar exame do paciente');
  }
}

export async function finalizePatientMedication(
  data: FinalizePatientExamMedicationData
) {
  const session = await getSession();

  if (!session?.user.accessToken) {
    throw new Error('Usuário não autenticado');
  }

  try {
    const response = await api.post(
      '/api/MedicalRecord/FinalizePatientMedication',
      data,
      {
        headers: {
          Authorization: `Bearer ${session.user.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(
        error.response?.data?.message || 'Erro ao finalizar exame do paciente'
      );
    }

    throw new Error('Erro desconhecido ao finalizar exame do paciente');
  }
}
