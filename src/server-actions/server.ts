import "server-only";
import { CampaignInsightsResponse } from "../app/interface";

export const getMixoAdsCampaignInsightsData = async () => {
  try {
    const res = await fetch(
      "https://mixo-fe-backend-task.vercel.app/campaigns/insights",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch campaigns: ${res.status}`);
    }

    const data: CampaignInsightsResponse = await res.json();

    return {
      campaignsInsights: data?.insights,
    };
  } catch (err) {
    console.error("err:", err);
    return {
      campaigns: null,
    };
  }
};
