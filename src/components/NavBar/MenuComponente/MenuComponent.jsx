import Link from 'next/link';
import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const MenuComponent = () => {
  return (
    <nav className="flex w-auto space-x-4 bg-blue/03 items-center h-16">
      {/* Navegação */}
      <div className="flex ml-5 py-3">
        <Link
          href="#"
          className="flex items-center space-x-2 text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-blue/03"
        >
          <FaClipboardList />
          <span>Atendimentos</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-blue/03"
        >
          <FaClipboardList />
          <span>Triagem</span>
        </Link>
        <Link
          href="#"
          className="flex items-center space-x-2 text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-blue/03"
        >
          <FaClipboardList />
          <span>Atendimento Médico</span>
        </Link>
      </div>
    </nav>
  );
};

export default MenuComponent;
