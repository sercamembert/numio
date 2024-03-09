import React from "react";
import Result from "./Result";

const Results = () => {
  return (
    <section className="padding flex flex-col-reverse md:flex-row md:justify-between mb-[80px] md:mb-[100px] xl:mb-[110px] 2xl:mb-[130px] desktop:mb-[140px] ultra:mb-[300px]">
      <div
        className="grid grid-cols-2 grid-rows-2 w-full md:w-[47%] mt-9 md:mt-0
        justify-between
      gap-x-10 md:gap-x-9 lg:gap-x-12 xl:gap-x-14 desktop:gap-x-[83px] ultra:gap-x-32
      gap-y-4 md:gap-y-3 lg:gap-y-5 xl:gap-y-6 desktop:gap-y-8 ultra:gap-y-12
      "
      >
        <Result
          title="98%"
          text="Średnia zadowolenia uczestników z naszych wydarzeń."
        />
        <Result title="100+" text="Zorganizowanych wydarzeń" />
        <Result title="400+" text="Współpracujących artystów" />
        <Result title="15" text="Nagród i wyróżnień " />
      </div>
      <div className="w-full md:w-[39%] justify-self-end">
        <h3 className="font-semibold text-[34px] md:text-[25px] lg:text-[34px] xl:text-[43px] 2xl:text-[48px] desktop:text-[58px] ultra:text-[86px] leading-tight">
          Wyniki, które Mówią Same za Siebie
        </h3>
        <p className="font-extralight opacity-90 paragraph">
          W Numio, każda liczba opowiada historię naszej pasji, zaangażowania i
          wpływu na świat sztuki i kultury. Oto niektóre z kluczowych statystyk,
          które świadczą o naszym sukcesie i determinacji w realizacji misji
        </p>
      </div>
    </section>
  );
};

export default Results;
