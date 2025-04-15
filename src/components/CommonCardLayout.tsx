import React from "react";
import { twMerge } from "tailwind-merge";

export const CommonCardLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string; // Optional prop for additional classes
}) => {
  const baseClasses =
    "bg-white w-full items-start p-4 rounded-lg border-none flex justify-between";

  return <div className={twMerge(baseClasses, className)}>{children}</div>;
};
