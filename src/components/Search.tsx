import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

export const Search = () => {
  const [input, setInput] = useState("");

  return (
    <div className="pb-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        <div className="input-bordered input flex w-full max-w-xs items-center gap-2 rounded-xl bg-white shadow-xl">
          <BiSearchAlt className="fill-neutral-3" />
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
