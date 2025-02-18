'use client';

import { useRouter } from 'next/navigation';
import { FiMail, FiLock } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { LuLoader2 } from 'react-icons/lu';

import { Input } from '@/components/ui/input';

import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '../ui/form';
import { PasswordInput } from '../ui/passwordInput';
import { useCardNovaSenha } from './hooks/useCardNovaSenha';

export default function CardNovaSenha() {
  const router = useRouter();
  const { form, submitForm } = useCardNovaSenha();

  return (
    <Card className="flex flex-col justify-between bg-white w-[478px] p-[30px] rounded-[20px] absolute right-[150px] self-center">
      <CardHeader>
        <Button
          className="w-5 h-10 bg-transparent focus-visible:outline-none hover:bg-transparent focus:bg-transparent active:bg-transparent border-transparent border-none shadow-none outline-none"
          onClick={() => router.push('/login')}
        >
          <FiArrowLeft className="text-black" size={40} />
        </Button>
        <CardTitle className="text-blue-900 text-4xl font-normal">
          Nova Senha
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex border-b-[1px] border-gray-500">
                      <FiMail className="h-5 w-5 mx-2 my-auto" />
                      <Input
                        type="email"
                        placeholder="Email"
                        {...field}
                        className="border-0 focus:outline-none rounded-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accessCode"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex border-b-[1px] border-gray-500">
                      <FiLock className="h-5 w-5 mx-2 my-auto" />
                      <Input
                        type="text"
                        placeholder="Código de Acesso"
                        {...field}
                        className="border-0 focus:outline-none rounded-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex border-b-[1px] border-gray-500">
                      <FiLock className="h-5 w-5 mx-2 my-auto" />
                      <PasswordInput
                        type="password"
                        placeholder="Senha"
                        {...field}
                        className="border-0 focus:outline-none rounded-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repeatPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex border-b-[1px] border-gray-500">
                      <FiLock className="h-5 w-5 mx-2 my-auto" />
                      <PasswordInput
                        type="password"
                        placeholder="Repetir a Senha"
                        {...field}
                        className="border-0 focus:outline-none rounded-none"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-blue-950 w-full text-lg"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && (
                <>
                  <LuLoader2 className="animate-spin" />
                  Carregando...
                </>
              )}
              {!form.formState.isSubmitting && 'Entrar'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
