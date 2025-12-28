"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const RevenueTargetHeader = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={twMerge("w-full", className)}>
      <div className="flex justify-between items-center items-start">
        {/* Title Section */}
        <div>
          <h2 className="text-[20px] font-semibold text-[#1D1F2C]">{title}</h2>
          <div className="flex items-center">
            <h3 className="text-sm text-gray-600 mt-1">{subTitle}</h3>
          </div>
        </div>

        {/* Menu/Options Ellipsis */}
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ⋮
        </button>

        {/* Optional Dropdown (Placeholder) */}
        {isMenuOpen && (
          <div className="absolute right-4 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <button className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-100">
              Option 1
            </button>
            <button className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-100">
              Option 2
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
