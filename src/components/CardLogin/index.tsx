'use client';

import Link from 'next/link';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
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
import { Label } from '../ui/label';
import { PasswordInput } from '../ui/passwordInput';
import { useCardLogin } from './hooks/useCardLogin';

export function CardLogin() {
  const { form, submitForm } = useCardLogin();

  return (
    <Card className="flex flex-col justify-between bg-white w-[478px] p-[30px] rounded-[20px] absolute right-[150px] self-center">
      <button className="w-fit text-xl">
        <FiArrowLeft />
      </button>
      <CardHeader className="p-0">
        <CardTitle className="text-blue/04 text-5xl font-medium my-10">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
            className="flex flex-col gap-5"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-x-[10px] p-[10px] border-b-[1px] border-[#999999]">
                      <Label htmlFor="email">
                        <FiMail className="text-xl text-blue/04" />
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="border-0 p-0 h-auto rounded-none shadow-none focus-visible:ring-0"
                        {...field}
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
                    <div className="flex flex-col gap-y-[10px]">
                      <div className="flex items-center gap-x-[10px] p-[10px] pr-0 border-b-[1px] border-[#999999]">
                        <Label htmlFor="password">
                          <FiLock className="text-xl text-blue/04" />
                        </Label>
                        <PasswordInput
                          id="password"
                          placeholder="Senha"
                          className="border-0 p-0 h-auto rounded-none shadow-none focus-visible:ring-0"
                          {...field}
                        />
                      </div>
                      <Link
                        href="/recoverPassword"
                        className="self-end text-[13px] text-blue/03 font-medium hover:text-blue/02 hover:underline"
                      >
                        Esqueci minha senha
                      </Link>
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
