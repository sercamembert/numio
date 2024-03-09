import React from "react";
import OpinionAuthor from "./OpinionAuthor";

interface Props {
  text: string;
  name: string;
  desc: string;
  path: string;
}

const OpinionBlock = ({ text, name, desc, path }: Props) => {
  return (
    <div
      className="flex flex-col gap-[12px] lg:gap-[16px] xl:gap-[21px] desktop:gap-[27px]
      p-[14px] lg:p-[18px] xl:p-[23px] 3xl:p-[25px] desktop:p-[30px]
      rounded-[7px] lg:rounded-[9px] xl:rounded-[11px] desktop:rounded-[15px]
      h-auto bg-white bg-opacity-10
      max-w-[313px] md:max-w-[268px] lg:max-w-[357px] xl:max-w-[447px] 2xl:max-w-[503px] desktop:max-w-[671px] ultra:max-w-[895px]
      "
    >
      <p className="paragraph font-extralight opacity-90">{text}</p>

      <OpinionAuthor desc={desc} name={name} path={path} />
    </div>
  );
};

export default OpinionBlock;
