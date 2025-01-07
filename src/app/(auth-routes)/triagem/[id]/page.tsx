import BodyTriagem from '@/components/BodyTriagem';
import { HeaderTriagem } from '@/components/HeaderTriagem';

export default function TriagemPaciente() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderTriagem />
      <BodyTriagem />
    </div>
  );
}
