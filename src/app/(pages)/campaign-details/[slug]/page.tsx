import { getMixoAdsCampaignDetails } from "@/src/server-actions/server";

export default async function Campaign() {
  const { campaignsDetail } = await getMixoAdsCampaignDetails();
  console.log("campaignsDetail:", campaignsDetail);
  return <div>Campaign</div>;
}
