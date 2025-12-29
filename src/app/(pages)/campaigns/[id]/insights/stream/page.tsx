import CampaignStream from "@/src/components/campaign-stream/CampaignStream";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CampaignInsightsStreamPage({
  params,
}: PageProps) {
  const { id } = await params;
  console.log("id:", id);
  // const { streamingInsights } = await getMixoAdsCampaignInsightsStream({ id });
  // console.log("id:", params);
  // console.log("streamingInsights:", streamingInsights);

  // if (!streamingInsights) {
  //   return <div className="p-6">Failed to load streaming insights</div>;
  // }
  return (
    <CampaignStream id={id} />
    // <div className="p-6 space-y-6">
    //   <h1 className="text-2xl font-bold">Campaign Streaming Insights</h1>

    //   <div className="space-y-4 p-4 border rounded-lg max-w-4xl">
    //     <h3 className="font-semibold text-lg text-gray-800">
    //       {new Date(streamingInsights.timestamp).toLocaleString()}
    //     </h3>

    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    //       <MetricCard
    //         title="Impressions"
    //         value={streamingInsights.impressions.toLocaleString()}
    //         bgColor="bg-blue-50"
    //         textColor="text-blue-600"
    //       />
    //       <MetricCard
    //         title="Clicks"
    //         value={streamingInsights.clicks.toLocaleString()}
    //         bgColor="bg-green-50"
    //         textColor="text-green-600"
    //       />
    //       <MetricCard
    //         title="Conversions"
    //         value={streamingInsights.conversions.toLocaleString()}
    //         bgColor="bg-purple-50"
    //         textColor="text-purple-600"
    //       />
    //       <MetricCard
    //         title="Spend"
    //         value={`$${streamingInsights.spend.toFixed(2)}`}
    //         bgColor="bg-red-50"
    //         textColor="text-red-600"
    //       />
    //     </div>

    //     <div className="grid grid-cols-3 gap-4">
    //       <MetricCard
    //         title="CTR"
    //         value={`${streamingInsights.ctr.toFixed(2)}%`}
    //         bgColor="bg-yellow-50"
    //         textColor="text-yellow-600"
    //       />
    //       <MetricCard
    //         title="CPC"
    //         value={`$${streamingInsights.cpc.toFixed(2)}`}
    //         bgColor="bg-indigo-50"
    //         textColor="text-indigo-600"
    //       />
    //       <MetricCard
    //         title="Conv Rate"
    //         value={`${streamingInsights.conversion_rate.toFixed(2)}%`}
    //         bgColor="bg-pink-50"
    //         textColor="text-pink-600"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
