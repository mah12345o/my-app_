import "server-only";

import { CampaignsResponse } from "../interface";

export const getMixoAdsCampaignData = async () => {
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
      campaigns: data.campaigns,
    };
  } catch (err) {
    console.error("err:", err);
    return {
      campaigns: null,
    };
  }
};
