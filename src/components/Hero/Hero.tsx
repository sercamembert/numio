import React from "react";
import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import Image from "next/image";
import HeroLogos from "./HeroLogos";
const Hero = () => {
  return (
    <section
      className="w-full z-10 pt-[140px] md:pt-[100px] xl:pt-[150px] 2xl:pt-[160px] ultra:pt-[220px] flex fle-col md:flex-row md:justify-between
    gap-[90px] lg:gap-[120px] xl:gap-[150px] 2xl:gap-[px] desktop:gap-[px] ultra:gap-[px]
    padding md:px-0 md:pl-[83px] lg:pl-[110px] xl:pl-[137px] 2xl:pl-[155px] 3xl:pl-[170px] desktop:pl-[185px] ultra:pl-[275px]
    
    "
    >
      <div className="flex flex-col md:max-w-[310px] lg:max-w-[413px] xl:max-w-[516px] 2xl:max-w-[590px] desktop:max-w-[693px] ultra:max-w-[1032px]">
        <HeroText />
        <HeroButtons />
        <HeroLogos />
      </div>
      <div
        className="hidden md:block w-[41%] min-h-[365px] lg:min-h-[500px] xl:min-h-[650px] 2xl:min-h-[740px] desktop:min-h-[790px] ultra:min-h-[1210px]
      rounded-tl-[48px] lg:rounded-tl-[64px] xl:rounded-tl-[80px] 2xl:rounded-tl-[90px] desktop:rounded-tl-[107px] ultra:rounded-tl-[160px]
      rounded-bl-[23px] lg:rounded-bl-[30px] xl:rounded-bl-[38px] 2xl:rounded-bl-[43px] desktop:rounded-bl-[51px] ultra:rounded-bl-[77px]
      bg-[url('/images/hero/main.png')] bg-center bg-cover
      "
      ></div>
    </section>
  );
};

export default Hero;
