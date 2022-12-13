import React from "react";
import { FaWifi } from "react-icons/fa";
import { MdSignalCellularAlt } from "react-icons/md";
import { BsBatteryFull } from "react-icons/bs";

export const Headers = () => {
  return (
    <header className="flex justify-between py-4 px-6">
      <time>9:41</time>
      <div className="flex gap-1">
        <MdSignalCellularAlt className="h-4 w-4" />
        <FaWifi className="h-4 w-4" />
        <BsBatteryFull className="h-4 w-4" />
      </div>
    </header>
  );
};
