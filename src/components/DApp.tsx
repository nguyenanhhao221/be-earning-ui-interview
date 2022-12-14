import React from "react";
import { IoLogoFigma } from "react-icons/io5";

type Props = {
  isMainPage: boolean;
};
export const DApp = ({ isMainPage }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 ">
      <div
        className={`h-14 w-14 rounded-xl ${
          isMainPage ? `bg-neutral-semantic-purple-3` : `bg-white`
        } p-3 shadow-xl`}
      >
        <IoLogoFigma
          fill={`${isMainPage ? `#fff` : `#004DFF`}`}
          className="h-full w-full"
        />
      </div>
      <p className="text-center text-xs">DApp</p>
    </div>
  );
};
