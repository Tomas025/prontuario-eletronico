import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import { nextAuthOptions } from '@/services/authOptions';

export default async function PrivateLayout({
  children
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(nextAuthOptions);
  if (
    !session ||
    // verificar quem são as pessoas da equipe multiprofissional
    (session.user.position !== 'NURSE' &&
      session.user.position !== 'NURSING_TECHNICIAN')
  ) {
    // redirect('/');
  }

  return children;
}
