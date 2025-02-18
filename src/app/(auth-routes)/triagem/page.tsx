/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { CustomTable } from '@/components/CustomTable';

import { GetPatientFilter } from '@/services/PatientService';
import { useQuery } from '@tanstack/react-query';

export default function Triagem() {
  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'SCREENING'],
    queryFn: () => GetPatientFilter('SCREENING'),
    staleTime: 1 * 60 * 1000
  });

  // Definição das colunas
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
      {
        accessorKey: 'services',
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
        accessorKey: 'acao',
        id: 'acao',
        header: '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell: ({ row }: any) => (
          <Link
            href={`/triagem/${row.original.services[0].id}`}
            className="bg-blue/02 text-white px-4 py-2 rounded-md hover:bg-blue/04"
          >
            INICIAR TRIAGEM
          </Link>
        )
      }
    ],
    []
  );

  return (
    <div className="p-4">
      {/* Tabela personalizada */}
      <CustomTable
        columns={columns}
        data={dataBack?.data.data || []}
        loading={isLoading}
        itemsPerPageOptions={[10, 20, 30]}
      />
    </div>
  );
}
