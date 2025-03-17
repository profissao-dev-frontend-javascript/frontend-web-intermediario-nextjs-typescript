"use client";

import { SessionProvider } from "next-auth/react";

type SessionProps = {
  children: React.ReactNode;
};

export default function NextAuthSessionProvider({ children }: SessionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
