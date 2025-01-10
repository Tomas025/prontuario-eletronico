'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';

import { CustomTable } from '@/components/CustomTable';

type RowData = {
  id: number;
  paciente: string;
  horario: string;
  idade: string;
  status: string;
  classificacao: string;
};

export default function Enfermagem() {
  // Mock data para a tabela
  const data: RowData[] = [
    {
      id: 1,
      paciente: 'Lucas Silva',
      horario: '08:00',
      idade: '30 anos',
      status: 'Internação',
      classificacao: 'Emergência'
    },
    {
      id: 2,
      paciente: 'Ana Costa',
      horario: '08:15',
      idade: '45 anos',
      status: 'Internação',
      classificacao: 'Muito Urgentes'
    },
    {
      id: 3,
      paciente: 'Carlos Almeida',
      horario: '08:30',
      idade: '29 anos',
      status: 'Alta',
      classificacao: 'Urgência'
    },
    {
      id: 4,
      paciente: 'Juliana Oliveira',
      horario: '08:45',
      idade: '22 anos',
      status: 'Internação',
      classificacao: 'Menos Graves'
    },
    {
      id: 5,
      paciente: 'Gabriela Santos',
      horario: '09:00',
      idade: '37 anos',
      status: 'Alta',
      classificacao: 'Leves'
    },
    {
      id: 6,
      paciente: 'Marcos Pereira',
      horario: '09:15',
      idade: '40 anos',
      status: 'Internação',
      classificacao: 'Emergência'
    },
    {
      id: 7,
      paciente: 'Patrícia Ribeiro',
      horario: '09:30',
      idade: '28 anos',
      status: 'Internação',
      classificacao: 'Muito Urgentes'
    },
    {
      id: 8,
      paciente: 'Ricardo Lima',
      horario: '09:45',
      idade: '31 anos',
      status: 'Alta',
      classificacao: 'Urgência'
    },
    {
      id: 9,
      paciente: 'Fernanda Almeida',
      horario: '10:00',
      idade: '39 anos',
      status: 'Internação',
      classificacao: 'Menos Graves'
    },
    {
      id: 10,
      paciente: 'Eduardo Rocha',
      horario: '10:15',
      idade: '33 anos',
      status: 'Internação',
      classificacao: 'Leves'
    },
    {
      id: 11,
      paciente: 'Aline Santos',
      horario: '10:30',
      idade: '42 anos',
      status: 'Internação',
      classificacao: 'Emergência'
    },
    {
      id: 12,
      paciente: 'Tiago Costa',
      horario: '10:45',
      idade: '50 anos',
      status: 'Alta',
      classificacao: 'Muito Urgentes'
    },
    {
      id: 13,
      paciente: 'Mariana Martins',
      horario: '11:00',
      idade: '27 anos',
      status: 'Internação',
      classificacao: 'Urgência'
    },
    {
      id: 14,
      paciente: 'Ricardo Souza',
      horario: '11:15',
      idade: '25 anos',
      status: 'Internação',
      classificacao: 'Menos Graves'
    },
    {
      id: 15,
      paciente: 'Clara Gomes',
      horario: '11:30',
      idade: '34 anos',
      status: 'Alta',
      classificacao: 'Leves'
    },
    {
      id: 16,
      paciente: 'Bruna Rocha',
      horario: '11:45',
      idade: '48 anos',
      status: 'Internação',
      classificacao: 'Emergência'
    },
    {
      id: 17,
      paciente: 'Daniela Pereira',
      horario: '12:00',
      idade: '38 anos',
      status: 'Internação',
      classificacao: 'Muito Urgentes'
    },
    {
      id: 18,
      paciente: 'Felipe Oliveira',
      horario: '12:15',
      idade: '41 anos',
      status: 'Alta',
      classificacao: 'Urgência'
    },
    {
      id: 19,
      paciente: 'Sofia Lima',
      horario: '12:30',
      idade: '26 anos',
      status: 'Internação',
      classificacao: 'Menos Graves'
    },
    {
      id: 20,
      paciente: 'Vitor Costa',
      horario: '12:45',
      idade: '29 anos',
      status: 'Internação',
      classificacao: 'Leves'
    }
  ];

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
            href={`/enfermagem/${row.original.id}`}
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
