/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { CustomTable } from '@/components/CustomTable';

import { GetPatientFilter } from '@/services/PatientService';
import { ConvertClassificationStatus } from '@/utils/ConvertEnums';
import { calcularIdade } from '@/utils/UtilsFunction';
import { useQuery } from '@tanstack/react-query';

export default function Atendimentos() {
  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'IN_SERVICE'],
    queryFn: () => GetPatientFilter('IN_SERVICE'),
    staleTime: 1 * 60 * 1000
  });

  const classificationColors: Record<string, string> = {
    EMERGENCY: 'bg-red/01',
    VERY_URGENT: 'bg-orange',
    URGENCY: 'bg-yellow',
    LESS_SERIOUS: 'bg-green/01',
    LIGHTWEIGHT: 'bg-otherBlue'
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'PACIENTE',
        cell: ({ cell }: any) => (
          <Link href={`/paciente/${cell.row.original.id}`}>
            <div className="text-blue/05 font-bold">{cell.getValue()}</div>
          </Link>
        )
      },
      { accessorKey: 'motherName', header: 'NOME DA MÃE' },
      {
        accessorKey: 'birthDate',
        header: 'IDADE',
        cell: ({ cell }: any) => {
          return calcularIdade(cell.getValue());
        }
      },
      {
        accessorKey: 'services',
        id: 'horarioDeEntrada',
        header: 'HORÁRIO DE ENTRADA',
        cell: ({ cell }: any) => {
          return new Date(cell.getValue()[0].serviceDate).toLocaleTimeString(
            'pt-BR',
            {
              hour: '2-digit',
              minute: '2-digit'
            }
          );
        }
      },
      {
        accessorKey: 'services',
        id: 'classificacao',
        header: 'CLASSIFICAÇÃO',
        cell: ({ cell }: any) => {
          const value =
            cell.getValue()[0].medicalRecord.anamnese?.classificationStatus;
          return (
            <div
              className={`w-4 h-4 rounded-full ${classificationColors[value]}`}
              title={ConvertClassificationStatus(value)}
            />
          );
        }
      },
      {
        accessorKey: 'services',
        id: 'status',
        header: 'STATUS',
        cell: ({ cell }: any) => {
          if (cell.getValue()[0].medicalRecord.statusInCaseOfAdmission) {
            return (
              <span className="bg-blue/05 text-white px-2 py-1 rounded-xl">
                {cell.getValue()}
              </span>
            );
          } else {
            return '';
          }
        }
      }
    ],
    []
  );

  return (
    <div className="p-4">
      <CustomTable
        columns={columns}
        data={dataBack?.data.data || []}
        loading={isLoading}
        itemsPerPageOptions={[10, 20, 30]}
        showClassificationFilter={false}
        showStatusFilter
        customButton={{
          isActive: true,
          name: (
            <div className="flex items-center gap-2">
              <FaPlus /> NOVO ATENDIMENTO
            </div>
          ),
          link: '/atendimentos/listaAtendimentos'
        }}
      />
    </div>
  );
}
