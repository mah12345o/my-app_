import CampaignStream from "@/src/components/campaign-stream/CampaignStream";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CampaignInsightsStreamPage({
  params,
}: PageProps) {
  const { id } = await params;

  return <CampaignStream id={id} />;
}
