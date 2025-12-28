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
