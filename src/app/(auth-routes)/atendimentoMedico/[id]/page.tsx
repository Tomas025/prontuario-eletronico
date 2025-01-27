'use client';
import Link from 'next/link';

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

import { useNewAtendimentoMedico } from './hooks/useNewAtendimentoMedico';

export default function AtendimentoMedicoPaciente() {
  const { form, submitForm } = useNewAtendimentoMedico();
  const linkList: ListLink[] = [
    { label: 'Atendimento Médico', route: '/atendimentoMedico' },
    { label: 'Paciente', route: '' }
  ];

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
              <p className="subTitle">
                Pressão Art.: <span className="text">14/7</span>
              </p>
              <p className="subTitle">
                Glicose: <span className="text">130mg/dl</span>
              </p>
              <p className="subTitle">
                Temperatura: <span className="text">37°</span>
              </p>
              <p className="subTitle">
                Peso: <span className="text">64kg</span>
              </p>
              <p className="subTitle">
                Freq. Card.: <span className="text">70 bpm</span>
              </p>
              <p className="subTitle">
                Freq. Resp.: <span className="text">45 ipm</span>
              </p>
              <p className="subTitle">
                Tipo Sang.: <span className="text">O -</span>
              </p>
              <p className="subTitle">
                Saturação.: <span className="text">99 SpO2</span>
              </p>
            </div>
            <hr className="border-dashed border-blue/06" />
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <p className="subTitle">
                Altura: <span className="text">1,67 m</span>
              </p>
              <p className="subTitle">
                Antec. Patológicos: <span className="text">Sim</span>
              </p>
              <p className="subTitle">
                Nesces. Psicobio.: <span className="text">Sim</span>
              </p>
              <p className="subTitle">
                Diabetes: <span className="text">Sim</span>
              </p>
              <p className="subTitle">
                Alergias: <span className="text">Sim</span>
              </p>
              <p className="subTitle">
                Uso de prótese: <span className="text">Sim</span>
              </p>
              <p className="subTitle">
                Medicamentos em uso: <span className="text">Sim</span>
              </p>
            </div>
          </div>
          <hr className="border-blue/06" />
          <div className="flex flex-col gap-y-[10px]">
            <div>
              <h1 className="title">Necessidades Psicobiológicas</h1>
              <span />
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <p className="subTitle">
                Padrão Respiratório: <span className="text">Dispineico</span>
              </p>
              <p className="subTitle">
                Gasometria: <span className="text">ph</span>
              </p>
              <p className="subTitle">
                Asculta Pulmonar: <span className="text">mv+</span>
              </p>
              <p className="subTitle">
                Pulso: <span className="text">Arritmico</span>
              </p>
            </div>
            <hr className="border-dashed border-blue/06" />
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <p className="subTitle">
                Coloração da pele: <span className="text">Corada</span>
              </p>
              <p className="subTitle">
                Coloração da pele: <span className="text">Corada</span>
              </p>
            </div>
          </div>
          <hr className="border-blue/06" />
          <div className="flex flex-col gap-y-[10px]">
            <div>
              <h1 className="title">Neuro</h1>
              <span />
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <p className="subTitle">
                Bulhas Cardíacas:{' '}
                <span className="text">Ruídos diastólicos</span>
              </p>
              <p className="subTitle">
                Pulso: <span className="text">Subclávio</span>
              </p>
              <p className="subTitle">
                Ritmo: <span className="text">Taquicardia Ventricular</span>
              </p>
            </div>
          </div>
          <hr className="border-blue/06" />
          <div className="flex flex-col gap-y-[10px]">
            <div>
              <h1 className="title">Cardio</h1>
              <span />
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <p className="subTitle">
                Pupilas: <span className="text">Foto reagente</span>
              </p>
              <p className="subTitle">
                Fala: <span className="text">Afonia</span>
              </p>
              <p className="subTitle">
                Nível de consciência: <span className="text">Sonolento</span>
              </p>
              <p className="subTitle">
                Resp. motora: <span className="text">Plegia</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[10px]">
          <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
            <h1 className="title">Alergias</h1>
            <hr className="border-blue/06" />
            <p className="text">Poeira, Dipirona</p>
          </div>
          <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
            <h1 className="title">Antec. Patológicos</h1>
            <hr className="border-blue/06" />
            <p className="text">Diabetes</p>
          </div>
          <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
            <h1 className="title">Medicamentos em uso</h1>
            <hr className="border-blue/06" />
            <p className="text">Ibuprofeno</p>
          </div>
        </div>
        <Form {...form}>
          <form
            id="formAtendimentoMedico"
            name="formAtendimentoMedico"
            className="grid grid-cols-2 gap-x-[10px] gap-y-5"
            onSubmit={form.handleSubmit(submitForm)}
          >
            <div className="flex flex-col justify-center gap-y-[10px] p-[10px] border border-blue/07 rounded-[10px] text-blue/04">
              <h1 className="title">Sinais e Sintomas</h1>
              <hr className="border-blue/06" />
              <FormField
                control={form.control}
                name="signsSymptoms"
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
          </form>
        </Form>
      </section>
    </div>
  );
}
