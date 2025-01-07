'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  PiAddressBookTabsFill,
  PiClipboardTextFill,
  PiStethoscopeFill,
  PiPulseFill,
  PiAsclepiusFill,
  PiSyringeFill
} from 'react-icons/pi';

export function MenuComponent() {
  const pathname = usePathname();
  const listLinkNavBar = [
    {
      label: 'Atendimentos',
      route: '/atendimentos',
      icon: <PiAddressBookTabsFill size={20} />
    },
    {
      label: 'Triagem',
      route: '/triagem',
      icon: <PiClipboardTextFill size={20} />
    },
    {
      label: 'Atendimento Médico',
      route: '/atendimentoMedico',
      icon: <PiAsclepiusFill size={20} />
    },
    {
      label: 'Enfermagem',
      route: '/enfermagem',
      icon: <PiSyringeFill size={20} />
    },
    {
      label: 'Laboratório',
      route: '/laboratorio',
      icon: <PiPulseFill size={20} />
    },
    {
      label: 'Equipe Multiprofissional',
      route: '/equipeMultiprofissional',
      icon: <PiStethoscopeFill size={20} />
    }
  ];
  return (
    <nav className="flex w-auto space-x-4 bg-blue/03 items-center h-16">
      {/* Navegação */}
      <div className="flex ml-4 py-2 gap-2">
        {listLinkNavBar.map((item, index) => (
          <Link
            href={item.route}
            className={`flex items-center text-base space-x-2 px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-blue/03 ${item.route === pathname ? 'bg-white text-blue/03' : 'text-white'}`}
            key={index}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
