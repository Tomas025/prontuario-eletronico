'use client';
import Link from 'next/link';

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
          <Button asChild className="bg-red/01 w-full button hover:bg-red/02">
            <Link href={'/atendimentos/listaAtendimentos'}> CANCELAR</Link>
          </Button>
          <Button
            className="bg-green/01 w-full button hover:bg-green/02"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            SALVAR
          </Button>
        </div>
      </section>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          {/* Dados Pessoais */}
          <section className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-blue/03">Dados Pessoais</h1>
            <div className="flex w-full gap-5">
              <FormField
                control={form.control}
                name="nomeCompleto"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 min-w-96 label">
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
                      <div className="grid w-full items-center gap-1.5 min-w-96 label">
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
                        <Label htmlFor="dataNascimento">
                          Data de nascimento
                        </Label>
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
                name="sus"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="sus">SUS</Label>
                        <Input
                          id="sus"
                          type="number"
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
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="cpf">
                          CPF<span className="text-red/01">*</span>
                        </Label>
                        <Input
                          id="cpf"
                          type="number"
                          {...field}
                          className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          <div className="flex w-full gap-5">
            <FormField
              control={form.control}
              name="nomeMae"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 min-w-96 label">
                      <Label htmlFor="nomeMae">Nome da mãe</Label>
                      <Input
                        id="nomeMae"
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
              name="rg"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 label">
                      <Label htmlFor="rg">RG</Label>
                      <Input
                        id="rg"
                        type="number"
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
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="grid w-full items-center gap-1.5 label">
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        {...field}
                        className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Endereço */}
          <section className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-blue/03">Endereço</h1>
            <div className="flex w-full gap-5">
              <FormField
                control={form.control}
                name="cep"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="cep">CEP</Label>
                        <Input
                          id="cep"
                          type="number"
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
                name="cidade"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="cidade">Cidade</Label>
                        <Input
                          id="cidade"
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
                name="bairro"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="bairro">Bairro</Label>
                        <Input
                          id="bairro"
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
                name="rua"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="rua">Rua</Label>
                        <Input
                          id="rua"
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
                name="numero"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="numero">Número</Label>
                        <Input
                          id="numero"
                          type="number"
                          {...field}
                          className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Contato de Emergência */}
          <section className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-blue/03">
              Contato de Emergência
            </h1>
            <div className="flex w-full gap-5">
              <FormField
                control={form.control}
                name="nomeContatoEmergencia"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 min-w-96 label">
                        <Label htmlFor="nomeContatoEmergencia">
                          Nome do contato de emergência
                        </Label>
                        <Input
                          id="nomeContatoEmergencia"
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
                name="parentesco"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="parentesco">Parentesco</Label>
                        <Input
                          id="parentesco"
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
                name="telefoneContatoEmergencia"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid w-full items-center gap-1.5 label">
                        <Label htmlFor="telefoneContatoEmergencia">
                          Telefone de emergência
                        </Label>
                        <Input
                          id="telefoneContatoEmergencia"
                          type="tel"
                          {...field}
                          className="p-[10px] border-2 border-blue/07 rounded-[10px] focus:border-blue/06 focus-visible:ring-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </section>
        </form>
      </Form>
    </section>
  );
}
