// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string;
      active: boolean;
      email: string;
      firstAccess: boolean;
      position?: string;
      role: string;
      unique_name: string;
    };
  }
  interface User {
    id?: string;
    active: boolean;
    email: string;
    firstAccess: boolean;
    position?: string;
    role: string;
    token: string;
    unique_name: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    active: boolean;
    email: string;
    firstAccess: boolean;
    position?: string;
    role: string;
    unique_name: string;
  }
}
