import { useParams } from 'next/navigation';

import { GetUniquePatient } from '@/services/PatientService';
import { useQuery } from '@tanstack/react-query';

export function usePaciente() {
  const params = useParams();
  const { data: patientDate, isLoading } = useQuery({
    queryKey: ['Patient', params.id],
    queryFn: () => GetUniquePatient(Number(params.id)),
    staleTime: 1 * 60 * 1000
  });

  return { patientDate, isLoading };
}
