import React, { useEffect } from "react";

type Props = {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  setSuccessPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CountDown = ({ timer, setTimer, setSuccessPopup }: Props) => {
  useEffect(() => {
    if (timer === 0) {
      return setSuccessPopup(false);
    }
    const timeOutID = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearTimeout(timeOutID);
  }, [timer, setSuccessPopup, setTimer]);

  return (
    <div>
      <div className="relative w-full">
        <p className="absolute bottom-5 left-6">{timer}s</p>
        <svg
          className="m-auto block h-16 w-16"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="131px"
          height="131px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#e15b64"
            strokeWidth="2"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      </div>
    </div>
  );
};
