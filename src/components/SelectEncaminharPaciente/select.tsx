import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';

export default function EncaminharPaciente() {
  const [encaminhamento, setEncaminhamento] = useState('');
  const [tipoAlta, setTipoAlta] = useState('');
  const [destinoTransferencia, setDestinoTransferencia] = useState('');

  return (
    <div className="flex flex-row gap-4">
      {/* Select principal */}
      <Select onValueChange={setEncaminhamento}>
        <SelectTrigger className="bg-otherBlue text-white button">
          <SelectValue placeholder="ENCAMINHAR PACIENTE" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Enfermagem">Enfermagem</SelectItem>
          <SelectItem value="Atend. Médico">Atend. Médico</SelectItem>
          <SelectItem value="Internação">Internação</SelectItem>
          <SelectItem value="Alta">Alta</SelectItem>
        </SelectContent>
      </Select>

      {/* Select secundário para o tipo de alta */}
      {encaminhamento === 'Alta' && (
        <Select onValueChange={setTipoAlta}>
          <SelectTrigger className="bg-otherBlue text-white button">
            <SelectValue placeholder="Tipo de Alta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Residência">Residência</SelectItem>
            <SelectItem value="A pedido">A pedido</SelectItem>
            <SelectItem value="Transferência">Transferência</SelectItem>
            <SelectItem value="Óbito">Óbito</SelectItem>
          </SelectContent>
        </Select>
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
