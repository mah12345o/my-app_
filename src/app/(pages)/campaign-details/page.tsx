import { getMixoAdsCampaignDetails } from "@/src/server-actions/server";
import { CampaignDetailsCard } from "@/src/components/CampaignDetailsCard";

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
      <CampaignDetailsCard campaign={campaignsDetail} />
    </div>
  );
}
