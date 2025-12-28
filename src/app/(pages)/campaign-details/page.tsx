import { getMixoAdsCampaignDetails } from "@/src/server-actions/server";
import { CampaignDetailsCard } from "@/src/components/CampaignDetailsCard";
import { CampaignDetailsShimmer } from "@/src/components/Shimmer";
import { Suspense } from "react";

export default async function CampaignDetails(props: {
  searchParams: Promise<{
    id: string;
  }>;
}) {
  const searchParams = await props?.searchParams;

  const { campaignsDetail } = await getMixoAdsCampaignDetails({
    id: searchParams?.id,
  });

  if (!campaignsDetail) {
    return <div>Campaign not found</div>;
  }

  return (
    <div className="p-6">
      <Suspense fallback={<CampaignDetailsShimmer />}>
        <CampaignDetailsCard campaign={campaignsDetail} />
      </Suspense>
    </div>
  );
}
