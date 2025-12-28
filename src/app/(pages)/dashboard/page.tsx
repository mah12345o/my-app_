import { DashboardHeader } from "@/src/components/dashboard/DashboardHeader";
import { DashboardStatsCommonCard } from "@/src/components/dashboard/DashboardStatsCommonCard";
import { CampaignDataTable } from "@/src/components/dashboard/CampaignDataTable";
import {
  getMixoAdsCampaignInsightsData,
  getMixoAdsCampaignTableData,
} from "@/src/server-actions/server";
import { DASHBOARD_STATS_CONFIG } from "../../constant";

export default async function Dashboard() {
  const { campaignsInsights } = await getMixoAdsCampaignInsightsData();
  const { campaigns } = await getMixoAdsCampaignTableData();

  return (
    <div className="flex flex-col gap-5">
      <DashboardHeader />
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
      <CampaignDataTable campaigns={campaigns!} />
    </div>
  );
}
