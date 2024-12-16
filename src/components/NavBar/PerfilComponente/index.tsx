import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

export function UserComponent() {
  return (
    <div className="flex justify-end h-20 items-center space-x-2 bg-blue/01 text-white p-4">
      <div className="text-right">
        <p>Maria Silva Nogueira</p>
        <p className="text-sm text-gray-400">Enfermeira</p>
      </div>
      <FaUserCircle className="text-3xl" />
    </div>
  );
}
