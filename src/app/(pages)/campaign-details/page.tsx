import { getCampaignById } from "@/src/server-actions/server";
import { CampaignDetailsCard } from "@/src/components/CampaignDetailsCard";
import { CampaignDetailsShimmer } from "@/src/components/Shimmer";
import { Suspense } from "react";

export default async function CampaignDetails(props: {
  searchParams: Promise<{
    id: string;
  }>;
}) {
  const searchParams = await props?.searchParams;

  const { campaign } = await getCampaignById({
    id: searchParams?.id,
  });

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <div className="p-6">
      <Suspense fallback={<CampaignDetailsShimmer />}>
        <CampaignDetailsCard campaign={campaign} />
      </Suspense>
    </div>
  );
}
