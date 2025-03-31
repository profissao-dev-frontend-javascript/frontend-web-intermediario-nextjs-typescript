"use client";

import Conversation from "@/components/Conversation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
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
    <div className="bg-white text-black pb-6 sm:pb-8 lg:pb-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <Header />

        <section className="flex flex-col items-center">
          <div className="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
            <HeroSection />

            {/* <Search /> */}

            <Conversation />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
