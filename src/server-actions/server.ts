import "server-only";
import {
  CampaignDetailResponse,
  CampaignInsightsResponse,
  CampaignsInsightsResponse,
  CampaignsResponse,
} from "../app/interface";

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

export const getMixoAdsCampaignTableData = async () => {
  try {
    const res = await fetch(
      "https://mixo-fe-backend-task.vercel.app/campaigns",
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

    const data: CampaignsResponse = await res.json();

    return {
      campaigns: data?.campaigns,
    };
  } catch (err) {
    console.error("err:", err);
    return {
      campaigns: null,
    };
  }
};

export const getMixoAdsCampaignDetails = async ({ id }: { id: string }) => {
  try {
    const res = await fetch(
      `https://mixo-fe-backend-task.vercel.app/campaigns/${id}`,
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

    const data: CampaignDetailResponse = await res.json();

    return {
      campaignsDetail: data?.campaign,
    };
  } catch (err) {
    console.error("err:", err);
    return {
      campaignsDetail: null,
    };
  }
};

export const getMixoAdsCampaignInsights = async ({ id }: { id: string }) => {
  try {
    const res = await fetch(
      `https://mixo-fe-backend-task.vercel.app/campaigns/${id}/insights`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch campaign insights: ${res.status}`);
    }

    const data: CampaignsInsightsResponse = await res.json();

    return {
      campaignInsights: data?.insights,
    };
  } catch (err) {
    console.error("err:", err);
    return {
      campaignInsights: null,
    };
  }
};
