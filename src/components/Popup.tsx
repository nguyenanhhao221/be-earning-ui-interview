import Link from "next/link";
import React from "react";
import { BsChevronCompactUp } from "react-icons/bs";
import { DApp } from "./DApp";

type Props = {
  isPopupOpen: boolean;
  setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Popup = ({ isPopupOpen, setIsPopupOpen }: Props) => {
  return !isPopupOpen ? (
    <div className="fixed bottom-0 left-0 right-0 flex flex-col items-center gap-2 rounded-t-3xl bg-neutral-semantic-purple-1">
      <button
        type="button"
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        className="flex items-center justify-center"
      >
        <BsChevronCompactUp fill="#fff" className="h-8 w-8 " />
        <span className="sr-only">Open Popup</span>
      </button>
      <div className="grid w-full grid-cols-5 gap-1">
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
      </div>
    </div>
  ) : (
    <div className="fixed top-1/3 bottom-0 left-0 right-0 flex flex-col items-center gap-2 rounded-t-3xl bg-gradient-to-t from-white to-neutral-semantic-purple-1">
      <Link
        href={"/decentralized-application"}
        className="flex items-center justify-center"
      >
        <BsChevronCompactUp fill="#fff" className="h-8 w-8 " />
      </Link>
      <div className="grid w-full grid-cols-5 gap-1 py-4">
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
        <DApp />
      </div>
    </div>
  );
};
