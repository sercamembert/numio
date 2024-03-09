"use client";
import React, { useState } from "react";
import RealizationsVideo from "./RealizationsVideo";
import RealizationsBlock from "./RealizationsBlock";
import Link from "next/link";
const Realizations = () => {
  return (
    <section className="padding flex flex-col mb-[200px]">
      <div className="flex justify-between">
        <div className="w-full md:w-[41%]">
          <h4 className="font-semibold text-[34px] md:text-[25px] lg:text-[34px] xl:text-[43px] 2xl:text-[48px] desktop:text-[58px] ultra:text-[86px] leading-tight">
            Nasze Świeżo <br /> Zakończone Projekty
          </h4>
          <p className="paragraph font-extralight opacity-90">
            W Numio jesteśmy dumni z naszej zdolności do przekształcania
            koncepcji artystycznych w niezapomniane wydarzenia. Oto kilka
            przykładów naszych ostatnich sukcesów, które pokazują naszą pasję i
            zaangażowanie w promowanie sztuki i kultury:
          </p>
        </div>
        <div className="w-[43%] bg-[url('/images/realizations/video.png')] bg-center bg-cover hidden md:block rounded-lg xl:rounded-xl desktop:rounded-2xl">
          <RealizationsVideo />
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-2 mt-8 lg:mt-11 xl:mt-14 2xl:mt-16 ultra:mt-28
      gap-y-6 md:gap-y-5 lg:gap-6 xl:gap-8 2xl:gap-9 desktop:gap-12 ultra:gap-16
      "
      >
        <RealizationsBlock
          title="Królewskie Śpiewanie"
          text="Warszawa 12.02.2023"
        />

        <RealizationsBlock title="Głosy Mistrzów" text="Wrocław 12.02.2023" />

        <RealizationsBlock
          title="Królewskie Śpiewanie"
          text="Tykocin 12.02.2023"
        />

        <div className="hidden md:block">
          <RealizationsBlock
            title="Królewskie Śpiewanie"
            text="Tykocin 12.02.2023"
          />
        </div>
        <div className="hidden md:block">
          <RealizationsBlock title="Złote Głosy" text="Wrocław 12.02.2023" />
        </div>
        <div className="hidden md:block">
          <RealizationsBlock
            title="Głosy Śpiewanie"
            text="Warszawa 12.02.2023"
          />
        </div>
      </div>
      <Link
        href="/realizacje"
        className=" mt-[35px] md:mt-[30px] 2xl:mt-[40px]  ultra:mt-[60px]"
      >
        <button
          className="flex items-center justify-center bg-primary text-white uppercase font-semibold text-[10px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] desktop:text-[13px] ultra:text-[19px]
          rounded-[12px] md:rounded-[8px] lg:rounded-[10px] desktop:rounded-[17px] ultra:rounded-[26px]
          h-[40px] md:h-[30px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[55px] ultra:h-[82px]
          min-w-[130px] md:min-w-[80px] lg:min-w-[110px] xl:min-w-[135px] 2xl:min-w-[153px] desktop:min-w-[182px] ultra:min-w-[271px]
          px-3 xl:px-6 
          navbar-button-animation"
        >
          <p>Wszystkie realizacje</p>
        </button>
      </Link>
      <div
        className="mt-[35px] md:mt-[30px] 2xl:mt-[40px] ultra:mt-[60px] aspect-video
       h-[70%] md:hidden w-full bg-[url('/images/realizations/video.png')] bg-center bg-cover rounded-lg xl:rounded-xl desktop:rounded-2xl"
      >
        <RealizationsVideo />
      </div>
    </section>
  );
};

export default Realizations;
