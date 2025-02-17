/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useMemo } from 'react';

import { CustomTable } from '@/components/CustomTable';

import { GetPatientFilter } from '@/services/PatientService';
import { isMultidisciplinary } from '@/utils/ConvertEnums';
import { useQuery } from '@tanstack/react-query';

export default function EquipeMultiprofissional() {
  const session = useSession();
  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'IN_SERVICE'],
    queryFn: () => GetPatientFilter('IN_SERVICE'),
    staleTime: 1 * 60 * 1000
  });

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
      { accessorKey: 'idade', header: 'IDADE' },
      {
        accessorKey: 'status',
        header: 'STATUS',
        // Renderiza um badge para o status
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
        cell: ({ row }: any) => (
          <Link
            href={`/equipeMultiprofissional/${row.original.id}`}
            className="bg-blue/02 text-white px-4 py-2 rounded-md hover:bg-blue/04"
          >
            {isMultidisciplinary(session.data?.user.position as string)
              ? 'REALIZAR ANOTAÇÃO'
              : 'VER ANOTAÇÕES'}
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
        showClassificationFilter // Ativa o filtro de classificação
      />
    </div>
  );
}
