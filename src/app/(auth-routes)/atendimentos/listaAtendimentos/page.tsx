'use client';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';

import { BreadCrumb } from '@/components/BreadCrumb';
import { CustomTable } from '@/components/CustomTable';

export default function NovoAtendimento() {
  const breadcrumbLinks = [
    { label: 'Atendimento', route: '/atendimentos' },
    { label: 'Novo Atendimento', route: '/atendimentos/listaAtendimentos' }
  ];

  const data = [
    {
      id: 1,
      paciente: 'Lucas Silva',
      cpf: '123.456.789-01',
      sus: '46743674',
      nomeMae: 'Maria Silva',
      endereco: 'Rua das Flores, 123, Centro, Belo Horizonte'
    },
    {
      id: 2,
      paciente: 'Ana Costa',
      cpf: '123.456.789-02',
      sus: '46743675',
      nomeMae: 'Joana Costa',
      endereco: 'Avenida Paulista, 1000, São Paulo'
    },
    {
      id: 3,
      paciente: 'Carlos Almeida',
      cpf: '123.456.789-03',
      sus: '46743676',
      nomeMae: 'Sofia Almeida',
      endereco: 'Rua Rio Branco, 45, Recife'
    },
    {
      id: 4,
      paciente: 'Juliana Oliveira',
      cpf: '123.456.789-04',
      sus: '46743677',
      nomeMae: 'Fernanda Oliveira',
      endereco: 'Praça da Liberdade, 12, Belo Horizonte'
    },
    {
      id: 5,
      paciente: 'Gabriela Santos',
      cpf: '123.456.789-05',
      sus: '46743678',
      nomeMae: 'Clara Santos',
      endereco: 'Rua do Sol, 88, Salvador'
    },
    {
      id: 6,
      paciente: 'Marcos Pereira',
      cpf: '123.456.789-06',
      sus: '46743679',
      nomeMae: 'Patrícia Pereira',
      endereco: 'Avenida Atlântica, 500, Rio de Janeiro'
    },
    {
      id: 7,
      paciente: 'Patrícia Ribeiro',
      cpf: '123.456.789-07',
      sus: '46743680',
      nomeMae: 'Laura Ribeiro',
      endereco: 'Rua XV de Novembro, 200, Curitiba'
    },
    {
      id: 8,
      paciente: 'Ricardo Lima',
      cpf: '123.456.789-08',
      sus: '46743681',
      nomeMae: 'Bianca Lima',
      endereco: 'Rua das Palmeiras, 55, Florianópolis'
    },
    {
      id: 9,
      paciente: 'Fernanda Almeida',
      cpf: '123.456.789-09',
      sus: '46743682',
      nomeMae: 'Luiza Almeida',
      endereco: 'Rua da Aurora, 77, Recife'
    },
    {
      id: 10,
      paciente: 'Eduardo Rocha',
      cpf: '123.456.789-10',
      sus: '46743683',
      nomeMae: 'Carla Rocha',
      endereco: 'Rua do Comércio, 100, São Paulo'
    },
    {
      id: 11,
      paciente: 'Aline Santos',
      cpf: '123.456.789-11',
      sus: '46743684',
      nomeMae: 'Luciana Santos',
      endereco: 'Rua das Nações, 120, Brasília'
    },
    {
      id: 12,
      paciente: 'Tiago Costa',
      cpf: '123.456.789-12',
      sus: '46743685',
      nomeMae: 'Isabela Costa',
      endereco: 'Rua da República, 150, Porto Alegre'
    },
    {
      id: 13,
      paciente: 'Mariana Martins',
      cpf: '123.456.789-13',
      sus: '46743686',
      nomeMae: 'Helena Martins',
      endereco: 'Avenida Brasil, 300, Salvador'
    },
    {
      id: 14,
      paciente: 'Ricardo Souza',
      cpf: '123.456.789-14',
      sus: '46743687',
      nomeMae: 'Mariana Souza',
      endereco: 'Rua Sete de Setembro, 70, Curitiba'
    },
    {
      id: 15,
      paciente: 'Clara Gomes',
      cpf: '123.456.789-15',
      sus: '46743688',
      nomeMae: 'Beatriz Gomes',
      endereco: 'Rua do Ouro, 35, Belo Horizonte'
    },
    {
      id: 16,
      paciente: 'Bruna Rocha',
      cpf: '123.456.789-16',
      sus: '46743689',
      nomeMae: 'Ana Rocha',
      endereco: 'Rua do Forte, 60, Recife'
    },
    {
      id: 17,
      paciente: 'Daniela Pereira',
      cpf: '123.456.789-17',
      sus: '46743690',
      nomeMae: 'Gabriela Pereira',
      endereco: 'Rua do Arpoador, 40, Rio de Janeiro'
    },
    {
      id: 18,
      paciente: 'Felipe Oliveira',
      cpf: '123.456.789-18',
      sus: '46743691',
      nomeMae: 'Juliana Oliveira',
      endereco: 'Rua dos Andradas, 25, Porto Alegre'
    },
    {
      id: 19,
      paciente: 'Sofia Lima',
      cpf: '123.456.789-19',
      sus: '46743692',
      nomeMae: 'Letícia Lima',
      endereco: 'Rua das Hortências, 75, Florianópolis'
    },
    {
      id: 20,
      paciente: 'Vitor Costa',
      cpf: '123.456.789-20',
      sus: '46743693',
      nomeMae: 'Larissa Costa',
      endereco: 'Avenida dos Pioneiros, 90, Brasília'
    }
  ];

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
      { accessorKey: 'cpf', header: 'CPF' },
      { accessorKey: 'sus', header: 'SUS' },
      { accessorKey: 'nomeMae', header: 'NOME DA MÃE' },
      { accessorKey: 'endereco', header: 'ENDEREÇO' },
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
            TRIAGEM
          </Link>
        )
      }
    ],
    []
  );

  return (
    <div className="pt-1 px-4">
      <div className="pb-4">
        <BreadCrumb linkList={breadcrumbLinks} />
      </div>

      <CustomTable
        columns={columns}
        data={data}
        itemsPerPageOptions={[10, 20, 30]}
        customButton={{
          isActive: true,
          name: (
            <div className="flex items-center gap-2">
              <FaPlus /> NOVO PACIENTE
            </div>
          ),
          link: '/atendimentos/listaAtendimentos/novoPaciente'
        }}
      />
    </div>

    //
  );
}
