import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { nextAuthOptions } from '@/services/authOptions';
import { isMultidisciplinary } from '@/utils/ConvertEnums';

export default async function PrivateLayout({
  children
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);
  if (!session || !isMultidisciplinary(session.user.position)) {
    // redirect('/');
  }

  return children;
}
