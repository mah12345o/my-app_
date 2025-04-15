"use client";

import CustomerGrowth from "@/src/components/dashboard/CustomerGrowth";
import PieChartFullComponent from "@/src/components/dashboard/PieChartFullComponent";
import { RecentOrder } from "@/src/components/dashboard/RecentOrder";
import TopCategory from "@/src/components/dashboard/TopCategory";
import { GiProgression } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { RiListIndefinite } from "react-icons/ri";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardStatsCommonCard } from "../../components/dashboard/DashboardStatsCommonCard";
import { StatisticChart } from "../../components/dashboard/StatisticChart";
import { TargetRevenueChart } from "../../components/dashboard/TargetRevenueChart";
import TopProducts from "../../components/dashboard/TopProducts";

const clr = ["#2086BF", "#F86624", "#22CAAD", "#EB3D4D"];
const lightClr = ["#F2F4F8", "#FCF0EB", "#F2F6F1", "#FAE8E0"];
const dashboardCards = [
  {
    id: 0,
    title: "Total Project",
    count: 6784,
    icon: "check-circle", // Placeholder for icon
    color: "blue",
    percentageChange: "10%",
    changeValue: "+$150 today",
    trend: "up",
    labelIcon: (
      <div className="ml-4">
        <div
          className={`bg-[${clr[0]}f0] size-fit rounded-lg p-2`}
          style={{ backgroundColor: `${lightClr[0]}f0` }}
        >
          <GoProject className="size-4" style={{ color: clr[0] }} />
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "In Progress",
    count: 1920,
    icon: "clock",
    color: "orange",
    percentageChange: "10%",
    changeValue: "+$150 today",
    trend: "up",
    labelIcon: (
      <div className="ml-4">
        <div
          className="size-fit rounded-lg p-2"
          style={{ backgroundColor: `${lightClr[1]}f0` }}
        >
          <GiProgression className="size-4" style={{ color: clr[1] }} />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Finished",
    count: 4412,
    icon: "check",
    color: "green",
    percentageChange: "10%",
    changeValue: "+$150 today",
    trend: "up",
    labelIcon: (
      <div className="ml-4">
        <div
          className="size-fit rounded-lg p-2"
          style={{ backgroundColor: `${lightClr[2]}f0` }}
        >
          <RiListIndefinite className="size-4" style={{ color: clr[2] }} />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Unfinished",
    count: 329,
    icon: "x-circle",
    color: "red",
    percentageChange: "10%",
    changeValue: "+$150 today",
    trend: "up",
    labelIcon: (
      <div className="ml-4">
        <div
          className="size-fit rounded-lg p-2"
          style={{ backgroundColor: `${lightClr[3]}f0` }}
        >
          <RiListIndefinite className="size-4" style={{ color: clr[3] }} />
        </div>
      </div>
    ),
  },
];
export default function Dashboard() {
  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 ">
        {dashboardCards?.map((el) => (
          <DashboardStatsCommonCard data={el} key={el?.id} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        <div className="md:col-span-12 xl:col-span-4">
          <TargetRevenueChart />
        </div>
        <div className="md:col-span-12 xl:col-span-8">
          <StatisticChart />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        <div className="g-white rounded-lg bg-white p-4 md:col-span-12 xl:col-span-4 ">
          <PieChartFullComponent />
        </div>
        <div className="rounded-lg bg-white p-4 md:col-span-12 xl:col-span-4">
          <TopProducts isProducts />
        </div>
        <div className="rounded-lg bg-white p-4 md:col-span-12 xl:col-span-4">
          <TopCategory isProducts={false} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
        <div className="md:col-span-12 xl:col-span-8">
          <RecentOrder />
        </div>
        <div className="md:col-span-12 xl:col-span-4 ">
          <CustomerGrowth />
        </div>
      </div>
    </div>
  );
}
