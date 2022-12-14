import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { CountDown } from "./CountDown";

// ! The copy clipboard function is not implemented yet
export const CopySection = () => {
  const [successPopup, setSuccessPopup] = useState(false);
  const [timer, setTimer] = useState(2);

  return !successPopup ? (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm">
        Tap to Copy or Carefully write down your seed phrase and store it in a
        safe place
      </p>
      <button
        type="button"
        className="rounded-lg border border-accent-blue-1 p-1"
        onClick={() => {
          setSuccessPopup(!successPopup);
          setTimer(2);
          return;
        }}
      >
        <span className="sr-only">Copy to clipboard</span>
        <FaCopy className="h-8 w-8 fill-accent-blue-1" />
      </button>
    </div>
  ) : (
    <div className="absolute inset-0 z-10 bg-gray-900 bg-opacity-80">
      <div className="fixed bottom-0 left-0 right-0 z-50 rounded-t-xl bg-white py-2 opacity-100">
        <div className="flex flex-col items-center gap-6 text-center">
          <button type="button" onClick={() => setSuccessPopup(false)}>
            <span className="sr-only">Back</span>
            <BsChevronCompactDown className="h-5 w-5 " />
          </button>
          <div className="inline-block rounded-full bg-green-500 p-4">
            <FaCopy className="h-8 w-8 fill-white" />
          </div>
          <p className="text-lg font-semibold">Saved to clipboard</p>
          <CountDown
            timer={timer}
            setTimer={setTimer}
            setSuccessPopup={setSuccessPopup}
          />
        </div>
      </div>
    </div>
  );
};
