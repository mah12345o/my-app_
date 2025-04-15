import { CommonCardLayout } from "../CommonCardLayout";
import { RevenueTargetHeader } from "../RevenueTargetHeader";
import LineChartComponent from "./Chart";

export const StatisticChart = () => {
  return (
    <CommonCardLayout className="flex flex-col w-full">
      <RevenueTargetHeader subTitle="Revenue and Sales" title="Statistic" />
      <div className="flex space-x-4 w-full justify-end">
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-[#2086BF]"></span>
          <span className="text-gray-500">Revenue</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-4 h-4 rounded-full bg-orange-500"></span>
          <span className="text-gray-500">Sales</span>
        </div>
      </div>
      <LineChartComponent />
    </CommonCardLayout>
  );
};
