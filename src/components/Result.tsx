import React from "react";

interface Props {
  title: string;
  text: string;
}

const Result = ({ title, text }: Props) => {
  return (
    <div className="w-full">
      <p className="font-semibold heading">{title}</p>
      <p className="font-extralight opacity-90 paragraph">{text}</p>
    </div>
  );
};

export default Result;
