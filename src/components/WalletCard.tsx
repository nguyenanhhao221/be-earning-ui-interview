import React from "react";
import type { TWalletInfo } from "../../types";

type Props = {
  walletInfo: TWalletInfo;
};

export const WalletCard = ({ walletInfo }: Props) => {
  return (
    <>
      <div
        style={{ backgroundColor: `${walletInfo.color}` }}
        className={`h-10 w-10 rounded-xl`}
      ></div>
      <div>
        <p className="text-secondary">{walletInfo.name}</p>
        <p className="stat-value text-base">{walletInfo.value} MCOIN</p>
      </div>
    </>
  );
};
