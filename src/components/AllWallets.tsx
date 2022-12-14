import React from "react";
import type { TWalletInfo } from "../../types";
import { WalletCard } from "./WalletCard";

const dummyData: TWalletInfo[] = [
  { name: "@Meta Wallet", value: 95000, color: "#004DFF" },
  { name: "@Metanode Wallet", value: 95000, color: "#FC9D00" },
  { name: "@MCoin", value: 95000, color: "#04B800" },
];

export const AllWallets = () => {
  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <ul className="min-w-screen flex gap-4  ">
        {dummyData.map((wallet) => (
          <li
            key={wallet.name}
            className="flex w-48 flex-col gap-4 whitespace-nowrap rounded-xl border p-3 shadow-2xl"
          >
            <WalletCard walletInfo={wallet} />
          </li>
        ))}
      </ul>
    </div>
  );
};
