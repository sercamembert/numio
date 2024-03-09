import React from "react";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import About from "@/components/About";
import Events from "@/components/events/Events";
import Results from "@/components/Results";
const page = () => {
  return (
    <main className="flex flex-col w-full">
      <Hero />

      <div className="w-full h-full max-h-[720px] absolute inset-0 z-0 md:hidden">
        <Image
          src="/images/hero/main.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-20 z-0"
        />
      </div>

      <About />
      <Events />
      <Results />
    </main>
  );
};

export default page;
