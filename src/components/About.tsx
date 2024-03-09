import React from "react";
import AboutBlock from "./AboutBlock";
import Link from "next/link";
const About = () => {
  return (
    <section className="padding flex flex-col md:flex-row md:justify-between">
      <article className="w-full md:w-[48%]">
        <h2 className="font-bold heading">O NAS</h2>
        <p className="font-semibold text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] desktop:text-[25px] ultra:text-[38px] leading-none">
          W Numio, Sztuka jest Naszym Językiem
        </p>
        <p className="font-extralight paragraph mb-2 lg:mb-4 desktop:mb-6 ultra:mb-8">
          W sercu każdego wydarzenia, które organizujemy, leży głęboka pasja do
          sztuki i kultury. Jesteśmy Numio - Twoi przewodnicy po świecie
          niezapomnianych doświadczeń artystycznych, od intymnych występów po
          wielkoskalowe festiwale. Nasza misja to nie tylko organizowanie
          wydarzeń; to tworzenie przestrzeni, gdzie każdy może doświadczyć magii
          sztuki, która porusza, inspiruje i łączy.
        </p>
        <Link
          href="/onas"
          className="font-medium text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] desktop:text-[25px] ultra:text-[38px]"
        >
          Dowiedz się więcej -&gt;
        </Link>
      </article>
      <div className="w-full md:w-[39%] flex flex-col gap-6 md:gap-4 lg:gap-6 xl:gap-7 2xl:gap-8 desktop:gap-10">
        <AboutBlock
          iconHref="/images/icons/koncerty.svg"
          title="Koncerty i Festiwale"
          text="W Numio tworzymy niezapomniane wrażenia, organizując wyjątkowe koncerty i festiwale. Odkryj z nami magię muzyki na żywo, która łączy ludzi i kultury."
        />
        <AboutBlock
          iconHref="/images/icons/doradztwo.svg"
          title="Doradztwo i Współpraca"
          text="Nasza wiedza i sieć kontaktów w świecie sztuki stawiają nas w idealnej pozycji, by łączyć artystów, instytucje i projekty kulturalne, wspierając ich rozwój i sukces."
        />
        <AboutBlock
          iconHref="/images/icons/produkcja.svg"
          title="Produkcja i Kreacja"
          text="W Numio, każde wydarzenie artystyczne jest dziełem sztuki. Od innowacyjnej produkcji po kreatywną scenografię, dbamy o każdy detal."
        />
      </div>
    </section>
  );
};

export default About;
