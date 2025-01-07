import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Atendimentos() {
  return (
    <div className="flex justify-between">
      <h1>Tela de Exemplo =)</h1>
      <Button asChild>
        <Link href={'/atendimentos/listaAtendimentos'}>Novo atendimento</Link>
      </Button>
    </div>
  );
}
