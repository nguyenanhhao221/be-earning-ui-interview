import React from "react";
import type { TArr } from "../../types";
import { SeedWord } from "./SeedWord";

type Props = {
  allSeedWords: TArr;
};

export const AllSeedWords = ({ allSeedWords }: Props) => {
  return (
    <div className="py-4">
      <ul className="grid grid-cols-3 gap-4">
        {allSeedWords.map((seedWord) => (
          <li
            key={seedWord.name}
            className="flex items-center gap-2 rounded-lg py-2 pl-2 shadow-lg"
          >
            <SeedWord seedWord={seedWord} />
          </li>
        ))}
      </ul>
    </div>
  );
};
