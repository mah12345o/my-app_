import "server-only";
import {
  CampaignDetailResponse,
  CampaignInsightsResponse,
  CampaignsInsightsResponse,
  CampaignsResponse,
} from "../app/interface";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://mixo-fe-backend-task.vercel.app";

export const getCampaignInsights = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/campaigns/insights`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch campaign insights: ${response.status}`);
    }

    const data: CampaignInsightsResponse = await response.json();

    return {
      insights: data?.insights,
      errorCampaignInsights: null,
    };
  } catch (error) {
    console.error("Error fetching campaign insights:", error);
    return {
      insights: null,
      errorCampaignInsights:
        "Error fetching campaign insights. Please try again.",
    };
  }
};

export const getCampaigns = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/campaigns`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch campaigns: ${response.status}`);
    }

    const data: CampaignsResponse = await response.json();

    return {
      campaigns: data.campaigns,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching campaigns:", error);

    return {
      campaigns: null,
      error: "Unable to load campaigns. Please try again.",
    };
  }
};

export const getCampaignById = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/campaigns/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch campaign: ${response.status}`);
    }

    const data: CampaignDetailResponse = await response.json();

    return {
      campaign: data?.campaign,
    };
  } catch (error) {
    console.error("Error fetching campaign details:", error);
    return {
      campaign: null,
    };
  }
};

export const getCampaignInsightsById = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/campaigns/${id}/insights`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch campaign insights: ${response.status}`);
    }

    const data: CampaignsInsightsResponse = await response.json();

    return {
      insights: data?.insights,
    };
  } catch (error) {
    console.error("Error fetching campaign insights:", error);
    return {
      insights: null,
    };
  }
};
