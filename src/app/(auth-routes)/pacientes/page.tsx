'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Para redirecionamento
import { BreadCrumb } from '@/components/BreadCrumb';
import { ListLink } from '@/components/BreadCrumb/types/typesBreadCrumb';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';

// Mock data para os Dados Pessoais e Prontuários
const initialPersonalData = {
  nomeCompleto: 'Maria Silva Nogueira',
  nomeSocial: 'Maria',
  sus: '123456',
  cpf: '123.456.789-10',
  idade: '37 anos e 7 meses',
  nascimento: '09/03/2004',
  sexo: 'Feminino',
  rg: '578348949',
  telefone: '(81) 99999-9999',
  endereco: 'Rua Primeiro de Janeiro, São Pedro, 133, Belo Jardim',
  nomeMae: 'Eduarda Silva Nogueira'
};

const medicalRecords = [
  { id: 1, data: '15/03/2023', horario: '14:00', descricao: 'Consulta Geral', profissional: 'Dr. José Carlos' },
  { id: 2, data: '25/04/2023', horario: '10:00', descricao: 'Retorno de Exames', profissional: 'Dra. Ana Paula' },
  { id: 3, data: '10/05/2023', horario: '09:30', descricao: 'Check-Up', profissional: 'Dr. Lucas Mendes' }
];

// Constante com as opções do menu
const MENU_OPTIONS = [
  { label: 'Dados Pessoais', value: 'dados-pessoais' },
  { label: 'Prontuários', value: 'prontuarios' }
];

const linkList: ListLink[] = [
  { label: 'Atendimentos', route: '/atendimentos' },
  { label: 'Maria Silva', route: '' }
];

export default function Pacientes() {
  const [selectedOption, setSelectedOption] = useState(MENU_OPTIONS[0]);
  const router = useRouter(); // Para redirecionar para outra rota

  const handleEdit = () => {
    const queryParams = new URLSearchParams(initialPersonalData).toString();
    router.push(`/atendimentos/listaAtendimentos/novoPaciente?${queryParams}`);
  };

  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Breadcrumb e Dropdown */}
      <section className="flex justify-between items-center">
        <BreadCrumb linkList={linkList} />

        {/* DropdownMenu Component */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-between px-4 py-2 w-48 border border-gray-300 rounded-md bg-white text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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
                className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Renderização do Conteúdo */}
      {selectedOption.value === 'dados-pessoais' && (
        <section className="p-4 border rounded-md bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Dados Pessoais</h2>
            <button
              className="flex items-center px-3 py-1 border rounded-md text-sm text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleEdit}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L3 14.172V17h2.828L17.414 4.414a2 2 0 000-2.828zM4 16v-1.586L15.172 3.242l1.586 1.586L5.586 16H4z" />
              </svg>
              Editar
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div>
              <p><strong>Nome:</strong> {initialPersonalData.nomeCompleto}</p>
              <p><strong>Nome Social:</strong> {initialPersonalData.nomeSocial}</p>
              <p><strong>SUS:</strong> {initialPersonalData.sus}</p>
              <p><strong>CPF:</strong> {initialPersonalData.cpf}</p>
            </div>
            <div>
              <p><strong>Idade:</strong> {initialPersonalData.idade}</p>
              <p><strong>Data de Nascimento:</strong> {initialPersonalData.nascimento}</p>
              <p><strong>Sexo:</strong> {initialPersonalData.sexo}</p>
              <p><strong>RG:</strong> {initialPersonalData.rg}</p>
            </div>
            <div>
              <p><strong>Telefone:</strong> {initialPersonalData.telefone}</p>
              <p><strong>Endereço:</strong> {initialPersonalData.endereco}</p>
              <p><strong>Nome da Mãe:</strong> {initialPersonalData.nomeMae}</p>
            </div>
          </div>
        </section>
      )}

      {selectedOption.value === 'prontuarios' && (
        <section className="p-4 border rounded-md bg-gray-50">
          <h2 className="text-lg font-semibold mb-4">Prontuários</h2>
          <div className="grid grid-cols-1 gap-4">
            {medicalRecords.map((record) => (
              <div
                key={record.id}
                className="p-4 border rounded-md bg-white shadow-sm hover:shadow-md"
              >
                <p><strong>Data:</strong> {record.data}</p>
                <p><strong>Horário:</strong> {record.horario}</p>
                <p><strong>Descrição:</strong> {record.descricao}</p>
                <p><strong>Profissional:</strong> {record.profissional}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
