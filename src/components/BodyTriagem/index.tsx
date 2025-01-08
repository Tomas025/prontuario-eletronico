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
import { Select, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "../ui/select";
import { SelectContent, SelectValue } from "@radix-ui/react-select";

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
    necesPsicobio: z.string(),
    diabetes: z.string(),
    medicUso: z.string(),
    protese: z.string(),
    temAlergia: z.string(),
    alergias: z.string().optional(),
    antecedentes: z.string().optional(),
    medicamentos: z.string().optional(),
    cirurgias: z.string().optional(),
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
            antPato: "",
            necesPsicobio: "",
            diabetes: "",
            medicUso: "",
            protese: "",
            temAlergia: "",
            alergias: "",
            antecedentes: "",
            medicamentos: "",
            cirurgias: "",
            sintomas: "",
        },
    });

    // Submissão do formulário
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Dados enviados:", values);
        alert("Formulário enviado com sucesso!");
    }

    return (
        <div className="p-5 border-0">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="border-0">
                    <Card className="border-blue-200 rounded-md m-1">
                        <CardHeader>
                            <div className="flex justify-between align-center">
                                <CardTitle className="pt-2 text-xl text-blue-950">Anamnese</CardTitle>
                                <div className="w-16">
                                    <Select>
                                        <SelectTrigger className="bg-white border-blue-300 w-16">
                                            <SelectValue placeholder="🟡" />
                                        </SelectTrigger>
                                        <SelectContent className="border-2 bg-white border-blue-200 rounded-md">
                                            <SelectGroup className="border-blue-200">
                                                <SelectItem value="Leve" className="border-blue-200 border-b-2 rounded-none w-14">🟢</SelectItem>
                                                <SelectItem value="Moderado" className="border-blue-200 border-b-2 rounded-none w-14">🟡</SelectItem>
                                                <SelectItem value="Grave" className="border-blue-200 w-14">🔴</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>

                            <div className="flex gap-2 pb-4 border-b-2 border-blue-100 border-dashed text-blue-950">
                                {/* Primeira linha */}
                                <FormField
                                    name="pressao"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Pressão Art.:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="14/7" {...field} className="w-14 mr-4"/>
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="glicose"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Glicose:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="130mg/dl" className="w-24 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="temperatura"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Temperatura:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="37°" className="w-12 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="peso"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Peso:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="64kg" className="w-16 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="freqCardiaca"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Freq. Card.:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="70 bpm" className="w-20 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="freqResp"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Freq. Resp.:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="45 ipm" className="w-20 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="tipoSang"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Tipo Sang.:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="O-" className="w-12"{...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex gap-1 pb-4 pt-2 border-b-2 border-blue-100 border-dashed text-blue-950">
                                <FormField
                                    name="saturacao"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Saturação:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="99 SpO2" className="w-24 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="altura"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Altura:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="1,67m" className="w-16 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="antPato"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Antec.Patológicos:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Sim" className="w-14 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="necesPsicobio"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Neces. Psicobio.:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Sim" className="w-14 mr-4" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="diabetes"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Diabetes:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Sim" className="w-14 mr-4"{...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="medicUso"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Medicamentos em Uso:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="sim" className="w-14" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-7 gap-4 pt-2 text-blue-950">
                                <FormField
                                    name="protese"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Uso de prótese:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="sim" className="w-14" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="temAlergia"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-content align-center">
                                                <FormLabel className="pt-3 pr-1">Alergias:</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="sim" className="w-14" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </div>
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
                                name="alergias"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl text-blue-950 font-bold py-2">Alergias</FormLabel>
                                        <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                                        <FormControl>
                                            <Input placeholder="Poeira, Dipirona" className="border-blue-200 border-2 hover:border-blue-300" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            </CardContent>
                        </Card>
                        <Card className="border-blue-200 rounded-md m-2 pt-2">
                            <CardContent>
                            <FormField
                                name="antecedentes"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl text-blue-950 font-bold py-2">Antecedentes Patológicos</FormLabel>
                                        <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                                        <FormControl>
                                            <Input placeholder="Diabetes tipo 2" className="border-blue-200 border-2 hover:border-blue-300" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            </CardContent>
                        </Card>
                        <Card className="border-blue-200 rounded-md m-2 pt-2">
                            <CardContent>
                            <FormField
                                name="medicamentos"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl text-blue-950 font-bold py-2">Medicamentos em Uso</FormLabel>
                                        <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                                        <FormControl>
                                            <Input placeholder="Ibuprofeno" className="border-blue-200 border-2 hover:border-blue-300" {...field} />
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
                                name="cirurgias"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl text-blue-950 font-bold py-2">Cirurgias prévias</FormLabel>
                                        <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                                        <FormControl>
                                            <Input placeholder="Digite aqui" className="border-blue-200 border-2 hover:border-blue-300" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        </Card>
                        <Card className="border-blue-200 rounded-md m-2 pt-2">
                            <CardContent>
                            <FormField
                                name="sintomas"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xl text-blue-950 font-bold py-2">Sinais e Sintomas</FormLabel>
                                        <div className="w-full border-t-2 border-blue-100 pb-1"></div>
                                        <FormControl>
                                            <Input placeholder="Espirro, tosse e dor de cabeça" className="border-blue-200 border-2 hover:border-blue-300" {...field} />
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
}