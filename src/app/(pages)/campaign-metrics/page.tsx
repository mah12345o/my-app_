import { getCampaignInsightsById } from "@/src/server-actions/server";
import { MetricCard } from "@/src/components/MetricCard";

export default async function CampaignMetrics(props: {
  searchParams: Promise<{
    id: string;
  }>;
}) {
  const searchParams = await props?.searchParams;

  const { insights } = await getCampaignInsightsById({
    id: searchParams?.id,
  });

  if (!insights) {
    return <div>Campaign insights not found</div>;
  }

  const metrics = [
    {
      title: "Impressions",
      value: insights?.impressions?.toLocaleString(),
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Clicks",
      value: insights?.clicks?.toLocaleString(),
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Conversions",
      value: insights?.conversions?.toLocaleString(),
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "CPC",
      value: `$${insights?.cpc}`,
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "CTR",
      value: `${insights?.ctr}%`,
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      title: "Timestamp",
      value: new Date(insights?.timestamp).toLocaleDateString(),
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Spend",
      value: `$${insights?.spend?.toLocaleString()}`,
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Campaign Metrics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics?.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric?.title}
            value={metric?.value}
            bgColor={metric?.bgColor}
            textColor={metric?.textColor}
          />
        ))}
      </div>
    </div>
  );
}
