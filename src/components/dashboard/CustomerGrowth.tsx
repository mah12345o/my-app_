"use client";

import { RevenueTargetHeader } from "../RevenueTargetHeader";

// Mock data
const countryData = [
  { name: "USA", customers: 1240, growth: 80, color: "bg-green-500" },
  { name: "Japan", customers: 1240, growth: 60, color: "bg-orange-500" },
  { name: "France", customers: 1240, growth: 49, color: "bg-yellow-500" },
  { name: "Germany", customers: 1240, growth: 100, color: "bg-blue-500" },
  { name: "South Korea", customers: 1240, growth: 50, color: "bg-red-500" },
];

// Simplified SVG world map (highlighting USA)

export function CustomerGrowth() {
  return (
    <div className="w-full p-4 bg-white rounded-lg">
      <RevenueTargetHeader
        className="mb-3"
        subTitle="Based on Country"
        title="Customer Growth"
      />
      <div className="h-40 bg-gray-100 rounded-lg" />
      <div className="mt-4 space-y-3">
        {countryData.map((country) => (
          <div key={country.name} className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
            <div className="flex-1">
              <div className="text-gray-700">{country.name}</div>
              <div className="text-sm text-gray-500">
                {country.customers.toLocaleString()} Customers
              </div>
            </div>
            <div className="w-24 flex items-center gap-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all bg-[#2086BF] duration-300 ease-in-out"
                  style={{ width: `${country.growth}%` }}
                />
              </div>
              <div className="text-right text-sm text-gray-700">
                {country.growth}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerGrowth;
