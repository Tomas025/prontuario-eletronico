import { useRouter } from 'next/navigation';
import React from 'react';

export const CardProntuario = ({
  pessoaId,
  prontuarioId,
  data,
  sintomas,
  pressao,
  glicose,
  classificacao
}: {
  pessoaId: string;
  prontuarioId: string;
  data: string;
  sintomas: string;
  pressao: string;
  glicose: string;
  classificacao: string;
}) => {
  const router = useRouter();

  const classificationColors: Record<string, string> = {
    Emergência: 'bg-red-500',
    'Muito Urgentes': 'bg-orange-500',
    Urgência: 'bg-yellow-500',
    'Menos Graves': 'bg-green-500',
    Leves: 'bg-blue-500'
  };

  const handleViewMore = () => {
    router.push(`/atendimentoMedico/${pessoaId}/${prontuarioId}`);
  };

  return (
    <div className="p-6 border border-blue/06 rounded-md text-blue/06">
      {/* Header com Data e Classificação */}
      <div className="flex justify-between items-center text-blue/02">
        <h3 className="text-lg font-semibold">
          {data}{' '}
          <span
            className={`ml-2 w-3 h-3 rounded-full inline-block ${classificationColors[classificacao]}`}
          ></span>
        </h3>
        <button
          onClick={handleViewMore}
          className="text-sm font-medium px-2 py-1 rounded-md border border-blue/02 bg-transparent text-blue/02 hover:text-white hover:bg-blue/04 transition-colors"
        >
          Ver mais
        </button>
      </div>
      <div className="border-b border-blue/06 my-2"></div>

      {/* Conteúdo do Card */}
      <div className="mt-2 text-sm text-blue/02">
        <p className="mb-2">
          <strong>Sintomas:</strong> {sintomas}
        </p>
        <p className="flex space-x-9">
          <strong>Pressão:</strong> {pressao}
          <strong>Glicose:</strong> {glicose}
        </p>
      </div>
    </div>
  );
};
