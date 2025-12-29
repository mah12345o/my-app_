import { CampaignDataTable } from "@/src/components/dashboard/CampaignDataTable";
import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { DashboardStatsCommonCard } from "@/src/components/dashboard/DashboardStatsCommonCard";
import { getCampaignInsights, getCampaigns } from "@/src/server-actions/server";
import { DASHBOARD_STATS_CONFIG } from "../../constant";
import {
  InsightsShimmer,
  CampaignTableShimmer,
} from "@/src/components/Shimmer";
import { Suspense } from "react";

export default async function Dashboard() {
  const { insights, errorCampaignInsights } = await getCampaignInsights();
  const { campaigns, error } = await getCampaigns();

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader />
      <span className="text-2xl font-bold text-orange-600">
        {errorCampaignInsights}
      </span>
      <Suspense fallback={<InsightsShimmer />}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {DASHBOARD_STATS_CONFIG?.map(({ key, label, format }) => (
            <DashboardStatsCommonCard
              key={key}
              text={label}
              data={insights?.[key]}
              format={format}
            />
          ))}
        </div>
      </Suspense>
      <span className="text-2xl font-bold text-orange-600">{error}</span>
      <Suspense fallback={<CampaignTableShimmer />}>
        <CampaignDataTable campaigns={campaigns!} />
      </Suspense>
    </div>
  );
}
