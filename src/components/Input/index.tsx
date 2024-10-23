import React from 'react';

interface CustomInputProps {
  placeholder?: string; // Placeholder do input
  value?: string; // Valor do input
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função para mudança no valor
  className?: string; // Classes do Tailwind para estilização
  disabled?: boolean; // Estado desabilitado
  label?: string; // Rótulo opcional
  required?: boolean; // Se o input é obrigatório
  errorMessage?: string; // Mensagem de erro opcional
}

function Input(props: CustomInputProps) {
  return (
    <div className="mb-4 flex flex-col">
      {props.label && <label className="block mb-1">{props.label}</label>}
      <input
        type="text" // Tipo fixo 'text'
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={`w-full px-4 py-1 border rounded ${props.className}`} // Classes do Tailwind
        disabled={props.disabled}
        required={props.required}
      />
      {props.errorMessage && (
        <span className="text-red-500">{props.errorMessage}</span>
      )}
    </div>
  );
}

export { Input };
