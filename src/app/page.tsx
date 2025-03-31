"use client";

import Header from "@/components/Header";
import Search from "@/components/Search";
// import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  // const { data: session } = useSession();
  // console.log({ session });

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user?.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }

  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Header />

        <Search />
      </div>
    </div>
  );
}
