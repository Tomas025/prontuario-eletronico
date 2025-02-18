'use client';
import { useSession } from 'next-auth/react';
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
  const session = useSession();
  const pathname = usePathname();
  const listLinkNavBar = [];

  if (session.data?.user.role === 'ADMIN') {
    listLinkNavBar.push(
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
        label: 'Internação',
        route: '/internacao',
        icon: <PiPulseFill size={20} />
      },
      {
        label: 'Equipe Multiprofissional',
        route: '/equipeMultiprofissional',
        icon: <PiStethoscopeFill size={20} />
      }
    );
  }
  if (session.data?.user.role === 'RECEPTIONTEAM') {
    listLinkNavBar.push({
      label: 'Atendimentos',
      route: '/atendimentos',
      icon: <PiAddressBookTabsFill size={20} />
    });
  }
  if (session.data?.user.role === 'DOCTOR') {
    listLinkNavBar.push(
      {
        label: 'Atendimento Médico',
        route: '/atendimentoMedico',
        icon: <PiAsclepiusFill size={20} />
      },
      {
        label: 'Internação',
        route: '/internacao',
        icon: <PiPulseFill size={20} />
      },
      {
        label: 'Equipe Multiprofissional',
        route: '/equipeMultiprofissional',
        icon: <PiStethoscopeFill size={20} />
      }
    );
  }
  if (session.data?.user.role === 'NURSE') {
    listLinkNavBar.push(
      {
        label: 'Triagem',
        route: '/triagem',
        icon: <PiClipboardTextFill size={20} />
      },
      {
        label: 'Enfermagem',
        route: '/enfermagem',
        icon: <PiSyringeFill size={20} />
      },
      {
        label: 'Internação',
        route: '/internacao',
        icon: <PiPulseFill size={20} />
      },
      {
        label: 'Equipe Multiprofissional',
        route: '/equipeMultiprofissional',
        icon: <PiStethoscopeFill size={20} />
      }
    );
  }
  if (session.data?.user.role === 'INTITUATIONMANAGEMENT') {
    listLinkNavBar.push(
      {
        label: 'Internação',
        route: '/internacao',
        icon: <PiPulseFill size={20} />
      },
      {
        label: 'Equipe Multiprofissional',
        route: '/equipeMultiprofissional',
        icon: <PiStethoscopeFill size={20} />
      }
    );
  }

  return (
    <nav className="flex w-auto space-x-4 bg-blue/03 items-center h-16">
      {/* Navegação */}
      <div className="flex ml-4 py-2 gap-2">
        {listLinkNavBar.map((item, index) => (
          <Link
            href={item.route}
            className={`flex items-center text-base space-x-2 px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-blue/03 ${pathname.startsWith(item.route) ? 'bg-white text-blue/03' : 'text-white'}`}
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
