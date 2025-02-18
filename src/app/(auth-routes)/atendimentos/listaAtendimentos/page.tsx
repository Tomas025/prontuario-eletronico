/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { toast } from 'react-toastify';

import { BreadCrumb } from '@/components/BreadCrumb';
import { CustomTable } from '@/components/CustomTable';

import { GetPatientFilter } from '@/services/PatientService';
import { initService } from '@/services/ServiceService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export default function NovoAtendimento() {
  const breadcrumbLinks = [
    { label: 'Atendimento', route: '/atendimentos' },
    { label: 'Novo Atendimento', route: '/atendimentos/listaAtendimentos' }
  ];

  const { data: dataBack, isLoading } = useQuery({
    queryKey: ['Patient', 'NO_SERVICE'],
    queryFn: () => GetPatientFilter('NO_SERVICE'),
    staleTime: 1 * 60 * 1000
  });

  const queryClient = useQueryClient();

  const postInitServiceMutation = useMutation({
    mutationFn: (data: number) => initService(data),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['Patient', 'NO_SERVICE'],
        exact: true
      });
      await queryClient.refetchQueries({
        queryKey: ['Patient', 'SCREENING'],
        exact: true
      });
    }
  });

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
      { accessorKey: 'cpf', header: 'CPF' },
      { accessorKey: 'sus', header: 'SUS' },
      { accessorKey: 'motherName', header: 'NOME DA MÃE' },
      {
        accessorKey: 'address',
        header: 'ENDEREÇO',
        cell: ({ cell }: any) => {
          return `${cell.getValue().street}, ${cell.getValue().neighborhood}, ${cell.getValue().number}, ${cell.getValue().city}`;
        }
      },
      {
        accessorKey: 'acao',
        id: 'acao',
        header: '',
        cell: ({ row }: any) => (
          <button
            // href={`/triagem/${row.original.id}`}
            className="bg-blue/02 text-white px-4 py-2 rounded-md hover:bg-blue/04"
            onClick={async () => {
              const response = await postInitServiceMutation.mutateAsync(
                row.original.id
              );
              if (response.status == 200) {
                toast.success('Paciente encaminhado para triagem');
              } else {
                toast.error('Erro ao encaminhar paciente');
              }
            }}
          >
            TRIAGEM
          </button>
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
        data={dataBack?.data.data || []}
        loading={isLoading}
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
