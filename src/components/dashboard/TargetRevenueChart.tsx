import React from "react";
import { CommonCardLayout } from "../CommonCardLayout";
import { RevenueTargetHeader } from "../RevenueTargetHeader";
import RevenueSummary from "./RevenueSummary";
import PieChartHalfComponent from "./PieChartHalfComponent";

export const TargetRevenueChart = () => {
  return (
    <CommonCardLayout className="flex flex-col w-full h-full">
      <RevenueTargetHeader subTitle="Revenue and Target" title="Target" />
      <PieChartHalfComponent />
      <RevenueSummary />
    </CommonCardLayout>
  );
};
