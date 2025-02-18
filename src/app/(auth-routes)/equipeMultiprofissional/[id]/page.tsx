'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
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
import { Textarea } from '@/components/ui/textarea';

import { ConvertPositionEnums } from '@/utils/ConvertEnums';

import { useAnotacao } from './hook/useAnotacao';

const linkList: ListLink[] = [
  { label: 'Equipe Multiprofissional', route: '/equipeMultiprofissional' },
  { label: 'Paciente', route: '/equipeMultiprofissional/[id]' }
];

export default function EquipeMultiprofissionalPaciente() {
  const session = useSession();
  const { form, submitForm, anotacoes } = useAnotacao();

  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Header */}
      <section className="flex justify-between">
        <BreadCrumb linkList={linkList} />
        {/* Adicionar renderização condicional */}
        {(session.data?.user.role === 'INTITUATIONMANAGEMENT' ||
          session.data?.user.role === 'ADMIN') && (
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
        )}
      </section>

      {/* Body */}
      <section className="flex flex-col gap-3">
        {/* Formulário para nova anotação */}
        {(session.data?.user.role === 'INTITUATIONMANAGEMENT' ||
          session.data?.user.role === 'ADMIN') && (
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
                        <Textarea
                          placeholder="Digite aqui"
                          className={`h-auto min-h-[40px] max-h-[200px] p-[10px] border-2 rounded-[10px] bg-gray/04 focus:border-blue/06 focus-visible:ring-0 ${
                            fieldState.invalid
                              ? 'border-red/01 bg-red/03'
                              : 'border-blue/07'
                          }`}
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
        )}

        {/* Cards para cada anotações prévias */}
        <section className="flex flex-col gap-4">
          <h1 className="text-xl font-bold text-blue/03">
            {session.data?.user.role === 'INTITUATIONMANAGEMENT' ||
            session.data?.user.role === 'ADMIN'
              ? 'Anotações anteriores'
              : 'Anotações'}
          </h1>
          {anotacoes?.data.map((anotacao) => (
            <div
              key={anotacao.id}
              className="grid gap-2 border border-blue/07 p-3 rounded-[10px] bg-white"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4 text-blue/01">
                  <div className="bg-blue/07 rounded-full p-2">
                    <FiUser className="text-3xl" />
                  </div>
                  <div>
                    <h2 className="subTitle text-lg">{anotacao.nameUser}</h2>
                    <p className="text">
                      {ConvertPositionEnums(anotacao.positionUser)}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <p className="subTitle text-base text-blue/03">
                    {new Date(anotacao.createdAt).toLocaleDateString('pt-BR')}
                  </p>
                  <p className="subTitle text-base text-blue/03">
                    {new Date(anotacao.createdAt).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
              <div className="border-b border-blue/07" />
              <p className="text-base text text-blue/01">
                {anotacao.description}
              </p>
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}
