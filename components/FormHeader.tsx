import React from "react";

interface FormHeaderProps {
  header: string;
  subheader: string;
}
const FormHeader = ({ header = "", subheader = "" }: FormHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold leading-9 text-cc-gray-400 md:text-[32px] md:leading-[48px]">
        {header}
      </h1>
      <p className="text-base text-cc-gray-300 leading-6">{subheader}</p>
    </div>
  );
};

export default FormHeader;
