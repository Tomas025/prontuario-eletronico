'use client';
import { useSession } from 'next-auth/react';
import { FaUserCircle } from 'react-icons/fa';

import { ConvertPositionEnums } from '@/utils/ConvertEnums';

export function UserComponent() {
  const session = useSession();

  return (
    <div className="flex justify-end h-20 items-center space-x-2 bg-blue/01 text-white p-4">
      <div className="text-right">
        <p>{session.data?.user.unique_name}</p>
        <p className="text-sm text-gray-400">
          {ConvertPositionEnums(session.data?.user.position || '')}
        </p>
      </div>
      <FaUserCircle className="text-3xl" />
    </div>
  );
}
