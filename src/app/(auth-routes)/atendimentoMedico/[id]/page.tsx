'use client';
import Link from 'next/link';

import { BreadCrumb } from '@/components/BreadCrumb';
import { ListLink } from '@/components/BreadCrumb/types/typesBreadCrumb';
import EncaminharPaciente from '@/components/SelectEncaminharPaciente/select';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { useNewAtendimentoMedico } from './hooks/useNewAtendimentoMedico';

export default function AtendimentoMedicoPaciente() {
  const { form, submitForm } = useNewAtendimentoMedico();
  const linkList: ListLink[] = [
    { label: 'Atendimento Médico', route: '/atendimentoMedico' },
    { label: 'Paciente', route: '' }
  ];

  const renderSelect = (label: string, options: string[]) => (
    <div className="flex items-center flex-wrap gap-1">
      <p className="subTitle">{label}:</p>
      <Select>
        <SelectTrigger className="w-auto bg-gray/04 border-blue/07 text focus-visible:ring-0 focus:border-blue/06 focus:border-2 rounded-xl">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <section className="flex justify-between">
        <BreadCrumb linkList={linkList} />
        <div className="flex gap-4">
          <Button asChild className="bg-red/01 w-full button hover:bg-red/02">
            <Link href={'/atendimentoMedico'}>CANCELAR</Link>
          </Button>
          <Button
            className="bg-green/01 w-full button hover:bg-green/02"
            type="submit"
            disabled={form.formState.isSubmitting}
            form="formAtendimentoMedico"
          >
            SALVAR
          </Button>
          <EncaminharPaciente />
        </div>
      </section>
      <section className="grid gap-y-5">
        <div className="flex flex-col justify-center gap-y-5 p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
          <div className="flex flex-col gap-y-[10px]">
            <div className="flex justify-between">
              <h1 className="title">Anamnese</h1>
              <div className="flex items-center gap-x-5">
                <span className="bg-yellow w-[15px] h-[15px] rounded-full" />
                <span className="rounded-[100px] px-[10px] py-[5px] bg-blue/05 text-white tagText">
                  Atend. Médico
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {[
                { label: 'Pressão Art.', value: form.watch('bloodPressure') },
                { label: 'Glicose', value: form.watch('glucose') },
                { label: 'Temperatura', value: form.watch('temperature') },
                { label: 'Peso', value: form.watch('weight') },
                { label: 'Freq. Card.', value: form.watch('heartRate') },
                { label: 'Freq. Resp.', value: form.watch('respiratoryRate') },
                { label: 'Tipo Sang.', value: form.watch('bloodType') },
                { label: 'Saturação.', value: form.watch('oxygenSaturation') }
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
                { label: 'Uso de prótese', value: form.watch('prosthesisUse') },
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {[
                {
                  label: 'Padrão Respiratório',
                  options: [
                    'Eupneia',
                    'Taquipneia',
                    'Bradipneia',
                    'Hiperpneia',
                    'Hipopneia',
                    'Dispneia',
                    'Apneia'
                  ]
                },
                { label: 'Asculta Pulmonar', options: [] },
                { label: 'Coloração da pele', options: ['Corada', 'Pálida'] }
              ].map(({ label, options }) =>
                label === 'Asculta Pulmonar' ? (
                  <div className="flex items-center gap-1" key={label}>
                    <p className="subTitle">{label}:</p>
                    <Input
                      type="number"
                      placeholder="mv+"
                      className="max-w-24 p-[10px] border-2 rounded-[10px] bg-gray/04 text-blue/03 border-blue/07 focus:border-blue/06"
                      {...form.register('pulmonaryAscultation')}
                    />
                  </div>
                ) : (
                  renderSelect(label, options)
                )
              )}
            </div>
          </div>
          <hr className="border-blue/06" />
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="title">Cardio</h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {[
                {
                  label: 'Bulhas cardíacas',
                  options: ['Ruídos diastólicos', 'Pálida']
                },
                { label: 'Pulso', options: ['Subclávio', 'Pálida'] },
                {
                  label: 'Ritmo',
                  options: ['Taquicardia Ventricular', 'Pálida']
                }
              ].map(({ label, options }) => renderSelect(label, options))}
            </div>
          </div>
          <hr className="border-blue/06" />
          <div className="flex flex-col gap-y-[10px]">
            <h1 className="title">Neuro</h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {[
                {
                  label: 'Pupila',
                  options: ['Isocórica', 'Anisocórica']
                },
                { label: 'Fala', options: ['Afasia', 'Disfasia'] },
                {
                  label: 'Nível de consciência',
                  options: ['Consciente', 'Letárgico']
                },
                { label: 'Resposta motora', options: ['Plegia', 'Deambula'] }
              ].map(({ label, options }) => renderSelect(label, options))}
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
        <Form {...form}>
          <form
            id="formAtendimentoMedico"
            name="formAtendimentoMedico"
            className="grid gap-x-[10px] gap-y-5"
            onSubmit={form.handleSubmit(submitForm)}
          >
            <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
              <h1 className="title">Hipótese Médica</h1>
              <hr className="border-blue/06" />
              <FormField
                control={form.control}
                name="medicalHypothesis"
                render={({ field: controlField, fieldState }) => (
                  <FormItem>
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
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Prescrição de Medicação</h1>
                <hr className="border-blue/06" />
                <FormField
                  control={form.control}
                  name="medicationPrescription"
                  render={({ field: controlField, fieldState }) => (
                    <FormItem>
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
              </div>
              <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                <h1 className="title">Prescrição de Exames</h1>
                <hr className="border-blue/06" />
                <FormField
                  control={form.control}
                  name="examsPrescription"
                  render={({ field: controlField, fieldState }) => (
                    <FormItem>
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
              </div>
            </div>
          </form>
        </Form>
      </section>
    </div>
  );
}
