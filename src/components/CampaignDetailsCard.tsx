"use client";

import { Campaign } from "@/src/app/interface";

interface CampaignDetailsCardProps {
  campaign: Campaign;
}

export const CampaignDetailsCard = ({ campaign }: CampaignDetailsCardProps) => {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">{campaign?.name}</h1>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            campaign.status === "active"
              ? "bg-green-100 text-green-800"
              : campaign.status === "paused"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-gray-100 text-gray-800"
          }`}
        >
          {campaign?.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Brand ID</h3>
          <p className="text-lg font-semibold">{campaign?.brand_id}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Total Budget</h3>
          <p className="text-lg font-semibold">${campaign?.budget}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Daily Budget</h3>
          <p className="text-lg font-semibold">${campaign?.daily_budget}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Platforms</h3>
          <p className="text-lg font-semibold">{campaign?.platforms}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-600">Created</h3>
          <p className="text-lg font-semibold">
            {new Date(campaign.created_at)?.toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
