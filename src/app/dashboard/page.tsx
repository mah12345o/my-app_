import { getMixoAdsCampaignData } from "@/src/server-actions/server";
import { GiProgression } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { RiListIndefinite } from "react-icons/ri";
import { DashboardHeader } from "../../components/dashboard/DashboardHeader";
import { DashboardStatsCommonCard } from "../../components/dashboard/DashboardStatsCommonCard";
import { TargetRevenueChart } from "../../components/dashboard/TargetRevenueChart";
import { clr, lightClr } from "../constant";

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
export default async function Dashboard() {
  const { campaigns } = await getMixoAdsCampaignData();
  console.log("campaigns:", campaigns);

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
      </div>
    </div>
  );
}
