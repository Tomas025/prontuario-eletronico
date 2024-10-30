"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "../ui/form";
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
})

export default function CardNovaSenha() {
    const form = useForm();

    const handleSubmit = (data: any) => {
        console.log('Form submitted', data);
    };

    return (
        <Card className="w-60vh h-80vh">
            <CardHeader>
                <Button />
                <CardTitle>Nova Senha</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField
                        control={form.control}
                        name="Código de Acesso"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="Código de Acesso" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField
                        control={form.control}
                        name="Senha"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Senha" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField
                        control={form.control}
                        name="Repetir Senha"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Repetir a Senha" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );

    // Card{CardHeader(ButtonBack, Label("Nova Senha"));CardContent(Form(Input [n] button[submit])})
}