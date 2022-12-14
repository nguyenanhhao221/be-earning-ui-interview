import Link from "next/link";
import React from "react";

export const Tabs = () => {
  return (
    <div className="tabs mt-7 mb-4 w-full justify-center px-8 xs:px-2">
      <Link
        href="#"
        className="tab border-b-4 border-accent-blue-1 font-bold text-neutral-1"
      >
        My Wallet
      </Link>
      <Link href="#" className="tab  text-neutral-3">
        Report
      </Link>
      <Link href="#" className="tab  text-neutral-3">
        Settings
      </Link>
    </div>
  );
};
