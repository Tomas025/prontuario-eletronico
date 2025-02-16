'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { PiTrashFill } from 'react-icons/pi';

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
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { normalizeCEP, normalizeCPF } from '@/utils/MaskInput';

import { useEditarPaciente } from './hooks/useEditarPaciente';
import { useNovoPaciente } from './hooks/useNovoPaciente';

interface Field {
  name: string;
  label: string;
  required?: boolean;
  type: string;
  options?: string[];
}

const linkList: ListLink[] = [
  { label: 'Atendimentos', route: '/atendimentos' },
  { label: 'Novo Atendimento', route: '/atendimentos/listaAtendimentos' },
  {
    label: 'Novo paciente',
    route: '/atendimentos/listaAtendimentos/novoPaciente'
  }
];

const personalDataFields: Field[] = [
  {
    name: 'nomeCompleto',
    label: 'Nome completo',
    required: true,
    type: 'text'
  },
  { name: 'nomeSocial', label: 'Nome social', type: 'text' },
  { name: 'dataNascimento', label: 'Data de nascimento', type: 'date' },
  { name: 'sus', label: 'SUS', type: 'number' },
  { name: 'cpf', label: 'CPF', required: true, type: 'text' },
  { name: 'rg', label: 'RG', type: 'number' },
  { name: 'telefone', label: 'Telefone', type: 'number' },
  { name: 'nomeMae', label: 'Nome da Mãe', type: 'text' }
];

const addressFields: Field[] = [
  { name: 'cep', label: 'CEP', type: 'text' },
  { name: 'cidade', label: 'Cidade', type: 'text' },
  { name: 'bairro', label: 'Bairro', type: 'text' },
  { name: 'rua', label: 'Rua', type: 'text' },
  { name: 'numero', label: 'Número', type: 'number' }
];

