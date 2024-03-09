import React from "react";

const HeroText = () => {
  return (
    <div className="mx-auto md:mx-0">
      <h1
        className="font-bold text-center md:text-left leading-tight
      text-[45px] md:text-[45px] lg:text-[60px] xl:text-[75px] 2xl:text-[85px] desktop:text-[101px] ultra:text-[151px]
      "
      >
        NUMIO <br /> AGENCJA ART
      </h1>
      <p
        className="font-extralight paragraph text-center md:text-left mt-[5px]
       
      "
      >
        W Numio wierzymy, że sztuka jest językiem, który łączy ludzi niezależnie
        od granic. Naszą misją jest tworzenie wyjątkowych chwil, które pozostają
        w pamięci na długo po zakończeniu aplauzu. Od intymnych koncertów
        akustycznych po spektakularne występy na żywo, od galerii sztuki po
        festiwale uliczne.
      </p>
    </div>
  );
};

export default HeroText;
