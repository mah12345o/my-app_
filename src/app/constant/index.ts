import { DashboardStatItem } from "../interface";

export const DASHBOARD_STATS_CONFIG: DashboardStatItem[] = [
  { key: "total_campaigns", label: "Total Campaigns" },
  { key: "active_campaigns", label: "Active Campaigns" },
  { key: "paused_campaigns", label: "Paused Campaigns" },
  { key: "completed_campaigns", label: "Completed Campaigns" },
  { key: "total_impressions", label: "Total Impressions" },
  { key: "total_clicks", label: "Total Clicks" },
  { key: "total_conversions", label: "Total Conversions" },
  { key: "total_spend", label: "Total Spend", format: "currency" },
  { key: "avg_ctr", label: "Avg CTR", format: "percentage" },
  { key: "avg_cpc", label: "Avg CPC", format: "currency" },
  {
    key: "avg_conversion_rate",
    label: "Avg Conversion Rate",
    format: "percentage",
  },
];
