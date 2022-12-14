import Image from "next/image";
import React from "react";
import type { TTransaction } from "../../types";

type Props = {
  transaction: TTransaction;
};

export const TransactionCard = ({ transaction }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {transaction.userImage && (
          <Image
            src={transaction.userImage}
            alt="user avatar"
            className="avatar h-12 w-12 rounded-xl object-center"
            width={48}
            height={48}
          />
        )}
        <div>
          <div>
            <h4 className="text-lg text-neutral-1 xs:text-sm">
              {" "}
              {transaction.userName}
            </h4>
            <p className="text-secondary">{transaction.timestamp}</p>
          </div>
        </div>
      </div>
      <div>
        <p
          className={`stat-value text-base ${
            transaction.type === "receive" ? `text-green-500` : `text-red-500`
          }`}
        >
          {transaction.type === "receive" ? `+` : `-`}
          {transaction.value} {transaction.currency}
        </p>
      </div>
    </div>
  );
};
