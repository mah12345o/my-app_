import { InsightsShimmer } from "@/src/components/Shimmer";

export default function Loading() {
  return (
    <div className="p-6">
      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      <InsightsShimmer />
    </div>
  );
}