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
};

export default function Triagem() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'SCREENING'],
    queryFn: () => GetPatientFilter('SCREENING'),
    staleTime: 1 * 60 * 1000
  });

  // Mock data para a tabela
  const data: RowData[] = [
    { id: 1, paciente: 'Lucas Silva', horario: '14:00' },
    { id: 2, paciente: 'Ana Costa', horario: '15:00' },
    { id: 3, paciente: 'Carlos Almeida', horario: '16:00' },
    { id: 4, paciente: 'Juliana Oliveira', horario: '17:00' },
    { id: 5, paciente: 'Gabriela Santos', horario: '18:00' },
    { id: 6, paciente: 'Marcos Pereira', horario: '19:00' },
    { id: 7, paciente: 'Patrícia Ribeiro', horario: '20:00' },
    { id: 8, paciente: 'Ricardo Lima', horario: '21:00' },
    { id: 9, paciente: 'Fernanda Almeida', horario: '22:00' },
    { id: 10, paciente: 'Eduardo Rocha', horario: '23:00' },
    { id: 11, paciente: 'Aline Santos', horario: '00:00' },
    { id: 12, paciente: 'Tiago Costa', horario: '01:00' },
    { id: 13, paciente: 'Mariana Martins', horario: '02:00' },
    { id: 14, paciente: 'Ricardo Souza', horario: '03:00' },
    { id: 15, paciente: 'Clara Gomes', horario: '04:00' },
    { id: 16, paciente: 'Bruna Rocha', horario: '05:00' },
    { id: 17, paciente: 'Daniela Pereira', horario: '06:00' },
    { id: 18, paciente: 'Felipe Oliveira', horario: '07:00' },
    { id: 19, paciente: 'Sofia Lima', horario: '08:00' },
    { id: 20, paciente: 'Vitor Costa', horario: '09:00' }
  ];

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
      {
        accessorKey: 'acao',
        id: 'acao',
        header: '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell: ({ row }: any) => (
          <Link
            href={`/triagem/${row.original.id}`}
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
        data={data}
        itemsPerPageOptions={[10, 20, 30]}
      />
    </div>
  );
}
