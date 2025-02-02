'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { CustomTable } from '@/components/CustomTable';

import { GetPatientFilter } from '@/services/PatientService';
import { useQuery } from '@tanstack/react-query';

type RowData = {
  id: number;
  paciente: string;
  horario: string;
  idade: string;
  status: string;
  classificacao: string;
};

export default function AtendimentoMedico() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'MEDICAL_CARE'],
    queryFn: () => GetPatientFilter(null, 'MEDICAL_CARE'),
    staleTime: 1 * 60 * 1000
  });

  // Mock data para a tabela
  const data: RowData[] = [];

  // Mapeamento de cores para as classificações
  const classificationColors: Record<string, string> = {
    Emergência: 'bg-red/01',
    'Muito Urgentes': 'bg-orange',
    Urgência: 'bg-yellow',
    'Menos Graves': 'bg-green/01',
    Leves: 'bg-otherBlue'
  };

  // Definição das colunas
  const columns = useMemo(
    () => [
      {
        accessorKey: 'paciente',
        header: 'PACIENTE',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell: ({ cell }: any) => (
          <Link href={`/paciente/${cell.row.original.id}`}>
            <div className="text-blue/05 font-bold">{cell.getValue()}</div>
          </Link>
        )
      },
      { accessorKey: 'horario', header: 'HORÁRIO DE ENTRADA' },
      { accessorKey: 'idade', header: 'IDADE' },
      {
        accessorKey: 'status',
        header: 'STATUS',
        // Renderiza um badge para o status
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell: ({ cell }: any) => (
          <span className="bg-blue/05 text-white px-2 py-1 rounded-xl">
            {cell.getValue()}
          </span>
        )
      },
      {
        accessorKey: 'classificacao',
        header: 'CLASSIFICAÇÃO',
        // Renderiza uma cor associada à classificação
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell: ({ cell }: any) => {
          const value = cell.getValue() as string;
          return (
            <div
              className={`w-4 h-4 rounded-full ${classificationColors[value]}`}
              title={value}
            />
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
            href={`/atendimentoMedico/${row.original.id}`}
            className="bg-blue/02 text-white px-4 py-2 rounded-md hover:bg-blue/04"
          >
            INICIAR ATENDIMENTO
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
        data={data}
        itemsPerPageOptions={[10, 20, 30]}
        showClassificationFilter // Ativa o filtro de classificação
      />
    </div>
  );
}
