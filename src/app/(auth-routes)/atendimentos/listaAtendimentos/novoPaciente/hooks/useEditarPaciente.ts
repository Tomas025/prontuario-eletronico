'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Simulação de uma API para buscar os dados do paciente
async function fetchPacienteById(id: string) {
  // Substitua isso com uma chamada para sua API real
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        nomeCompleto: 'Maria Silva Nogueira',
        nomeSocial: 'Maria',
        dataNascimento: '2004-03-09',
        sus: '123456789012345',
        cpf: '12345678910',
        telefone: '81999999999',
        rg: '578348949',
        cep: '55000000',
        cidade: 'Belo Jardim',
        bairro: 'São Pedro',
        rua: 'Rua Primeiro de Janeiro',
        numero: '133',
        nomeMae: 'Eduarda Silva Nogueira'
      });
    }, 50); // Simula um atraso de 50ms
  });
}

export function useEditarPaciente() {
  const [dadosPaciente, setDadosPaciente] = useState<Record<string, string>>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setLoading(true);
      fetchPacienteById(id).then((data) => {
        setDadosPaciente(data as Record<string, string>);
        setLoading(false);
      });
    }
  }, [searchParams]);

  return { dadosPaciente, loading };
}
