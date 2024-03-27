import Link from "next/link";
import React from "react";

const HeroButtons = () => {
  return (
    <div
      className="flex justify-center md:justify-start gap-[15px] md:gap-[10px] lg:gap-[13px] xl:gap-[16px] 2xl:gap-[19px] desktop:gap-[22px] ultra:gap-[33px]
    mt-[24px] md:mt-[19px] lg:mt-[30px] xl:mt-[32px] 2xl:mt-[36px] desktop:mt-[43px] ultra:mt-[65px]
    "
    >
      <Link
        href="kontakt"
        className="flex items-center justify-center bg-white text-black uppercase font-semibold text-[10px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] desktop:text-[13px] ultra:text-[19px]
              rounded-[12px] md:rounded-[8px] lg:rounded-[10px] desktop:rounded-[17px] ultra:rounded-[26px]
              h-[40px] md:h-[30px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[55px] ultra:h-[82px]
              min-w-[130px] md:min-w-[80px] lg:min-w-[110px] xl:min-w-[135px] 2xl:min-w-[153px] desktop:min-w-[182px] ultra:min-w-[271px]
              px-3 xl:px-6 
              navbar-button-animation"
      >
        <p>Kup Bilet</p>
      </Link>
      <Link
        href="onas"
        className="flex items-center justify-center bg-primary text-white bg-opacity-75 uppercase font-semibold text-[10px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] desktop:text-[13px] ultra:text-[19px]
              rounded-[12px] md:rounded-[8px] lg:rounded-[10px] desktop:rounded-[17px] ultra:rounded-[26px]
              h-[40px] md:h-[30px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[55px] ultra:h-[82px]
              min-w-[130px] md:min-w-[80px] lg:min-w-[110px] xl:min-w-[135px] 2xl:min-w-[153px] desktop:min-w-[182px] ultra:min-w-[271px]
              px-3 xl:px-6 
              navbar-button-animation"
      >
        <p>Dowiedz się więcej</p>
      </Link>
    </div>
  );
};

export default HeroButtons;
