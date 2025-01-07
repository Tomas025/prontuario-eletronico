import React from 'react';
import { BsPrinter } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import { Button } from '../ui/button';
import { BreadCrumbTriagem } from './BreadCrumbTriagem';

export function HeaderTriagem() {
  return (
    <div className="flex justify-between w-full items-center mb-[25px]">
      <BreadCrumbTriagem />

      <div className="flex gap-x-4">
        <Button className="bg-blue-950 w-28 text-sm" type="submit">
          <BsPrinter />
          IMPRIMIR
        </Button>
        <Button className="bg-red-500 w-28 text-sm" type="submit">
          <FiX />
          CANCELAR
        </Button>
        <Button className="bg-green-700 w-60 text-sm" type="submit">
          <FiCheck />
          ENCAMINHAR PARA MÉDICO
        </Button>
      </div>
    </div>
  );
}
