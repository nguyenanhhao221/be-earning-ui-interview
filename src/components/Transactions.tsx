import React from "react";
import type { TTransaction } from "../../types";
import { Tabs } from "./Tabs";
import { TransactionCard } from "./TransactionCard";

//HARD CODE DATA ONLY
const transactionsTabs = ["transactions", "pending"];
const dummyTransactionData: TTransaction[] = [
  {
    id: "transaction-1",
    type: "send",
    value: 850,
    currency: "USDT",
    timestamp: "3 hours ago",
    userName: "Eric R Hopper",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    id: "transaction-2",
    type: "receive",
    value: 850,
    currency: "MCOIN",
    timestamp: "3 hours ago",
    userName: "Eric R Hopper",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
  },
  {
    id: "transaction-3",
    type: "send",
    value: 850,
    currency: "USDT",
    timestamp: "3 hours ago",
    userName: "Eric R Hopper",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    id: "transaction-4",
    type: "send",
    value: 50,
    currency: "MCOIN",
    timestamp: "3 hours ago",
    userName: "Eric R Hopper",
    userImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
];

export const Transactions = () => {
  return (
    <div>
      <Tabs tabsData={transactionsTabs} />
      <div>
        <ul className="flex flex-col gap-4">
          {dummyTransactionData.map((transaction) => (
            <li key={transaction.id}>
              <TransactionCard transaction={transaction} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
