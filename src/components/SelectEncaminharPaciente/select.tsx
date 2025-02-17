import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';

import { X } from 'lucide-react';

export default function EncaminharPaciente() {
  const [encaminhamento, setEncaminhamento] = useState('');
  const [tipoAlta, setTipoAlta] = useState('');
  const [destinoTransferencia, setDestinoTransferencia] = useState('');

  return (
    <div className="flex flex-row gap-4 items-center">
      {/* Select principal */}
      <div className="relative">
        <Select onValueChange={setEncaminhamento} value={encaminhamento}>
          <SelectTrigger
            className={`bg-otherBlue text-white ${encaminhamento && 'pr-6'}`}
          >
            <SelectValue placeholder="ENCAMINHAR PACIENTE" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Enfermagem">Enfermagem</SelectItem>
            <SelectItem value="Atend. Médico">Atend. Médico</SelectItem>
            <SelectItem value="Internação">Internação</SelectItem>
            <SelectItem value="Alta">Alta</SelectItem>
          </SelectContent>
        </Select>
        {encaminhamento && (
          <button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-transparent text-white"
            onClick={() => setEncaminhamento('')}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Select secundário para o tipo de alta */}
      {encaminhamento === 'Alta' && (
        <div className="relative">
          <Select onValueChange={setTipoAlta} value={tipoAlta}>
            <SelectTrigger
              className={`bg-otherBlue text-white ${tipoAlta && 'pr-6'}`}
            >
              <SelectValue placeholder="Tipo de Alta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Residência">Residência</SelectItem>
              <SelectItem value="A pedido">A pedido</SelectItem>
              <SelectItem value="Transferência">Transferência</SelectItem>
              <SelectItem value="Óbito">Óbito</SelectItem>
            </SelectContent>
          </Select>
          {tipoAlta && (
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-transparent text-white"
              onClick={() => setTipoAlta('')}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Campo de texto para destino da transferência */}
      {tipoAlta === 'Transferência' && encaminhamento === 'Alta' && (
        <Input
          className="w-auto"
          placeholder="Informe o destino"
          value={destinoTransferencia}
          onChange={(e) => setDestinoTransferencia(e.target.value)}
        />
      )}
    </div>
  );
}
