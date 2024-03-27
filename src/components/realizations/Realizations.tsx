"use client";
import React, { useState } from "react";
import RealizationsVideo from "./RealizationsVideo";
import RealizationsBlock from "./RealizationsBlock";
import Link from "next/link";
const Realizations = () => {
  return (
    <section className="padding flex flex-col">
      <div className="flex justify-between">
        <div className="w-full md:w-[41%]">
          <h4 className="font-semibold text-[34px] md:text-[25px] lg:text-[34px] xl:text-[43px] 2xl:text-[48px] desktop:text-[58px] ultra:text-[86px] leading-tight">
            Galeria
          </h4>
          <p className="paragraph font-extralight opacity-90">
            Jesteśmy dumni z naszej zdolności do przekształcania koncepcji
            artystycznych w niezapomniane wydarzenia. Oto kilka przykładów
            naszych ostatnich realizacji.
          </p>
        </div>
        <div className="w-[43%] bg-[url('/images/realizations/video.png')] bg-center bg-cover hidden md:block rounded-lg xl:rounded-xl desktop:rounded-2xl">
          <RealizationsVideo />
        </div>
      </div>
      <div className="flex justify-between mt-8 lg:mt-11 xl:mt-14 2xl:mt-16 desktop:mt-20 ultra:mt-28">
        <RealizationsBlock
          title="Złote Głosy Musicalu"
          text="Białystok 03.02.2024"
        />

        <RealizationsBlock title="Spotkaj Głosy z Bajek" text="04.02.2024" />

        <RealizationsBlock
          title="Złote Głosy Musicalu"
          text="Białystok 04.02.2024"
        />
      </div>
      <div>
        <button
          className="bg-primary text-white uppercase font-semibold text-[10px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] desktop:text-[13px] ultra:text-[19px]
          rounded-[12px] md:rounded-[8px] lg:rounded-[10px] desktop:rounded-[17px] ultra:rounded-[26px]
          h-[40px] md:h-[30px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[55px] ultra:h-[82px]
          min-w-[130px] md:min-w-[80px] lg:min-w-[110px] xl:min-w-[135px] 2xl:min-w-[153px] desktop:min-w-[182px] ultra:min-w-[271px]
          px-3 xl:px-6 mt-[35px] md:mt-[30px] 2xl:mt-[40px]  ultra:mt-[60px]
          navbar-button-animation"
        >
          <Link
            href="/realizacje"
            className="w-full h-full flex items-center justify-center"
          >
            Wszystkie realizacje
          </Link>
        </button>
      </div>
      <div
        className="mt-[43px] aspect-video
       h-[70%] md:hidden w-full bg-[url('/images/realizations/video.png')] bg-center bg-cover rounded-lg xl:rounded-xl desktop:rounded-2xl"
      >
        <RealizationsVideo />
      </div>
    </section>
  );
};

export default Realizations;