export default function NovoPaciente() {
  const { form, submitForm, emergencyContactFields, append, remove } =
    useNovoPaciente();
  const { dadosPaciente, loading } = useEditarPaciente();

  useEffect(() => {
    if (!loading && dadosPaciente) {
      form.reset(dadosPaciente); // Preenche os valores do formulário
    }
  }, [dadosPaciente, loading, form]);

  const renderFields = (fields: Field[]) =>
    fields.map((field) => (
      <FormField
        key={field.name}
        control={form.control}
        name={
          field.name as
            | 'nomeCompleto'
            | 'nomeSocial'
            | 'dataNascimento'
            | 'sus'
            | 'cpf'
            | 'rg'
            | 'telefone'
            | 'nomeMae'
            | 'cep'
            | 'cidade'
            | 'bairro'
            | 'rua'
            | 'numero'
        }
        render={({ field: controlField, fieldState }) => (
          <FormItem
            className={`min-w-[150px] ${
              field.type === 'date' ? '' : 'flex-grow'
            }`}
          >
            <FormControl>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor={field.name}>
                  {field.label}
                  {field.required && <span className="text-red/01">*</span>}
                </Label>
                {field.type === 'select' && field.options ? (
                  <Select
                    onValueChange={(value) => controlField.onChange(value)}
                    value={controlField.value || ''}
                  >
                    <SelectTrigger
                      className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                        fieldState.invalid
                          ? 'border-red/01 bg-red/03'
                          : 'border-blue/07'
                      }`}
                    >
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {field.options.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                ) : field.name === 'cpf' ? (
                  <Input
                    id={field.name}
                    type={field.type}
                    maxLength={14}
                    {...controlField}
                    onChange={(event) => {
                      const { value } = event.target;
                      event.target.value = normalizeCPF(value);
                      controlField.onChange(event.target.value);
                    }}
                    className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                      fieldState.invalid
                        ? 'border-red/01 bg-red/03'
                        : 'border-blue/07'
                    }`}
                  />
                ) : field.name === 'cep' ? (
                  <Input
                    id={field.name}
                    type={field.type}
                    maxLength={9}
                    {...controlField}
                    onChange={(event) => {
                      const { value } = event.target;
                      event.target.value = normalizeCEP(value);
                      controlField.onChange(event.target.value);
                    }}
                    className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                      fieldState.invalid
                        ? 'border-red/01 bg-red/03'
                        : 'border-blue/07'
                    }`}
                  />
                ) : (
                  <Input
                    id={field.name}
                    type={field.type}
                    {...controlField}
                    className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                      fieldState.invalid
                        ? 'border-red/01 bg-red/03'
                        : 'border-blue/07'
                    }`}
                  />
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ));

  return (
    <section className="flex flex-col gap-6 w-full">
      <section className="flex justify-between">
        <BreadCrumb linkList={linkList} />
        <div className="flex gap-4">
          <Button asChild className="bg-red/01 w-full button hover:bg-red/02">
            <Link href={'/atendimentos/listaAtendimentos'}>CANCELAR</Link>
          </Button>
          <Button
            className="bg-green/01 w-full button hover:bg-green/02"
            type="submit"
            disabled={form.formState.isSubmitting}
            form="formNovoPaciente"
          >
            SALVAR
          </Button>
        </div>
      </section>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitForm)}
          className="flex flex-col gap-5"
          id="formNovoPaciente"
        >
          {/* Dados Pessoais */}
          <section className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-blue/03">Dados Pessoais</h1>
            <div className="flex flex-wrap gap-5">
              {renderFields(personalDataFields)}
            </div>
          </section>

          {/* Endereço */}
          <section className="flex flex-col gap-2">
            <h1 className="text-xl font-bold text-blue/03">Endereço</h1>
            <div className="flex flex-wrap gap-5">
              {renderFields(addressFields)}
            </div>
          </section>

          {/* Contatos de Emergência */}
          <section className="flex flex-col gap-2">
            {emergencyContactFields.length > 0 && (
              <h1 className="text-xl font-bold text-blue/03">
                Contatos de Emergência
              </h1>
            )}
            {emergencyContactFields.map((field, index) => (
              <div key={field.id} className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-5">
                  <FormField
                    control={form.control}
                    name={`emergencyContact.${index}.nomeContatoEmergencia`}
                    render={({ field: controlField, fieldState }) => (
                      <FormItem className={'min-w-[150px] flex-grow'}>
                        <FormControl>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="nomeContatoEmergencia">
                              Nome do contato de emergência
                            </Label>
                            <Input
                              id="nomeContatoEmergencia"
                              type="text"
                              {...controlField}
                              className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                                fieldState.invalid
                                  ? 'border-red/01 bg-red/03'
                                  : 'border-blue/07'
                              }`}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`emergencyContact.${index}.parentesco`}
                    render={({ field: controlField, fieldState }) => (
                      <FormItem className={'min-w-[150px] flex-grow'}>
                        <FormControl>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="parentesco">Parentesco</Label>
                            <Select
                              onValueChange={(value) =>
                                controlField.onChange(value)
                              }
                              value={controlField.value || ''}
                            >
                              <SelectTrigger
                                className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                                  fieldState.invalid
                                    ? 'border-red/01 bg-red/03'
                                    : 'border-blue/07'
                                }`}
                              >
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="FATHER">Pai</SelectItem>
                                  <SelectItem value="MOTHER">Mãe</SelectItem>
                                  <SelectItem value="SIBLING">
                                    Irmão(a)
                                  </SelectItem>
                                  <SelectItem value="SPOUSE">
                                    Esposo(a)
                                  </SelectItem>
                                  <SelectItem value="SON">Filho(a)</SelectItem>
                                  <SelectItem value="OUTHER">Outro</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`emergencyContact.${index}.telefoneContatoEmergencia`}
                    render={({ field: controlField, fieldState }) => (
                      <FormItem className={'min-w-[150px] flex-grow'}>
                        <FormControl>
                          <div className="flex flex-col gap-1.5">
                            <Label htmlFor="telefoneContatoEmergencia">
                              Telefone de emergência
                            </Label>
                            <Input
                              id="telefoneContatoEmergencia"
                              type="tel"
                              {...controlField}
                              className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                                fieldState.invalid
                                  ? 'border-red/01 bg-red/03'
                                  : 'border-blue/07'
                              }`}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {index >= 0 && ( // Excluir apenas contatos adicionais
                    <Button
                      className="bg-red/01 self-end w-fit button hover:bg-red/02"
                      onClick={() => remove(index)}
                      type="button"
                    >
                      <PiTrashFill />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </section>
        </form>
      </Form>
      {emergencyContactFields.length < 3 && (
        <Button
          className="bg-blue/04 w-fit button hover:bg-blue/02"
          onClick={() =>
            append({
              nomeContatoEmergencia: '',
              parentesco: '',
              telefoneContatoEmergencia: ''
            })
          }
        >
          + CONTATO DE EMERGÊNCIA
        </Button>
      )}
    </section>
  );
}
