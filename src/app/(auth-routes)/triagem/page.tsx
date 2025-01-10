'use client';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import { CustomTable } from '@/components/CustomTable';

type RowData = {
  id: number;
  paciente: string;
  horario: string;
};

type Column = {
  key: string;
  label: string;
  render?: (row: RowData) => React.ReactNode;
};

export default function Triagem() {
  const [searchQuery, setSearchQuery] = useState<string>('');

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
  const columns: Column[] = [
    { key: 'paciente', label: 'PACIENTE' },
    { key: 'horario', label: 'HORÁRIO DE ENTRADA' },
    {
      key: 'acao',
      label: '',
      render: (row: RowData) => (
        <button
          onClick={() => handleIniciarTriagem(row.id)}
          className="bg-blue/02 text-white px-4 py-2 rounded-md hover:bg-blue/04"
        >
          INICIAR TRIAGEM
        </button>
      )
    }
  ];

  const handleIniciarTriagem = (id: number): void => {
    alert(`Iniciando triagem para o paciente com ID: ${id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Triagem</h1>

      {/* Barra de pesquisa com ícone */}
      <div className="mb-4 relative">
        <IoIosSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 size-6 text-blue/06" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Pesquise paciente, status, data..."
          className="p-2 pl-10 border border-blue/07 bg-gray/04 rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue/07 placeholder-gray/01"
        />
      </div>

      {/* Tabela personalizada */}
      <CustomTable
        columns={columns}
        data={data}
        searchQuery={searchQuery}
        pagination={false}
      />
    </div>
  );
}
