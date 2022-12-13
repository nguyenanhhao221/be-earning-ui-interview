import React from "react";
import type { IconType } from "react-icons/lib";

type Props = {
  Icon: IconType;
};
export const NavigationButton = ({ Icon }: Props) => {
  return (
    <div className="rounded-2xl border bg-gradient-to-t from-white to-neutral-semantic-purple-3 p-3">
      <Icon className="fill-neutral-1 stroke-neutral-1" />
    </div>
  );
};
