"use client"
import { Input } from '@/components/Input';

import React, { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setInputValue(e.target.value);
  };

  function onSubmit(){
    alert(inputValue);
  }

  return (
    <div>
      <Input
        placeholder="Digite algo"
        value={inputValue}
        onChange={handleChange}
        className="border-blue-500 text-lg w-32" // Passando classes do Tailwind
        label="Nome"
        required
        errorMessage={inputValue === '' ? 'Campo obrigatório' : ''}
      />

      <button onClick={onSubmit}>Enviar</button>
    </div>
  );
}
