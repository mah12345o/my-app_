import React from "react";
import { twMerge } from "tailwind-merge";

export const Label = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "px-2 py-1 bg-[#c2e2f55c] rounded-lg text-sm font-medium",
        className
      )}
    >
      <span className="text-[#2086BF] whitespace-nowrap">{text}</span>
    </div>
  );
};
