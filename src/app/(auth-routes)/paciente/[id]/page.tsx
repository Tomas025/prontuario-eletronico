/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { BreadCrumb } from '@/components/BreadCrumb';
import { ListLink } from '@/components/BreadCrumb/types/typesBreadCrumb';
import { CardProntuario } from '@/components/CardProntuario';
import { DadosPessoais } from '@/components/DadosPessoais';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

import { usePaciente } from './hooks/usePaciente';

const MENU_OPTIONS = [
  { label: 'Dados Pessoais', value: 'dados-pessoais' },
  { label: 'Prontuários', value: 'prontuários' }
];

export default function Pacientes() {
  const params = useParams();
  const [selectedOption, setSelectedOption] = useState(MENU_OPTIONS[0]);
  const {
    patientDate,
    isLoadingPatientDate,
    PatientMedicalRecord,
    isLoadingPatientMedicalRecord
  } = usePaciente();
  const linkList: ListLink[] = [
    { label: 'Atendimentos', route: '/atendimentos' },
    { label: patientDate?.data.name, route: '' }
  ];

  return (
    <section className="flex flex-col gap-6 w-full">
      <section className="flex justify-between items-center">
        <BreadCrumb linkList={linkList} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between px-4 py-2 w-48 border border-gray-300 rounded-md bg-white text-gray-900 hover:bg-gray-50">
              {selectedOption.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            {MENU_OPTIONS.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onSelect={() => setSelectedOption(option)}
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {selectedOption.value === 'dados-pessoais' && !isLoadingPatientDate && (
        <DadosPessoais data={patientDate?.data} />
      )}

      {selectedOption.value === 'prontuários' &&
        !isLoadingPatientMedicalRecord && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {PatientMedicalRecord?.data.data.length > 0 &&
              PatientMedicalRecord?.data.data.map((prontuario: any) => (
                <CardProntuario
                  key={prontuario.id}
                  pessoaId={params.id as string}
                  prontuarioId={prontuario.id}
                  data={new Date(prontuario.serviceDate).toLocaleDateString(
                    'pt-BR'
                  )}
                  sintomas={prontuario.signsAndSymptoms}
                  pressao={prontuario.bloodPressure}
                  glicose={prontuario.glucose}
                  classificacao={prontuario.classificationStatus}
                />
              ))}
          </div>
        )}
    </section>
  );
}
