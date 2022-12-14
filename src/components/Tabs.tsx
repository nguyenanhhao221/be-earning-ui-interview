import Link from "next/link";
import React from "react";

type Props = {
  tabsData: string[];
};

export const Tabs = ({ tabsData }: Props) => {
  // TODO Hard code for the active tabs, need to replace with actual logic check later
  return (
    <ul
      className={`grids mt-7 mb-4 flex w-full whitespace-nowrap px-8 xs:px-2 grid-cols-[${tabsData.length}] place-content-center items-center`}
    >
      {tabsData.map((tab, index) => (
        <li key={tab}>
          <Link
            href="#"
            className={`tab border-b-4 border-accent-blue-1 font-bold capitalize text-neutral-1 ${
              index !== 0 &&
              `tab border-b-0 text-neutral-3
              `
            }`}
          >
            {tab}
          </Link>
        </li>
      ))}
    </ul>
  );
};
