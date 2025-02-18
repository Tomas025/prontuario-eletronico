'use client';
import Link from 'next/link';
import { PiTrashFill } from 'react-icons/pi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { ListLink } from '@/components/BreadCrumb/types/typesBreadCrumb';
import EncaminharPaciente from '@/components/SelectEncaminharPaciente/select';
import { Button } from '@/components/ui/button';
//import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useNewInternacao } from './hooks/useNewInternacao';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@radix-ui/react-select';
export default function EnfermagemPaciente() {
  const {
    form,
    submitForm,
    examFields,
    medicationFields,
    appendExam,
    appendMedication,
    removeExam,
    removeMedication
  } = useNewInternacao();

  const linkList: ListLink[] = [
    { label: 'Enfermagem', route: '/enfermagem' },
    { label: 'Paciente', route: '' }
  ];

  return (
    <div className="flex flex-col gap-6">
      <section className="flex justify-between">
        <BreadCrumb linkList={linkList} />
        <div className="flex gap-4">
          <Button className="bg-red/01 w-full button hover:bg-red/02">
            <Link href={'/atendimentoMedico'}>CANCELAR</Link>
          </Button>
          <Button
            className="bg-green/01 w-full button hover:bg-green/02"
            type="submit"
            //disabled={form.formState.isSubmitting}
            form="formAtendimentoMedico"
          >
            SALVAR
          </Button>
          <EncaminharPaciente />
        </div>
      </section>
      <section>
        <Form {...form}>
          <form
            id="formAtendimentoMedico"
            name="formAtendimentoMedico"
            className="grid gap-y-5"
            onSubmit={form.handleSubmit(submitForm)}
          >
            <div className="flex flex-col justify-center gap-y-5 p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
              <div className="flex flex-col gap-y-[10px]">
                <div className="flex justify-between">
                  <h1 className="title">Anamnese</h1>
                  <div className="flex items-center gap-x-5">
                    <span className="bg-yellow w-[15px] h-[15px] rounded-full" />
                    <span className="rounded-[100px] px-[10px] py-[5px] bg-blue/05 text-white tagText">
                      Enfermagem
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {[
                    {
                      label: 'Pressão Art.',
                      value: form.watch('bloodPressure')
                    },
                    { label: 'Glicose', value: form.watch('glucose') },
                    { label: 'Temperatura', value: form.watch('temperature') },
                    { label: 'Peso', value: form.watch('weight') },
                    { label: 'Freq. Card.', value: form.watch('heartRate') },
                    {
                      label: 'Freq. Resp.',
                      value: form.watch('respiratoryRate')
                    },
                    { label: 'Tipo Sang.', value: form.watch('bloodType') },
                    {
                      label: 'Saturação.',
                      value: form.watch('oxygenSaturation')
                    }
                  ].map(({ label, value }) => (
                    <p className="subTitle" key={label}>
                      {label}: <span className="text">{value}</span>
                    </p>
                  ))}
                </div>
                <hr className="border-dashed border-blue/06" />
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {[
                    { label: 'Altura', value: form.watch('height') },
                    {
                      label: 'Antec. Patológicos',
                      value: form.watch('medicalHistory')
                    },
                    {
                      label: 'Necess. Psicobio.',
                      value: form.watch('psychobiologicalNeeds')
                    },
                    { label: 'Alergias', value: form.watch('allergie') },
                    {
                      label: 'Uso de prótese',
                      value: form.watch('prosthesisUse')
                    },
                    {
                      label: 'Medicamentos em uso',
                      value: form.watch('currentMedication')
                    }
                  ].map(({ label, value }) => (
                    <p className="subTitle" key={label}>
                      {label}: <span className="text">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
              <hr className="border-blue/06" />
              <div className="flex flex-col gap-y-[10px]">
                <h1 className="title">Necessidades Psicobiológicas</h1>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {[
                    {
                      label: 'Padrão Respiratório',
                      value: form.watch('respiratoryPattern')
                    },
                    {
                      label: 'Asculta Pulmonar',
                      value: form.watch('pulmonaryAscultation')
                    },
                    {
                      label: 'Coloração da pele',
                      value: form.watch('skinColor')
                    }
                  ].map(({ label, value }) => (
                    <p className="subTitle" key={label}>
                      {label}: <span className="text">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
              <hr className="border-blue/06" />
              <div className="flex flex-col gap-y-[10px]">
                <h1 className="title">Cardio</h1>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {[
                    {
                      label: 'Bulhas Cardíacas',
                      value: form.watch('heartSounds')
                    },
                    {
                      label: 'Pulso',
                      value: form.watch('pulse')
                    },
                    {
                      label: 'Ritmo',
                      value: form.watch('rhythm')
                    }
                  ].map(({ label, value }) => (
                    <p className="subTitle" key={label}>
                      {label}: <span className="text">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
              <hr className="border-blue/06" />
              <div className="flex flex-col gap-y-[10px]">
                <h1 className="title">Neuro</h1>
                <div className="flex flex-wrap gap-x-5 gap-y-1">
                  {[
                    {
                      label: 'Pupila',
                      value: form.watch('pupilReaction')
                    },
                    {
                      label: 'Fala',
                      value: form.watch('speech')
                    },
                    {
                      label: 'Nível de consciência',
                      value: form.watch('consciousnessLevel')
                    }
                  ].map(({ label, value }) => (
                    <p className="subTitle" key={label}>
                      {label}: <span className="text">{value}</span>
                    </p>
                  ))}
                </div>
              </div>
              <hr className="border-blue/06" />
              <div className="flex flex-col gap-y-[10px]">
                <h1 className="title">Avaliação e Exame Físico</h1>
                <div className="flex gap-2 pb-4 border-b-2 border-blue-100 border-dashed text-blue-950">
                {/* Primeira linha */}
                <FormField
                  name="weight1"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-content align-center">
                        <FormLabel className="pt-3 pr-3 ">Peso:</FormLabel>
                        <FormControl>
                          <Input placeholder="60kg" {...field} className="w-16 mr-4 border-blue-200 bg-blue-50" />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  name="FC"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-content align-center">
                        <FormLabel className="pt-3 pr-1">FC:</FormLabel>
                        <FormControl>
                          <Input placeholder="75bpm" className="w-24 mr-4 border-blue-200 bg-blue-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  name="PA"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-content align-center">
                        <FormLabel className="pt-3 pr-1">Temperatura:</FormLabel>
                        <FormControl>
                          <Input placeholder="17mmHg" className="w-24 mr-4 border-blue-200 bg-blue-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              
              </div>
              </div>
              <hr className="border-blue/06" />
              <div className="flex flex-col gap-y-[10px]">
                <h1 className="title">Saúde e Doença</h1>
                <div className="flex gap-2 pb-4 border-b-2 border-blue-100 border-dashed text-blue-950">
                {/* Primeira linha */}
                <FormField
                  name="weight1"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-content align-center">
                        <FormLabel className="pt-3 pr-3 ">Peso:</FormLabel>
                        <FormControl>
                          <Input placeholder="60kg" {...field} className="w-16 mr-4 border-blue-200 bg-blue-50" />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  name="FC"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-content align-center">
                        <FormLabel className="pt-3 pr-1">FC:</FormLabel>
                        <FormControl>
                          <Input placeholder="75bpm" className="w-24 mr-4 border-blue-200 bg-blue-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  name="PA"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex justify-content align-center">
                        <FormLabel className="pt-3 pr-1">Temperatura:</FormLabel>
                        <FormControl>
                          <Input placeholder="17mmHg" className="w-24 mr-4 border-blue-200 bg-blue-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Alergias</h1>
                <hr className="border-blue/06" />
                <p className="text text-blue/04">{form.watch('allergies')}</p>
              </div>
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Antec. Patológicos</h1>
                <hr className="border-blue/06" />
                <p className="text text-blue/04">
                  {form.watch('pathologicalHistory')}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Medicamentos em uso</h1>
                <hr className="border-blue/06" />
                <p className="text text-blue/04">
                  {form.watch('currentMedications')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Sinais e Sintomas</h1>
                <hr className="border-blue/06" />
                <p className="text text-blue/04">
                  {form.watch('signsAndSymptoms')}
                </p>
              </div>
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Cirurgias Prévias</h1>
                <hr className="border-blue/06" />
                <p className="text text-blue/04">
                  {form.watch('previousSurgeries')}
                </p>
              </div>
            </div>
            <div className="grid gap-x-[10px] gap-y-5">
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Hipótese Médica</h1>
                <hr className="border-blue/06" />
                <p className="text text-blue/04">
                  {form.watch('medicalHypothesis')}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col h-fit justify-start gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                  <h1 className="title">Prescrição de Medicação</h1>
                  <hr className="border-blue/06" />
                  {medicationFields.map((medication, index) => (
                    <div className="flex gap-x-2 w-full" key={medication.id}>
                      <FormField
                        control={form.control}
                        name={`medicationPrescription.${index}.medication`}
                        render={({ field: controlField, fieldState }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Digite aqui"
                                className={`p-[10px] border-2 rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                                  fieldState.invalid
                                    ? 'border-red/01 bg-red/03'
                                    : 'border-blue/07'
                                }`}
                                {...controlField}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        className="bg-red/01 self-end w-fit button hover:bg-red/02"
                        onClick={() => removeMedication(index)}
                        type="button"
                      >
                        <PiTrashFill />
                      </Button>
                    </div>
                  ))}
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      onClick={() => appendMedication({ medication: '' })}
                      className="bg-green/01 text-white px-6 py-2 rounded-[8px] hover:bg-green/02"
                    >
                      + MEDICAÇÃO
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col h-fit justify-start gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                  <h1 className="title">Prescrição de Exames</h1>
                  <hr className="border-blue/06" />
                  {examFields.map((exam, index) => (
                    <div className="flex gap-x-2 w-full" key={exam.id}>
                      <FormField
                        control={form.control}
                        name={`examsPrescription.${index}.exam`}
                        render={({ field: controlField, fieldState }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Digite aqui"
                                className={`p-[10px] border-2 w-full rounded-[10px] bg-gray/04 focus-visible:ring-0 ${
                                  fieldState.invalid
                                    ? 'border-red/01 bg-red/03'
                                    : 'border-blue/07'
                                }`}
                                {...controlField}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        className="bg-red/01 self-end w-fit button hover:bg-red/02"
                        onClick={() => removeExam(index)}
                        type="button"
                      >
                        <PiTrashFill />
                      </Button>
                    </div>
                  ))}
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      onClick={() => appendExam({ exam: '' })}
                      className="bg-green/01 text-white px-6 py-2 rounded-[8px] hover:bg-green/02"
                    >
                      + EXAME
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
}
