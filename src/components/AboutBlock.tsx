import React from "react";
import Image from "next/image";
interface Props {
  iconHref: string;
  title: string;
  text: string;
}

const AboutBlock = ({ iconHref, text, title }: Props) => {
  return (
    <div className="flex gap-5 md:gap-3 lg:gap-4 xl:gap-5 desktop:gap-7 ultra:gap-11 mt-[33px] md:mt-0">
      <div
        className="bg-primary flex items-center justify-center  rounded-xl xl:rounded-2xl desktop:rounded-3xl
      w-[66px] md:w-[42px] lg:w-[56px] xl:w-[70px] 2xl:w-[80px] desktop:w-[94px] ultra:w-[141px]
      h-[66px] md:h-[42px] lg:h-[56px] xl:h-[70px] 2xl:h-[80px] desktop:h-[94px] ultra:h-[141px]
      my-auto
      "
      >
        <Image
          src={iconHref}
          alt="icon"
          width={61}
          height={61}
          className="aspect-square w-[41%]"
        />
      </div>
      <div className="w-[76%]">
        <p className="font-medium text-[18px] md:text-[13px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] desktop:text-[28px] ultra:text-[40px]">
          {title}
        </p>
        <p className="opacity-60 text-[10px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] desktop:text-[18px] ultra:text-[25px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutBlock;
