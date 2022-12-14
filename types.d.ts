//Type for Typescript
export type TArr = { name: string; index: number }[];
export type TFinalArr = {
  list: string[];
  primary: number;
  "index-selected": number;
}[];

export type TWalletInfo = {
  name: string;
  value: number;
  color: string;
};

export type TTransaction = {
  id: string;
  type: "receive" | "send";
  value: number;
  currency: string;
  timestamp: string;
  userImage?: string;
  userName: string;
};
