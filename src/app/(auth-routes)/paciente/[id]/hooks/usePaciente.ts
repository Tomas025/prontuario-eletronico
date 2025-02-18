import { useParams } from 'next/navigation';

import { GetUniquePatient } from '@/services/PatientService';
import { GetPatientService } from '@/services/ServiceService';
import { useQuery } from '@tanstack/react-query';

export function usePaciente() {
  const params = useParams();
  const { data: patientDate, isLoading: isLoadingPatientDate } = useQuery({
    queryKey: ['Patient', params.id],
    queryFn: () => GetUniquePatient(Number(params.id)),
    staleTime: 1 * 60 * 1000
  });

  const {
    data: PatientMedicalRecord,
    isLoading: isLoadingPatientMedicalRecord
  } = useQuery({
    queryKey: ['PatientMedicalRecord', params.id],
    queryFn: () => GetPatientService(Number(params.id)),
    staleTime: 1 * 60 * 1000
  });

  return {
    patientDate,
    isLoadingPatientDate,
    PatientMedicalRecord,
    isLoadingPatientMedicalRecord
  };
}
