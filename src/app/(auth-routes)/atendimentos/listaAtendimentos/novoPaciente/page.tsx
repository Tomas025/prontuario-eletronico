'use client';
import { BreadCrumb } from '@/components/BreadCrumb';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useNovoPaciente } from './hooks/useNovoPaciente';

export default function NovoPaciente() {
  const { form, submitForm } = useNovoPaciente();

  const linkList = [
    { label: 'Atendimentos', route: '/atendimentos' },
    {
      label: 'Novo Atendimento',
      route: '/atendimentos/listaAtendimentos'
    },
    {
      label: 'Novo paciente',
      route: '/atendimentos/listaAtendimentos/novoPaciente'
    }
  ];

  return (
    <section className="flex flex-col gap-6">
      <section className="flex justify-between">
        <BreadCrumb linkList={linkList} />
        <div className="flex gap-4">
          <Button>Cancelar</Button>
          <Button>Salvar</Button>
        </div>
      </section>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col gap-2"
        >
          {/* Dados Pessoais */}
          <h1 className="text-xl font-bold text-blue/03">Dados Pessoais</h1>
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="nomeCompleto"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 min-w-80 label">
                      <Label htmlFor="nomeCompleto">
                        Nome completo<span className="text-red/01">*</span>
                      </Label>
                      <Input
                        id="nomeCompleto"
                        type="text"
                        {...field}
                        className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nomeSocial"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 min-w-80 label">
                      <Label htmlFor="nomeSocial">Nome social</Label>
                      <Input
                        id="nomeSocial"
                        type="text"
                        {...field}
                        className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dataNascimento"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 label">
                      <Label htmlFor="dataNascimento">Data de nascimento</Label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        {...field}
                        className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dataNascimento"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 label">
                      <Label htmlFor="dataNascimento">SUS</Label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        {...field}
                        className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* 
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="dataNascimento">Data de nascimento</Label>
              <Input type="date" id="dataNascimento" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="sus">SUS</Label>
              <Input type="number" id="sus" />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="grid w-full items-center gap-1.5 max-w-80">
              <Label htmlFor="rg">RG</Label>
              <Input type="number" id="rg" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="cpf">CPF</Label>
              <Input type="number" id="cpf" />
            </div>
            <div className="grid w-full items-center gap-1.5 max-w-80">
              <Label htmlFor="telefone">Telefone</Label>
              <Input type="tel" id="telefone" />
            </div>
            <div className="grid w-full items-center gap-1.5 min-w-80">
              <Label htmlFor="nomeMae">Nome da mãe</Label>
              <Input type="text" id="nomeMae" />
            </div>
          </div>
          {/* Endereço */}
            {/* <h1 className="text-xl font-bold text-blue/03">Endereço</h1>
          <div className="flex gap-5">
            <div className="grid w-full items-center gap-1.5 min-w-80">
              <Label htmlFor="cep">CEP</Label>
              <Input type="number" id="cep" />
            </div>
            <div className="grid w-full items-center gap-1.5 min-w-80">
              <Label htmlFor="cep">CEP</Label>
              <Input type="number" id="cep" />
            </div> */}
          </div>
        </form>
      </Form>
    </section>
  );
}
