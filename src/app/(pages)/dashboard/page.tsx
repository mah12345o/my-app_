import { CampaignDataTable } from "@/src/components/dashboard/CampaignDataTable";
import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { DashboardStatsCommonCard } from "@/src/components/dashboard/DashboardStatsCommonCard";
import {
  getMixoAdsCampaignInsightsData,
  getMixoAdsCampaignTableData,
} from "@/src/server-actions/server";
import { DASHBOARD_STATS_CONFIG } from "../../constant";
import {
  InsightsShimmer,
  CampaignTableShimmer,
} from "@/src/components/Shimmer";
import { Suspense } from "react";

export default async function Dashboard() {
  const { campaignsInsights } = await getMixoAdsCampaignInsightsData();
  const { campaigns } = await getMixoAdsCampaignTableData();

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader />
      <Suspense fallback={<InsightsShimmer />}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {DASHBOARD_STATS_CONFIG?.map(({ key, label, format }) => (
            <DashboardStatsCommonCard
              key={key}
              text={label}
              data={campaignsInsights?.[key]}
              format={format}
            />
          ))}
        </div>
      </Suspense>
      <Suspense fallback={<CampaignTableShimmer />}>
        <CampaignDataTable campaigns={campaigns!} />
      </Suspense>
    </div>
  );
}
