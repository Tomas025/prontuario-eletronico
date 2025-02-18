/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { postAnamnese } from '@/services/medicalRecordService';
import {
  formatGlicose,
  formatHeartRate,
  formatHeight,
  formatPressure,
  formatRespiratoryRate,
  formatSaturation,
  formatTemperature,
  formatWeight
} from '@/utils/MaskInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { anamnesisSchema, AnamnesisFormData } from '../schemas/schema';

export type typeTriagemAnamnesi = {
  bloodPressure: string;
  glucose: string;
  temperature: string;
  respiratoryRate: string;
  bloodType: string;
  weight: string;
  heartRate: string;
  saturation: string;
  height: string;
  antecPathological: boolean;
  necesPsicobio: boolean;
  diabetes: boolean;
  medicationsInUse: boolean;
  useOfProthesis: boolean;
  allergies: boolean;
  allergiesType: string;
  antecPathologicalType: string;
  medicationInUseType: string;
  medicalHypothesis: string;
  previousSurgeries: string;
  signsAndSymptoms: string;
  classificationStatus: string;
};

export function useAnamnesisForm() {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const params = useParams();

  const [loading, setLoading] = useState(false);

  const form = useForm<AnamnesisFormData>({
    resolver: zodResolver(anamnesisSchema),
    defaultValues: {
      serviceId: params.id as string, //arrumar dps, ver a maneira de pegar este valor
      bloodPressure: '',
      glucose: '',
      temperature: '',
      weight: '',
      heartRate: '',
      respiratoryRate: '',
      bloodType: 'O+',
      saturation: '',
      height: '',
      antecPathological: 'Sim',
      necesPsicobio: 'Sim',
      diabetes: 'Sim',
      medicationsInUse: 'Sim',
      useOfProthesis: 'Sim',
      allergies: 'Sim',
      allergiesType: '',
      antecPathologicalType: '',
      medicationInUseType: '',
      previousSurgeries: '',
      signsAndSymptoms: '',
      classificationStatus: 'URGENCY',
      medicalHypothesis: ''
    }
  });

  const postAnamneseMutation = useMutation({
    mutationFn: (data: typeTriagemAnamnesi) => postAnamnese(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['Patient', 'SCREENING'],
        exact: true
      });
      await queryClient.refetchQueries({
        queryKey: ['Patient', 'MEDICAL_CARE'],
        exact: true
      });
    }
  });

  const onSubmit: SubmitHandler<AnamnesisFormData> = async (data) => {
    setLoading(true);

    const formattedData = {
      serviceId: params.id as string,
      bloodPressure: formatPressure(data.bloodPressure),
      glucose: formatGlicose(data.glucose),
      temperature: formatTemperature(data.temperature),
      respiratoryRate: formatRespiratoryRate(data.respiratoryRate),
      bloodType: data.bloodType,
      weight: formatWeight(data.weight),
      heartRate: formatHeartRate(data.heartRate),
      saturation: formatSaturation(data.saturation),
      height: formatHeight(data.height),
      antecPathological: data.antecPathological === 'Sim',
      necesPsicobio: data.necesPsicobio === 'Sim',
      diabetes: data.diabetes === 'Sim',
      medicationsInUse: data.medicationsInUse === 'Sim',
      useOfProthesis: data.useOfProthesis === 'Sim',
      allergies: data.allergies === 'Sim',
      allergiesType: data.allergiesType,
      antecPathologicalType: data.antecPathologicalType,
      medicationInUseType: data.medicationInUseType,
      medicalHypothesis: data.medicalHypothesis,
      previousSurgeries: data.previousSurgeries,
      signsAndSymptoms: data.signsAndSymptoms,
      classificationStatus: data.classificationStatus
    };

    const response = await postAnamneseMutation.mutateAsync(formattedData);

    if (response.status === 200) {
      toast.success('Anamnese realizada com sucesso');
      setLoading(false);
      push('/triagem');
    } else {
      toast.error('Erro ao salvar anamnese');
    }
  };

  return {
    form,
    onSubmit,
    loading
  };
}
