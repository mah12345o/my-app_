import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export const SelectDate = () => {
  return (
    <div className="flex bg-white text-gray-400 h-fit py-2 rounded-lg px-3 border-gray-200 justify-center items-center border gap-2">
      <FaCalendarAlt /> <span className="whitespace-nowrap">Select Date</span>
    </div>
  );
};
