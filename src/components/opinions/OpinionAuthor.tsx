import React from "react";
import Image from "next/image";
interface Props {
  name: string;
  path: string;
  desc: string;
}

const OpinionAuthor = ({ name, path, desc }: Props) => {
  return (
    <div className="flex gap-[8px] xl:gap-[10px] desktop:gap-[13px] items-center">
      <Image
        src={path}
        alt="Avatar"
        width={50}
        height={50}
        className="rounded-[50%] aspect-square w-[28px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] desktop:w-[60px] ultra:w-[80px] "
      />
      <div className="flex flex-col justify-center">
        <p className="font-medium text-[9px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] desktop:text-[19px] ultra:text-[24px]">
          {name}
        </p>
        <p className="font-light text-[9px] md:text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] desktop:text-[19px] ultra:text-[24px] opacity-80">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default OpinionAuthor;
