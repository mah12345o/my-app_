import { DashboardCard } from "@/src/app/interface";
import { TiArrowSortedUp } from "react-icons/ti";
import { CommonCardLayout } from "../CommonCardLayout";

export const DashboardStatsCommonCard = ({ data }: { data: DashboardCard }) => {
  return (
    <CommonCardLayout>
      <div className="text-left">
        <h3 className="text-[#777980] font-medium text-[16px] mb-1">
          {data?.title}
        </h3>
        <p className="text-[32px] font-semibold text-gray-900 mb-2">
          {data?.count?.toLocaleString()}
        </p>
        <p className="text-green-600 text-sm flex items-center">
          <span className="font-bold text-[14px]">
            {data?.percentageChange}
          </span>
          <TiArrowSortedUp />
          <span className="ml-1 font-medium text-[14px] text-[#858D9D]">
            {data?.changeValue}
          </span>
        </p>
      </div>

      {/* Right Section (Icon) */}
      {data?.labelIcon}
    </CommonCardLayout>
  );
};
