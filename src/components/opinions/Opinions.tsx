"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Opinions() {
  return (
    <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 2xl:gap-[69px] desktop:gap-24 ultra:gap-32">
      <div className="padding flex flex-col font-semibold text-[33px] md:heading leading-tight items-end">
        <div className="flex items-center">
          <Image
            src="/images/icons/quote.svg"
            alt="quote icon"
            width={90}
            height={60}
            className="w-[34px] md:w-[28px] lg:w-[37px] xl:w-[45px] 2xl:w-[51px] desktop:w-[68px] ultra:w-[90px] desktop:pt-2 ultra:pt-10"
          />
          <p className="text-right pl-2 lg:pl-4 2xl:pl-6  ultra:pt-9">
            Opinie naszych
          </p>
        </div>
        <p>Klientów i Partnerów</p>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "“Praca z zespołem Numio to czysta przyjemność. Ich pasja do sztuki i profesjonalne podejście do każdego projektu czynią z nich idealnego partnera w organizacji wydarzeń kulturalnych.”",
    name: "Julia Kowalczyk",
    imgHref: "/images/opinions/1.png",
    desc: "Menadżer ds. Kultury CityCultural Initiatives",
  },
  {
    quote:
      "“Numio to mistrzowie organizacji koncertów. Ich umiejętność tworzenia niezapomnianych doświadczeń muzycznych jest nieporównywalna. Jako firma, która współpracowała z Numio przy wielu projektach, jestem pod ogromnym wrażeniem ich zaangażowania i profesjonalizmu.”",
    name: "Tomasz Nowak",
    imgHref: "/images/opinions/2.png",
    desc: "CEO MusicSphere",
  },
  {
    quote:
      "“Numio przekracza granice możliwości w organizacji wydarzeń artystycznych. Ich zaangażowanie, kreatywność i profesjonalizm są nie do przecenienia. Współpraca z nimi to gwarancja sukcesu.”",
    name: "Aleksandra Szymańska",
    imgHref: "/images/opinions/3.png",
    desc: "Dyrektor Kreatywny CreativeVision",
  },
];
