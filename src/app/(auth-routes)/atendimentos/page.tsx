'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { CustomTable } from '@/components/CustomTable';

import { GetPatientFilter } from '@/services/PatientService';
import { useQuery } from '@tanstack/react-query';

type RowData = {
  id: number;
  paciente: string;
  nomeMae: string;
  idade: string;
  horario: string;
  classificacao: string;
  status: string;
};

export default function Atendimentos() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'IN_SERVICE'],
    queryFn: () => GetPatientFilter('IN_SERVICE'),
    staleTime: 1 * 60 * 1000
  });

  const data: RowData[] = [
    {
      id: 1,
      paciente: 'Lucas Silva',
      nomeMae: 'Maria Silva',
      idade: '36 anos e 2 meses',
      horario: '08:00',
      classificacao: 'Emergência',
      status: 'Alta - Residência'
    },
    {
      id: 2,
      paciente: 'Ana Costa',
      nomeMae: 'Joana Costa',
      idade: '45 anos e 5 meses',
      horario: '08:15',
      classificacao: 'Muito Urgentes',
      status: 'Laboratório'
    },
    {
      id: 3,
      paciente: 'Carlos Almeida',
      nomeMae: 'Sofia Almeida',
      idade: '29 anos e 11 meses',
      horario: '08:30',
      classificacao: 'Urgência',
      status: 'Internação'
    },
    {
      id: 4,
      paciente: 'Juliana Oliveira',
      nomeMae: 'Fernanda Oliveira',
      idade: '22 anos e 3 meses',
      horario: '08:45',
      classificacao: 'Menos Graves',
      status: 'Atend. Médico'
    },
    {
      id: 5,
      paciente: 'Gabriela Santos',
      nomeMae: 'Clara Santos',
      idade: '37 anos e 1 mês',
      horario: '09:00',
      classificacao: 'Leves',
      status: 'Alta - Residência'
    },
    {
      id: 6,
      paciente: 'Marcos Pereira',
      nomeMae: 'Patrícia Pereira',
      idade: '40 anos e 6 meses',
      horario: '09:15',
      classificacao: 'Emergência',
      status: 'Laboratório'
    },
    {
      id: 7,
      paciente: 'Patrícia Ribeiro',
      nomeMae: 'Laura Ribeiro',
      idade: '28 anos e 7 meses',
      horario: '09:30',
      classificacao: 'Muito Urgentes',
      status: 'Internação'
    },
    {
      id: 8,
      paciente: 'Ricardo Lima',
      nomeMae: 'Bianca Lima',
      idade: '31 anos e 4 meses',
      horario: '09:45',
      classificacao: 'Urgência',
      status: 'Atend. Médico'
    },
    {
      id: 9,
      paciente: 'Fernanda Almeida',
      nomeMae: 'Luiza Almeida',
      idade: '39 anos e 9 meses',
      horario: '10:00',
      classificacao: 'Menos Graves',
      status: 'Alta - Residência'
    },
    {
      id: 10,
      paciente: 'Eduardo Rocha',
      nomeMae: 'Carla Rocha',
      idade: '33 anos e 2 meses',
      horario: '10:15',
      classificacao: 'Leves',
      status: 'Laboratório'
    },
    {
      id: 11,
      paciente: 'Aline Santos',
      nomeMae: 'Luciana Santos',
      idade: '42 anos e 8 meses',
      horario: '10:30',
      classificacao: 'Emergência',
      status: 'Internação'
    },
    {
      id: 12,
      paciente: 'Tiago Costa',
      nomeMae: 'Isabela Costa',
      idade: '50 anos e 3 meses',
      horario: '10:45',
      classificacao: 'Muito Urgentes',
      status: 'Atend. Médico'
    },
    {
      id: 13,
      paciente: 'Mariana Martins',
      nomeMae: 'Helena Martins',
      idade: '27 anos e 10 meses',
      horario: '11:00',
      classificacao: 'Urgência',
      status: 'Alta - Residência'
    },
    {
      id: 14,
      paciente: 'Ricardo Souza',
      nomeMae: 'Mariana Souza',
      idade: '25 anos e 6 meses',
      horario: '11:15',
      classificacao: 'Menos Graves',
      status: 'Laboratório'
    },
    {
      id: 15,
      paciente: 'Clara Gomes',
      nomeMae: 'Beatriz Gomes',
      idade: '34 anos e 5 meses',
      horario: '11:30',
      classificacao: 'Leves',
      status: 'Internação'
    },
    {
      id: 16,
      paciente: 'Bruna Rocha',
      nomeMae: 'Ana Rocha',
      idade: '48 anos e 4 meses',
      horario: '11:45',
      classificacao: 'Emergência',
      status: 'Atend. Médico'
    },
    {
      id: 17,
      paciente: 'Daniela Pereira',
      nomeMae: 'Gabriela Pereira',
      idade: '38 anos e 1 mês',
      horario: '12:00',
      classificacao: 'Muito Urgentes',
      status: 'Alta - Residência'
    },
    {
      id: 18,
      paciente: 'Felipe Oliveira',
      nomeMae: 'Juliana Oliveira',
      idade: '41 anos e 7 meses',
      horario: '12:15',
      classificacao: 'Urgência',
      status: 'Laboratório'
    },
    {
      id: 19,
      paciente: 'Sofia Lima',
      nomeMae: 'Letícia Lima',
      idade: '26 anos e 8 meses',
      horario: '12:30',
      classificacao: 'Menos Graves',
      status: 'Internação'
    },
    {
      id: 20,
      paciente: 'Vitor Costa',
      nomeMae: 'Larissa Costa',
      idade: '29 anos e 11 meses',
      horario: '12:45',
      classificacao: 'Leves',
      status: 'Atend. Médico'
    }
  ];

  const classificationColors: Record<string, string> = {
    Emergência: 'bg-red/01',
    'Muito Urgentes': 'bg-orange',
    Urgência: 'bg-yellow',
    'Menos Graves': 'bg-green/01',
    Leves: 'bg-otherBlue'
  };

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
      { accessorKey: 'nomeMae', header: 'NOME DA MÃE' },
      { accessorKey: 'idade', header: 'IDADE' },
      { accessorKey: 'horario', header: 'HORÁRIO DE ENTRADA' },
      {
        accessorKey: 'classificacao',
        header: 'CLASSIFICAÇÃO',
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
        accessorKey: 'status',
        header: 'STATUS',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cell: ({ cell }: any) => (
          <span className="bg-blue/05 text-white px-2 py-1 rounded-xl">
            {cell.getValue()}
          </span>
        )
      }
    ],
    []
  );

  return (
    <div className="p-4">
      <CustomTable
        columns={columns}
        data={data}
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
