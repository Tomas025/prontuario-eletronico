'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { PiTrashFill } from 'react-icons/pi';

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

interface Field {
  name: string;
  label: string;
  required?: boolean;
  type: string;
}

const linkList = [
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
  { name: 'cpf', label: 'CPF', required: true, type: 'number' }
];

const addressFields: Field[] = [
  { name: 'cep', label: 'CEP', type: 'number' },
  { name: 'cidade', label: 'Cidade', type: 'text' },
  { name: 'bairro', label: 'Bairro', type: 'text' },
  { name: 'rua', label: 'Rua', type: 'text' },
  { name: 'numero', label: 'Número', type: 'number' }
];

const initialEmergencyContactFields: Field[] = [
  {
    name: 'nomeContatoEmergencia',
    label: 'Nome do contato de emergência',
    type: 'text'
  },
  { name: 'parentesco', label: 'Parentesco', type: 'text' },
  {
    name: 'telefoneContatoEmergencia',
    label: 'Telefone de emergência',
    type: 'tel'
  }
];

export default function NovoPaciente() {
  const { form, submitForm } = useNovoPaciente();
  const [emergencyContacts, setEmergencyContacts] = useState<Field[][]>([
    initialEmergencyContactFields
  ]);

  const addEmergencyContact = () => {
    if (emergencyContacts.length < 3) {
      setEmergencyContacts((prev) => [
        ...prev,
        initialEmergencyContactFields.map((field) => ({
          ...field,
          name: `${field.name}${prev.length + 1}`
        }))
      ]);
    }
  };

  const removeEmergencyContact = (index: number) => {
    setEmergencyContacts((prev) => prev.filter((_, i) => i !== index));
  };

  const renderFields = (fields: Field[]) =>
    fields.map((field) => (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
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
            {emergencyContacts.length > 0 && (
              <h1 className="text-xl font-bold text-blue/03">
                Contatos de Emergência
              </h1>
            )}
            {emergencyContacts.map((fields, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-5">
                  {renderFields(fields)}
                  {index >= 0 && ( // Excluir apenas contatos adicionais
                    <Button
                      className="bg-red/01 self-end w-fit button hover:bg-red/02"
                      onClick={() => removeEmergencyContact(index)}
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
      {emergencyContacts.length < 3 && (
        <Button
          className="bg-blue/04 w-fit button hover:bg-blue/03"
          onClick={addEmergencyContact}
        >
          + CONTATO DE EMERGÊNCIA
        </Button>
      )}
    </section>
  );
}
