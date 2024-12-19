"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const formSchema = z.object({
    pressao: z.string().nonempty("Preencha a pressão arterial"),
    glicose: z.string().nonempty("Preencha a glicose"),
    temperatura: z.string().nonempty("Preencha a temperatura"),
    peso: z.string().nonempty("Preencha o peso"),
    freqCardiaca: z.string().nonempty("Preencha a frequência cardíaca"),
    freqResp: z.string().nonempty("Preencha a frequência respiratória"),
    tipoSang: z.string().nonempty("Preencha o tipo sanguíneo"),
    saturacao: z.string().nonempty("Preencha a saturação"),
    altura: z.string(),
    antPato: z.string(),
    necesPsicobio:z.string(),
    diabetes: z.string(),
    medicUso: z.string(),
    protese: z.string(),
    temAlergia: z.string(),
    alergias: z.string().optional(),
    antecedentes: z.string().optional(),
    medicamentos: z.string().optional(),
    sintomas: z.string().optional(),
});

export default function BodyTriagem() {
    // Configuração do React Hook Form
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pressao: "",
            glicose: "",
            temperatura: "",
            peso: "",
            freqCardiaca: "",
            freqResp: "",
            tipoSang: "",
            saturacao: "",
            altura: "",
            antPato:"",
            necesPsicobio:"",
            diabetes: "",
            medicUso: "",
            protese: "",
            temAlergia: "",
            alergias: "",
            antecedentes: "",
            medicamentos: "",
            sintomas: "",
        },
    });

    // Submissão do formulário
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Dados enviados:", values);
        alert("Formulário enviado com sucesso!");
    }

    return (
        <div className="p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Anamnese</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-4 gap-4">
                                {/* Primeira linha */}
                                <FormField
                                    name="pressao"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Pressão Art.</FormLabel>
                                            <FormControl>
                                                <Input placeholder="14/7" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="glicose"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Glicose</FormLabel>
                                            <FormControl>
                                                <Input placeholder="130mg/dl" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="temperatura"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Temperatura</FormLabel>
                                            <FormControl>
                                                <Input placeholder="37°" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="peso"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Peso</FormLabel>
                                            <FormControl>
                                                <Input placeholder="64kg" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="freqCardiaca"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Freq. Card.</FormLabel>
                                            <FormControl>
                                                <Input placeholder="70 bpm" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="freqResp"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Freq. Resp.</FormLabel>
                                            <FormControl>
                                                <Input placeholder="45 ipm" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="tipoSang"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tipo Sang.</FormLabel>
                                            <FormControl>
                                                <Input placeholder="O-" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="saturacao"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Saturação</FormLabel>
                                            <FormControl>
                                                <Input placeholder="99 SpO2" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="altura"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Altura</FormLabel>
                                            <FormControl>
                                                <Input placeholder="1,67m" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="antPato"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Antec.Patológicos</FormLabel>
                                            <FormControl>
                                                <Input placeholder="sim" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="necesPsicobio"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Neces. Psicobio</FormLabel>
                                            <FormControl>
                                                <Input placeholder="sim" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="diabetes"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Diabetes</FormLabel>
                                            <FormControl>
                                                <Input placeholder="sim" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="medicUso"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Medicamentos em Uso</FormLabel>
                                            <FormControl>
                                                <Input placeholder="sim" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="protese"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Uso de prótese</FormLabel>
                                            <FormControl>
                                                <Input placeholder="sim" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="temAlergia"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Alergias</FormLabel>
                                            <FormControl>
                                                <Input placeholder="sim" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Seções adicionais */}
                            <FormField
                                name="alergias"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Alergias</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Poeira, Dipirona" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="antecedentes"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Antecedentes Patológicos</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Diabetes tipo 2" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="medicamentos"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Medicamentos em Uso</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ibuprofeno" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="sintomas"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Sinais e Sintomas</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Espirro, tosse e dor de cabeça" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}