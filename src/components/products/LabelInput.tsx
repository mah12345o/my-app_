import React from "react";
import { twMerge } from "tailwind-merge";

interface LabeledInputProps {
  text: string;
  className?: string;
}

export const LabeledInput = ({
  text,
  className,
  children,
}: LabeledInputProps & { children: React.ReactNode }) => {
  return (
    <div className={twMerge("flex flex-col gap-1 w-full", className)}>
      <span className="text-[14px] font-medium text-[#777980]">{text}</span>
      {children}
    </div>
  );
};
