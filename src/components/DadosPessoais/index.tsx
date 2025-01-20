import React from 'react';

interface ContatoEmergencia {
  tipo: string;
  telefone: string;
}

interface DadosPessoaisProps {
  nomeCompleto: string;
  nomeSocial: string;
  sus: string;
  cpf: string;
  idade: number | string; // Permite string para mais flexibilidade
  nascimento: string;
  sexo: string;
  rg: string;
  telefone: string;
  endereco: string;
  contatosEmergencia: ContatoEmergencia[];
  nomeMae: string;
}

export const DadosPessoais = ({
  data,
  onEdit
}: {
  data: DadosPessoaisProps;
  onEdit: () => void;
}) => {
  // Função para formatar contatos de emergência como string
  const formatarContatosEmergencia = (contatos: ContatoEmergencia[]) => {
    return contatos
      .map((contato) => `${contato.tipo}: ${contato.telefone}`)
      .join(',');
  };

  // Função para gerar as colunas de dados
  const gerarColunas = () => {
    return [
      [
        { label: 'Nome', value: data.nomeCompleto },
        { label: 'Nome Social', value: data.nomeSocial },
        { label: 'SUS', value: data.sus },
        { label: 'CPF', value: data.cpf }
      ],
      [
        { label: 'Idade', value: data.idade },
        { label: 'Data de Nascimento', value: data.nascimento },
        { label: 'Sexo', value: data.sexo },
        { label: 'RG', value: data.rg }
      ],
      [
        { label: 'Telefone', value: data.telefone },
        { label: 'Endereço', value: data.endereco },
        {
          label: 'Contato de emergência',
          value: formatarContatosEmergencia(data.contatosEmergencia)
        },
        { label: 'Nome da Mãe', value: data.nomeMae }
      ]
    ];
  };

  // Gerar colunas uma vez
  const colunas = gerarColunas();

  return (
    <section className="p-6 border border-blue/06 rounded-md">
      <div className="flex justify-between items-center pb-4 border-b border-blue/06 mb-4">
        <h2 className="text-lg font-semibold text-blue/04">Dados pessoais</h2>
        <button onClick={onEdit} className="flex items-center">
          <svg
            width="86"
            height="28"
            viewBox="0 0 86 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="86"
              height="28"
              rx="5"
              fill="#304A6F" // Cor padrão
              onMouseEnter={(e) => (e.currentTarget.style.fill = '#162F52')} // Cor no hover
              onMouseLeave={(e) => (e.currentTarget.style.fill = '#304A6F')} // Cor original
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.9268 7.57942L25.4207 8.07343C25.6312 8.28378 25.7497 8.56916 25.7499 8.86683V9.43568C25.7537 9.73853 25.6349 10.03 25.4207 10.244L24.0363 11.6063C23.9661 11.6772 23.8705 11.717 23.7707 11.717C23.6709 11.717 23.5753 11.6772 23.5051 11.6063L21.4024 9.4731C21.2598 9.32758 21.2598 9.09468 21.4024 8.94916L22.7568 7.57942C22.9707 7.3651 23.2622 7.24634 23.5649 7.25009H24.1336C24.4312 7.25035 24.7165 7.36881 24.9268 7.57942ZM22.6146 13.0135C22.7572 12.8679 22.7572 12.635 22.6146 12.4895L20.4745 10.3788C20.4043 10.3079 20.3086 10.2681 20.2089 10.2681C20.1091 10.2681 20.0135 10.3079 19.9432 10.3788L13.9046 16.4191C13.7586 16.5638 13.6439 16.7371 13.5678 16.9281L12.2808 20.1765C12.2079 20.3451 12.2681 20.5418 12.423 20.6406C12.529 20.7465 12.688 20.7789 12.827 20.7229L16.0746 19.4056C16.2655 19.3294 16.4387 19.2148 16.5834 19.0688L22.6146 13.0135Z"
              fill="#F7FAFF"
            />
            <path
              d="M33.9588 18V9.27273H39.4304V10.4062H35.2756V13.0653H39.1449V14.1946H35.2756V16.8665H39.4815V18H33.9588ZM44.0146 18H41.1893V9.27273H44.104C44.9592 9.27273 45.6935 9.44744 46.3072 9.79688C46.9208 10.1435 47.391 10.642 47.7177 11.2926C48.0472 11.9403 48.212 12.7173 48.212 13.6236C48.212 14.5327 48.0458 15.3139 47.7134 15.9673C47.3839 16.6207 46.9066 17.1236 46.2816 17.4759C45.6566 17.8253 44.9009 18 44.0146 18ZM42.506 16.8494H43.9421C44.6069 16.8494 45.1594 16.7244 45.5998 16.4744C46.0401 16.2216 46.3697 15.8565 46.5884 15.3793C46.8072 14.8991 46.9165 14.3139 46.9165 13.6236C46.9165 12.9389 46.8072 12.358 46.5884 11.8807C46.3725 11.4034 46.0501 11.0412 45.6211 10.794C45.1921 10.5469 44.6594 10.4233 44.0231 10.4233H42.506V16.8494ZM51.1662 9.27273V18H49.8494V9.27273H51.1662ZM52.6534 10.4062V9.27273H59.4077V10.4062H56.6847V18H55.3722V10.4062H52.6534ZM60.6062 18H59.2085L62.3491 9.27273H63.8704L67.011 18H65.6133L63.146 10.858H63.0778L60.6062 18ZM60.8406 14.5824H65.3746V15.6903H60.8406V14.5824ZM68.2713 18V9.27273H71.3821C72.0582 9.27273 72.6193 9.3892 73.0653 9.62216C73.5142 9.85511 73.8494 10.1776 74.071 10.5895C74.2926 10.9986 74.4034 11.4716 74.4034 12.0085C74.4034 12.5426 74.2912 13.0128 74.0668 13.419C73.8452 13.8224 73.5099 14.1364 73.0611 14.3608C72.6151 14.5852 72.054 14.6974 71.3778 14.6974H69.0213V13.5639H71.2585C71.6847 13.5639 72.0313 13.5028 72.2983 13.3807C72.5682 13.2585 72.7656 13.081 72.8906 12.848C73.0156 12.6151 73.0781 12.3352 73.0781 12.0085C73.0781 11.679 73.0142 11.3935 72.8864 11.152C72.7614 10.9105 72.5639 10.7259 72.294 10.598C72.027 10.4673 71.6761 10.402 71.2415 10.402H69.5881V18H68.2713ZM72.5795 14.0625L74.7358 18H73.2358L71.1222 14.0625H72.5795Z"
              fill="#F7FAFF"
            />
          </svg>
        </button>
      </div>

      {/* Renderização dinâmica das colunas */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 text-sm text-gray-800">
        {colunas.map((coluna) => (
          <div key={coluna[0].label} className="space-y-2">
            {coluna.map((item) => (
              <p className="text-blue/04" key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
