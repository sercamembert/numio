import React from "react";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import About from "@/components/About";
import Events from "@/components/events/Events";
import Results from "@/components/Results";
import Artists from "@/components/artists/Artists";
import Realizations from "@/components/realizations/Realizations";
import Opinions from "@/components/opinions/Opinions";
const page = () => {
  return (
    <main className="flex flex-col w-full">
      <div className="flex flex-col gap-[120px] md:gap-[110px] lg:gap-[132px] xl:gap-[160px] 2xl:gap-[180px] desktop:gap-[215px] ultra:gap-[331px]">
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
        <Artists />
        <Realizations />
        <Opinions />
      </div>
    </main>
  );
};

export default page;
