export interface Campaign {
  id: string;
  name: string;
  brand_id: string;
  status: "active" | "paused" | "inactive";
  budget: number;
  daily_budget: number;
  platforms: string[];
  created_at: string; // ISO date string
}

export interface CampaignsResponse {
  campaigns: Campaign[];
}

export interface CampaignInsights {
  timestamp: string; // ISO date string
  total_campaigns: number;
  active_campaigns: number;
  paused_campaigns: number;
  completed_campaigns: number;
  total_impressions: number;
  total_clicks: number;
  total_conversions: number;
  total_spend: number;
  avg_ctr: number; // percentage
  avg_cpc: number; // cost per click
  avg_conversion_rate: number; // percentage
}

export interface CampaignInsightsResponse {
  insights: CampaignInsights;
}

export interface DashboardStatItem {
  key: keyof CampaignInsights;
  label: string;
  format?: "currency" | "percentage" | "number";
}

export type CampaignStatus = "active" | "paused" | "completed";

export type AdPlatform = "meta" | "google" | "tiktok";

export interface Campaign {
  id: string;
  name: string;
  brand_id: string;
  statusType: CampaignStatus;
  budget: number;
  daily_budget: number;
  platformsType: AdPlatform[];
  created_at: string; // ISO date string
}

export interface CampaignDetailResponse {
  campaign: Campaign;
}

export interface CampaignInsight {
  campaign_id: string;
  timestamp: string; // ISO date string
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  ctr: number; // percentage
  cpc: number; // cost per click
  conversion_rate: number; // percentage
}

export interface CampaignsInsightsResponse {
  insights: CampaignInsight;
}

export interface StreamingInsight {
  campaign_id: string;
  timestamp: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  ctr: number;
  cpc: number;
  conversion_rate: number;
}

export interface StreamingInsightsResponse {
  campaign_id: string;
  timestamp: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  ctr: number;
  cpc: number;
  conversion_rate: number;
}
