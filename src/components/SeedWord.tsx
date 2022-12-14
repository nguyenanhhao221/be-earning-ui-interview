import React from "react";

type Props = {
  seedWord: { name: string; index: number };
};

export const SeedWord = ({ seedWord }: Props) => {
  const { name, index } = seedWord;
  return (
    <>
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-blue-3 text-center text-xs">
        <p className="text-accent-blue-1">{index + 1} </p>
      </div>
      <p className="whitespace-nowrap text-sm text-neutral-1">{name}</p>
    </>
  );
};
