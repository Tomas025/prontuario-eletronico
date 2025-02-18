/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useRouter } from 'next/navigation';
import { FiCheck } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { SelectContent, SelectValue } from '@radix-ui/react-select';

import { BreadCrumb } from '../BreadCrumb';
import { ListLink } from '../BreadCrumb/types/typesBreadCrumb';
import { Select, SelectGroup, SelectItem, SelectTrigger } from '../ui/select';
import { useAnamnesisForm } from './hooks/useBodyTriagem';

const BodyTriagem = () => {
  const { form, onSubmit, loading } = useAnamnesisForm();
  const { push } = useRouter();

  const linkListBreadCrumb: ListLink[] = [
    {
      label: 'Triagem',
      route: '/triagem'
    },
    {
      label: 'Paciente',
      route: ''
    }
  ];

  return (
    <div className="p-5 border-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="border-0">
          <div className="flex justify-between w-full items-center mb-[25px]">
            <BreadCrumb linkList={linkListBreadCrumb} />

            <div className="flex gap-x-4">
              {/* IMPRIMIR */}
              {/* <Button
                className="bg-blue-950 w-28 text-sm"
                type="button"
                onClick={() => window.print()} // Salvar página como PDF
              >
                <BsPrinter />
                IMPRIMIR
              </Button> */}

              {/* CANCELAR */}
              <Button
                className="bg-red-500 w-28 text-sm"
                type="button"
                onClick={() => push('/triagem')}
              >
                <FiX />
                CANCELAR
              </Button>

              {/* ENCAMINHAR PARA MÉDICO */}
              <Button
                className="bg-green-700 w-60 text-sm"
                type="submit" // Agora esse botão submete o formulário
                disabled={loading} // Desabilita se estiver carregando
              >
                <FiCheck />
                {loading ? 'ENVIANDO...' : 'ENCAMINHAR PARA MÉDICO'}
              </Button>
            </div>
          </div>
          <Card className="border-blue-200 rounded-md m-1">
            <CardHeader>
              <div className="flex justify-between align-center">
                <CardTitle className="pt-2 text-xl text-blue-950">
                  Anamnese
                </CardTitle>
                <div className="w-16">
                  <FormField
                    control={form.control}
                    name="classificationStatus"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-16 absolute">
                              <SelectValue placeholder="🟡" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200 ">
                                <SelectItem
                                  value="EMERGENCY"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  🔴
                                </SelectItem>
                                <SelectItem
                                  value="VERY_URGENT"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  🟠
                                </SelectItem>
                                <SelectItem
                                  value="URGENCY"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  🟡
                                </SelectItem>
                                <SelectItem
                                  value="LESS_SERIOUS"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  🟢
                                </SelectItem>
                                <SelectItem
                                  value="LIGHTWEIGHT"
                                  className="border-blue-200 w-14"
                                >
                                  🔵
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 pb-4 border-b-2 border-blue-100 border-dashed text-blue-950">
                {/* Primeira linha */}
                <FormField
                  name="bloodPressure"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1 ">
                            Pressão Art.:
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="14/7"
                              {...field}
                              className="w-14 mr-4 border-blue-200 bg-blue-50"
                            />
                          </FormControl>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="glucose"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">Glicose:</FormLabel>
                          <Input
                            placeholder="130mg/dl"
                            className="w-24 mr-4 border-blue-200 bg-blue-50"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="temperature"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Temperatura:
                          </FormLabel>
                          <Input
                            placeholder="37°"
                            className="w-12 mr-4 border-blue-200 bg-blue-50"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="weight"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">Peso:</FormLabel>
                          <Input
                            placeholder="64kg"
                            className="w-16 mr-4 border-blue-200 bg-blue-50"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="heartRate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Freq. Card.:
                          </FormLabel>
                          <Input
                            placeholder="70 bpm"
                            className="w-20 mr-4 border-blue-200 bg-blue-50"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="respiratoryRate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Freq. Resp.:
                          </FormLabel>
                          <Input
                            placeholder="45 ipm"
                            className="w-20 mr-4 border-blue-200 bg-blue-50"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="bloodType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Tipo Sang.:
                          </FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-16">
                              <SelectValue placeholder="O+" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="AB+"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  AB+
                                </SelectItem>
                                <SelectItem
                                  value="AB-"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  AB-
                                </SelectItem>
                                <SelectItem
                                  value="A+"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  A+
                                </SelectItem>
                                <SelectItem
                                  value="A-"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  A-
                                </SelectItem>
                                <SelectItem
                                  value="B+"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  B+
                                </SelectItem>
                                <SelectItem
                                  value="B-"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  B-
                                </SelectItem>
                                <SelectItem
                                  value="O+"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  O+
                                </SelectItem>
                                <SelectItem
                                  value="O-"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  O-
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-1 pb-4 pt-2 border-b-2 border-blue-100 border-dashed text-blue-950">
                <FormField
                  name="saturation"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Saturação:
                          </FormLabel>
                          <Input
                            placeholder="99 SpO2"
                            className="w-24 mr-4 border-blue-200 bg-blue-50 placeholder-blue-950"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="height"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">Altura:</FormLabel>
                          <Input
                            placeholder="1,67m"
                            className="w-16 mr-4 border-blue-200 bg-blue-50"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="antecPathological"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center mr-1">
                          <FormLabel className="pt-3 pr-1">
                            Antec.Patológicos:
                          </FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-16">
                              <SelectValue placeholder="Sim" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="Sim"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  Sim
                                </SelectItem>
                                <SelectItem
                                  value="Nao"
                                  className="border-blue-200 w-14"
                                >
                                  Não
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="necesPsicobio"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Neces. Psicobio.:
                          </FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-16">
                              <SelectValue placeholder="Sim" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="Sim"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  Sim
                                </SelectItem>
                                <SelectItem
                                  value="Nao"
                                  className="border-blue-200 w-14"
                                >
                                  Não
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="diabetes"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">Diabetes:</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-16">
                              <SelectValue placeholder="Sim" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="Sim"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  Sim
                                </SelectItem>
                                <SelectItem
                                  value="Nao"
                                  className="border-blue-200 w-14"
                                >
                                  Não
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="medicationsInUse"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Medicamentos em Uso:
                          </FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-16">
                              <SelectValue placeholder="Sim" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="Sim"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  Sim
                                </SelectItem>
                                <SelectItem
                                  value="Nao"
                                  className="border-blue-200 w-14"
                                >
                                  Não
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-6 gap-1 pt-2 text-blue-950">
                <FormField
                  name="useOfProthesis"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center">
                          <FormLabel className="pt-3 pr-1">
                            Uso de prótese:
                          </FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-[5.5rem]">
                              <SelectValue placeholder="Sim" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="Sim"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  Sim
                                </SelectItem>
                                <SelectItem
                                  value="Nao"
                                  className="border-blue-200 w-14"
                                >
                                  Não
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  name="allergies"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex justify-content align-center ml-4">
                          <FormLabel className="pt-3 pr-1">Alergias:</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value || ''}
                          >
                            <SelectTrigger className="bg-white border-blue-300 w-20">
                              <SelectValue placeholder="Sim" />
                            </SelectTrigger>
                            <SelectContent
                              className="border-2 bg-white border-blue-200 rounded-md"
                              position="popper"
                            >
                              <SelectGroup className="border-blue-200">
                                <SelectItem
                                  value="Sim"
                                  className="border-blue-200 border-b-2 rounded-none w-14"
                                >
                                  Sim
                                </SelectItem>
                                <SelectItem
                                  value="Nao"
                                  className="border-blue-200 w-14"
                                >
                                  Não
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-3 gap-2 pb-4">
            <Card className="border-blue-200 rounded-md m-2 pt-2">
              <CardContent>
                {/* Seções adicionais */}
                <FormField
                  name="allergiesType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <FormLabel className="text-xl text-blue-950 font-bold py-2">
                            Alergias
                          </FormLabel>
                          <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                          <Input
                            placeholder="Poeira, Dipirona"
                            className="border-blue-200 border-2 hover:border-blue-300"
                            {...field}
                          />
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card className="border-blue-200 rounded-md m-2 pt-2">
              <CardContent>
                <FormField
                  name="antecPathologicalType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <FormLabel className="text-xl text-blue-950 font-bold py-2">
                            Antecedentes Patológicos
                          </FormLabel>
                          <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                          <Input
                            placeholder="Diabetes tipo 2"
                            className="border-blue-200 border-2 hover:border-blue-300"
                            {...field}
                          />
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card className="border-blue-200 rounded-md m-2 pt-2">
              <CardContent>
                <FormField
                  name="medicationInUseType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <FormLabel className="text-xl text-blue-950 font-bold py-2">
                            Medicamentos em Uso
                          </FormLabel>
                          <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                          <Input
                            placeholder="Ibuprofeno"
                            className="border-blue-200 border-2 hover:border-blue-300"
                            {...field}
                          />
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 gap-2 pb-4">
            <Card className="border-blue-200 rounded-md m-2 pt-2">
              <CardContent>
                <FormField
                  name="previousSurgeries"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <FormLabel className="text-xl text-blue-950 font-bold py-2">
                            Cirurgias prévias
                          </FormLabel>
                          <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                          <Input
                            placeholder="Digite aqui"
                            className="border-blue-200 border-2 hover:border-blue-300"
                            {...field}
                          />
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card className="border-blue-200 rounded-md m-2 pt-2">
              <CardContent>
                <FormField
                  name="signsAndSymptoms"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <>
                          <FormLabel className="text-xl text-blue-950 font-bold py-2">
                            Sinais e Sintomas
                          </FormLabel>
                          <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                          <Input
                            placeholder="Espirro, tosse e dor de cabeça"
                            className="border-blue-200 border-2 hover:border-blue-300"
                            {...field}
                          />
                        </>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BodyTriagem;
