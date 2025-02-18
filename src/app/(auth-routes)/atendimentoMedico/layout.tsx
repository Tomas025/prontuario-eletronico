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
    session.user.role === 'RECEPTIONTEAM' ||
    session.user.role === 'NURSE' ||
    session.user.role === 'INTITUATIONMANAGEMENT'
  ) {
    redirect('/');
  }

  return children;
}
