import React from 'react';
import { BsPrinter } from 'react-icons/bs';
import { FiCheck } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import { BreadCrumb } from '../BreadCrumb';
import { ListLink } from '../BreadCrumb/types/typesBreadCrumb';
import { Button } from '../ui/button';

export function HeaderTriagem() {
  const linkListBreadCrumb: ListLink[] = [
    {
      label: 'Triagem',
      route: '/triagem'
    },
    {
      label: 'Paciente',
      route: ''
    }
  ];

  return (
    <div className="flex justify-between w-full items-center mb-[25px]">
      <BreadCrumb linkList={linkListBreadCrumb} />

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
