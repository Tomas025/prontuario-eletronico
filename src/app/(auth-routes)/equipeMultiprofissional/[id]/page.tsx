'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { ListLink } from '@/components/BreadCrumb/types/typesBreadCrumb';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useAnotacao } from './hook/useAnotacao';

const linkList: ListLink[] = [
  { label: 'Equipe Multiprofissional', route: '/equipeMultiprofissional' },
  { label: 'Paciente', route: '/equipeMultiprofissional/[id]' }
];

interface Anotacao {
  id: number;
  texto: string;
  data: string;
  hora: string;
  autor: string;
  cargo: string;
}

// Dados simulados para anotações pré-existentes
const anotacoesExemplo: Anotacao[] = [
  {
    id: 1,
    texto: 'Paciente apresenta melhora em relação a última consulta',
    data: '21/09/2021',
    hora: '15:30',
    autor: 'Maria Silva',
    cargo: 'Enfermeira'
  },
  {
    id: 2,
    texto: 'Paciente apresenta melhora em relação a última consulta',
    data: '21/09/2021',
    hora: '15:30',
    autor: 'Maria Silva',
    cargo: 'Enfermeira'
  },
  {
    id: 3,
    texto:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.',
    data: '21/09/2021',
    hora: '15:30',
    autor: 'Maria Silva',
    cargo: 'Enfermeira'
  }
];

export default function EquipeMultiprofissionalPaciente() {
  const { form, submitForm } = useAnotacao();

  // Estado para armazenar anotações
  const [anotacoes] = useState(anotacoesExemplo);

  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Header */}
      <section className="flex justify-between">
        <BreadCrumb linkList={linkList} />
        <div className="flex gap-4">
          <Button asChild className="bg-red/01 w-full button hover:bg-red/02">
            <Link href={'/equipeMultiprofissional'}>CANCELAR</Link>
          </Button>
          <Button
            className="bg-green/01 w-full button hover:bg-green/02"
            type="submit"
            disabled={form.formState.isSubmitting}
            form="formAnotacao"
          >
            SALVAR ANOTAÇÃO
          </Button>
        </div>
      </section>

      {/* Body */}
      <section className="flex flex-col gap-3">
        {/* Formulário para nova anotação */}
        <section className="flex flex-col gap-3 border border-blue/07 p-3 rounded-[10px]">
          <h1 className="text-xl font-bold text-blue/03">Nova Anotação</h1>
          <div className="border-b border-blue/07" />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(submitForm)}
              className="space-y-4"
              id="formAnotacao"
            >
              <FormField
                name="anotacao"
                control={form.control}
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus:border-blue/06 focus-visible:ring-0 ${
                          fieldState.invalid
                            ? 'border-red/01 bg-red/03'
                            : 'border-blue/07'
                        }`}
                        placeholder="Digite aqui"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </section>

        {/* Cards para cada anotação */}
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-blue/03">
            Anotações anteriores
          </h1>
          {anotacoes.map(({ id, texto, data, hora, autor, cargo }) => (
            <div
              key={id}
              className="grid gap-2 border border-blue/07 p-3 rounded-[10px] bg-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-blue/01">
                  <div className="bg-blue/07 rounded-full p-2">
                    <FiUser className="text-3xl" />
                  </div>
                  <div>
                    <h2 className="subTitle text-lg">{autor}</h2>
                    <p className="text">{cargo}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="subTitle text-base text-blue/03">{data}</p>
                  <p className="subTitle text-base text-blue/03">{hora}</p>
                </div>
              </div>
              <div className="border-b border-blue/07" />
              <p className="text-base text text-blue/01">{texto}</p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
