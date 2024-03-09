import React from "react";
import Image from "next/image";
const HeroLogos = () => {
  return (
    <div className="flex justify-between mt-[40px] lg:mt-[60px] xl:mt-[70px] 2xl:mt-[75px] desktop:mt-[80px] ultra:mt-[193px]">
      <Image
        src="/images/logos/logo1.png"
        className="w-[27%] sm:w-[23%]"
        alt="logo"
        width={235}
        height={48}
      />
      <Image
        src="/images/logos/logo2.png"
        className="w-[27%] sm:w-[23%]"
        alt="logo"
        width={235}
        height={48}
      />
      <Image
        src="/images/logos/logo3.png"
        className="w-[27%] sm:w-[23%]"
        alt="logo"
        width={235}
        height={48}
      />
    </div>
  );
};

export default HeroLogos;
