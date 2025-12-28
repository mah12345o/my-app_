import { CampaignTableShimmer, InsightsShimmer } from "@/src/components/Shimmer";

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <InsightsShimmer />
      <CampaignTableShimmer />
    </div>
  );
}