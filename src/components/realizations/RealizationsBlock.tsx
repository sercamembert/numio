import React from "react";

interface Props {
  title: string;
  text: string;
}

const RealizationsBlock = ({ title, text }: Props) => {
  return (
    <div>
      <p className="font-medium text-[18px] md:text-[13px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] desktop:text-[28px] ultra:text-[40px]">
        {title}
      </p>
      <p className="paragraph font-extralight opacity-90">{text}</p>
    </div>
  );
};

export default RealizationsBlock;
