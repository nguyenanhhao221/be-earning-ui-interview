import React from "react";

export const BottomPagination = () => {
  return (
    <div className="mx-auto w-full">
      <ul className="flex justify-center gap-2">
        <li className="h-2 w-2 rounded-full bg-accent-blue-1">
          <button type="button">
            <span className="sr-only">1</span>
          </button>
        </li>
        <li className="h-2 w-2 rounded-full bg-neutral-4">
          <button type="button">
            <span className="sr-only">2</span>
          </button>
        </li>
        <li className="h-2 w-2 rounded-full bg-neutral-4">
          <button type="button">
            <span className="sr-only">3</span>
          </button>
        </li>
        <li className="h-2 w-2 rounded-full bg-neutral-4">
          <button type="button">
            <span className="sr-only">4</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
