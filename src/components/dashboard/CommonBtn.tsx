import React from "react";

interface SelectDateProps {
  text: string; // Required text prop
  className?: string; // Optional additional Tailwind classes
}

export const CommonBtn = ({
  text,
  className,
  children,
}: SelectDateProps & { children?: React.ReactNode }) => {
  return (
    <div
      className={`flex h-fit font-light py-2 rounded-lg px-3 justify-center items-center border gap-2 ${className}`}
    >
      {children}
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
};
