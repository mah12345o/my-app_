import React from "react";
import { data } from "../data";
import { TiArrowDown } from "react-icons/ti";

export default function RevenueSummary() {
  return (
    <div className="w-full flex-col flex justify-center">
      <p className="text-gray-600 text-sm mb-4 text-center">
        {data?.successMessage}
      </p>
      <div className="flex justify-center gap-6">
        {data?.metrics?.map((metric, index) => (
          <div key={index} className="text-center">
            <p className="text-gray-500 text-xs mb-1">{metric?.label}</p>
            <p className="text-lg flex items-center font-medium text-[#333843]">
              {metric?.value}
              <span
                className={`text-xs ${metric?.trend === "down" ? "text-red-500" : "text-green-500"}`}
              >
                {metric.trend === "down" ? (
                  <TiArrowDown size={20} />
                ) : (
                  <TiArrowDown className="rotate-x-180" size={20} />
                )}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
