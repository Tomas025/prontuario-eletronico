'use client';
import Link from 'next/link';
import { PiTrashFill } from 'react-icons/pi';

import { BreadCrumb } from '@/components/BreadCrumb';
import { ListLink } from '@/components/BreadCrumb/types/typesBreadCrumb';
import EncaminharPaciente from '@/components/SelectEncaminharPaciente/select';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { Label } from '@radix-ui/react-label';

import { useNewEnfermagem } from './hooks/useNewEnfermagem';

export default function EnfermagemPaciente() {
  const {
    form,
    submitForm,
    examFields,
    medicationFields,
    patientMonitoringFields,
    nursingNotesFields
  } = useNewEnfermagem();

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
            disabled={form.formState.isSubmitting}
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
                    <div
                      className="flex gap-x-2 items-center w-full"
                      key={medication.id}
                    >
                      <Checkbox
                        id={`medication-${index}`}
                        className="w-5 h-5 cursor-pointer"
                        {...form.register(
                          `medicationPrescription.${index}.isChecked`
                        )}
                        checked={form.watch(
                          `medicationPrescription.${index}.isChecked`
                        )}
                        disabled={medication.isChecked === true}
                        onCheckedChange={(checked: boolean) => {
                          // Atualiza o valor com o estado do checkbox
                          form.setValue(
                            `medicationPrescription.${index}.isChecked`,
                            checked
                          );
                        }}
                      />
                      <label
                        htmlFor={`medication-${index}`}
                        className="text-blue/04 text"
                      >
                        {medication.medication}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col h-fit justify-start gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                  <h1 className="title">Prescrição de Exames</h1>
                  <hr className="border-blue/06" />
                  {examFields.map((exam, index) => (
                    <div
                      className="flex gap-x-2 items-center w-full"
                      key={exam.id}
                    >
                      <Checkbox
                        id={`exam-${index}`}
                        className="w-5 h-5 cursor-pointer"
                        {...form.register(
                          `examsPrescription.${index}.isChecked`
                        )}
                        checked={form.watch(
                          `examsPrescription.${index}.isChecked`
                        )}
                        disabled={exam.isChecked === true}
                        onCheckedChange={(checked: boolean) => {
                          // Atualiza o valor com o estado do checkbox
                          form.setValue(
                            `examsPrescription.${index}.isChecked`,
                            checked
                          );
                        }}
                      />
                      <label
                        htmlFor={`exam-${index}`}
                        className="text-blue/04 text"
                      >
                        {exam.exam}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col h-fit justify-start gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                  <h1 className="title">Monitoramento do Paciente</h1>
                  <hr className="border-blue/06" />
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col items-center gap-2">
                      {patientMonitoringFields.fields.map((field, index) => (
                        <div className="flex gap-x-2 w-full" key={field.id}>
                          <FormField
                            control={form.control}
                            name={`patientMonitoring.${index}.bloodPressureNursing`}
                            render={({ field: controlField, fieldState }) => {
                              if (field.isBackEnd === false) {
                                return (
                                  <FormItem className="w-full">
                                    <FormControl>
                                      <div className="flex items-center gap-1">
                                        <Label
                                          htmlFor="bloodPressureNursing"
                                          className="subTitle"
                                        >
                                          Pressão Art.:
                                        </Label>
                                        <Input
                                          id="bloodPressureNursing"
                                          type="number"
                                          placeholder="mv+"
                                          className={`w-full p-[10px] border-2 rounded-[10px] bg-gray/04 text-blue/03 border-blue/07 focus:border-blue/06 ${
                                            fieldState.invalid
                                              ? 'border-red/01 bg-red/03'
                                              : 'border-blue/07'
                                          }`}
                                          {...controlField}
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                );
                              } else {
                                return (
                                  <div className="flex gap-1 items-center">
                                    <p className="subTitle">Pressão Art.:</p>
                                    <p className="text text-blue/04">
                                      {field.bloodPressureNursing}
                                    </p>
                                  </div>
                                );
                              }
                            }}
                          />
                          <FormField
                            control={form.control}
                            name={`patientMonitoring.${index}.glucoseNursing`}
                            render={({ field: controlField, fieldState }) => {
                              if (field.isBackEnd === false) {
                                return (
                                  <FormItem className="w-full">
                                    <FormControl>
                                      <div className="flex items-center gap-1">
                                        <Label
                                          htmlFor="glucoseNursing"
                                          className="subTitle"
                                        >
                                          Glicose:
                                        </Label>
                                        <Input
                                          id="glucoseNursing"
                                          type="number"
                                          placeholder="mg/dl"
                                          className={`w-full p-[10px] border-2 rounded-[10px] bg-gray/04 text-blue/03 border-blue/07 focus:border-blue/06 ${
                                            fieldState.invalid
                                              ? 'border-red/01 bg-red/03'
                                              : 'border-blue/07'
                                          }`}
                                          {...controlField}
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                );
                              } else {
                                return (
                                  <div className="flex gap-1 items-center">
                                    <p className="subTitle">Glicose:</p>
                                    <p className="text text-blue/04">
                                      {field.glucoseNursing}
                                    </p>
                                  </div>
                                );
                              }
                            }}
                          />
                          <FormField
                            control={form.control}
                            name={`patientMonitoring.${index}.temperatureNursing`}
                            render={({ field: controlField, fieldState }) => {
                              if (field.isBackEnd === false) {
                                return (
                                  <FormItem className="w-full">
                                    <FormControl>
                                      <div className="flex items-center gap-1">
                                        <Label
                                          htmlFor="temperatureNursing"
                                          className="subTitle"
                                        >
                                          Temperatura:
                                        </Label>
                                        <Input
                                          id="temperatureNursing"
                                          type="number"
                                          placeholder="ºC"
                                          className={`w-full p-[10px] border-2 rounded-[10px] bg-gray/04 text-blue/03 border-blue/07 focus:border-blue/06 ${
                                            fieldState.invalid
                                              ? 'border-red/01 bg-red/03'
                                              : 'border-blue/07'
                                          }`}
                                          {...controlField}
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                );
                              } else {
                                return (
                                  <div className="flex gap-1 items-center">
                                    <p className="subTitle">Temperatura:</p>
                                    <p className="text text-blue/04">
                                      {field.temperatureNursing}
                                    </p>
                                  </div>
                                );
                              }
                            }}
                          />
                          <FormField
                            control={form.control}
                            name={`patientMonitoring.${index}.toxygenSaturationNursing`}
                            render={({ field: controlField, fieldState }) => {
                              if (field.isBackEnd === false) {
                                return (
                                  <FormItem className="w-full">
                                    <FormControl>
                                      <div className="flex items-center gap-1">
                                        <Label
                                          htmlFor="toxygenSaturationNursing"
                                          className="subTitle"
                                        >
                                          Saturação:
                                        </Label>
                                        <Input
                                          id="toxygenSaturationNursing"
                                          type="number"
                                          placeholder="SpO2"
                                          className={`w-full p-[10px] border-2 rounded-[10px] bg-gray/04 text-blue/03 border-blue/07 focus:border-blue/06 ${
                                            fieldState.invalid
                                              ? 'border-red/01 bg-red/03'
                                              : 'border-blue/07'
                                          }`}
                                          {...controlField}
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                );
                              } else {
                                return (
                                  <div className="flex gap-1 items-center">
                                    <p className="subTitle">Saturação:</p>
                                    <p className="text text-blue/04">
                                      {field.toxygenSaturationNursing}
                                    </p>
                                  </div>
                                );
                              }
                            }}
                          />
                          {field.isBackEnd === false && (
                            <Button
                              className="bg-red/01 self-end w-fit button hover:bg-red/02"
                              onClick={() =>
                                patientMonitoringFields.remove(index)
                              }
                              type="button"
                            >
                              <PiTrashFill />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      onClick={() =>
                        patientMonitoringFields.append({
                          bloodPressureNursing: '',
                          glucoseNursing: '',
                          temperatureNursing: '',
                          toxygenSaturationNursing: '',
                          isBackEnd: false
                        })
                      }
                      className="bg-blue/04 text-white px-3 py-2 rounded-[8px] hover:bg-blue/02"
                    >
                      ADICIONAR
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col h-fit justify-start gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
                  <h1 className="title">Anotação de Enfermagem</h1>
                  <hr className="border-blue/06" />
                  {nursingNotesFields.fields.map((field, index) => (
                    <div className="flex gap-x-2 w-full" key={field.id}>
                      <FormField
                        control={form.control}
                        name={`nursingNotes.${index}.note`}
                        render={({ field: controlField, fieldState }) => {
                          if (field.isBackEnd === false) {
                            return (
                              <div className="flex w-full gap-2">
                                <FormItem className="w-full">
                                  <FormControl>
                                    <Input
                                      id="note"
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
                                <Button
                                  className="bg-red/01 self-end w-fit button hover:bg-red/02"
                                  onClick={() =>
                                    nursingNotesFields.remove(index)
                                  }
                                  type="button"
                                >
                                  <PiTrashFill />
                                </Button>
                              </div>
                            );
                          } else {
                            return (
                              <p className="text text-blue/04">{field.note}</p>
                            );
                          }
                        }}
                      />
                    </div>
                  ))}
                  <div className="flex justify-end gap-4">
                    <Button
                      type="button"
                      onClick={() =>
                        nursingNotesFields.append({
                          note: '',
                          isBackEnd: false
                        })
                      }
                      className="bg-blue/04 text-white px-3 py-2 rounded-[8px] hover:bg-blue/02"
                    >
                      ADICIONAR
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
