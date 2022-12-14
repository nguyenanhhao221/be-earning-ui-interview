import React from "react";
import { IoLogoFigma } from "react-icons/io5";

export const DApp = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="h-14 w-14 rounded-xl bg-neutral-semantic-purple-3 p-3">
        <IoLogoFigma fill="#fff" className="h-full w-full" />
      </div>
      <p className="text-center text-xs font-bold text-white">DApp</p>
    </div>
  );
};
