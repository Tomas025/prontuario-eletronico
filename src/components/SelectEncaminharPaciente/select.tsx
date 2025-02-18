import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select';

import { X } from 'lucide-react';

type EncaminharPacienteProps = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar o status
  serviceStatus: string;
  setServiceStatus: React.Dispatch<React.SetStateAction<string>>; // Função para atualizar o serviceStatus
};

export default function EncaminharPaciente({
  status,
  setStatus,
  serviceStatus,
  setServiceStatus
}: EncaminharPacienteProps) {
  return (
    <div className="flex flex-row gap-4 items-center">
      {/* Select principal */}
      <div className="relative">
        <Select onValueChange={setStatus} value={status}>
          <SelectTrigger
            className={`bg-otherBlue text-white ${status && 'pr-6'}`}
          >
            <SelectValue placeholder="ENCAMINHAR PACIENTE" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MEDICAL_CARE">Atendimento Médico</SelectItem>
            <SelectItem value="NURSING">Enfermagem</SelectItem>
            <SelectItem value="ADMISSION">Internação</SelectItem>
            <SelectItem value="MEDICAL_DISCHARGE">Alta</SelectItem>
          </SelectContent>
        </Select>
        {status && (
          <button
            className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-transparent text-white"
            onClick={() => setStatus('')}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Select secundário para o tipo de alta */}
      {status === 'MEDICAL_DISCHARGE' && (
        <div className="relative">
          <Select onValueChange={setServiceStatus} value={serviceStatus}>
            <SelectTrigger
              className={`bg-otherBlue text-white ${serviceStatus && 'pr-6'}`}
            >
              <SelectValue placeholder="Tipo de Alta" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="RESIDENCE">Residência</SelectItem>
              <SelectItem value="ON_REQUEST">A pedido</SelectItem>
              <SelectItem value="DEATH">Óbito</SelectItem>
            </SelectContent>
          </Select>
          {serviceStatus && (
            <button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-transparent text-white"
              onClick={() => setServiceStatus('')}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Campo de texto para destino da transferência */}
      {serviceStatus === 'TRANSFERÊNCIA' && status === 'MEDICAL_DISCHARGE' && (
        <Input
          className="w-auto"
          placeholder="Informe o destino"
          // Adicione lógica para capturar o valor do destino
        />
      )}
    </div>
  );
}
