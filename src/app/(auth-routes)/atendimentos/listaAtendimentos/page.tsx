import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NovoAtendimento() {
  return (
    <div className="flex justify-between">
      <h1>Novo Atendimento =)</h1>
      <Button asChild>
        <Link href={'/atendimentos/listaAtendimentos/novoPaciente'}>
          Novo paciente
        </Link>
      </Button>
    </div>

    //
  );
}
