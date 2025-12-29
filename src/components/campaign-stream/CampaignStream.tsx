"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type CampaignMetrics = {
  campaign_id: string;
  impressions: number;
  clicks: number;
  spend: number;
  timestamp: string;
};

export default function CampaignStream({ id }: { id: string }) {
  const [metrics, setMetrics] = useState<CampaignMetrics | null>(null);
  const [chartData, setChartData] = useState<CampaignMetrics[]>([]);

  useEffect(() => {
    const fetchStream = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL || "https://mixo-fe-backend-task.vercel.app"}/campaigns/${id}/insights/stream`
      );

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split("\n\n");
        buffer = events.pop() || "";

        for (const event of events) {
          if (event.startsWith("data:")) {
            const json = event.replace("data:", "").trim();
            const parsed = JSON.parse(json);

            const point: CampaignMetrics = {
              ...parsed,
              timestamp: new Date().toLocaleTimeString(),
            };

            setMetrics(point);

            setChartData((prev) => [...prev.slice(-20), point]); // keep last 20 points
          }
        }
      }
    };

    fetchStream();
  }, [id]);

  if (!metrics) {
    return <div className="p-6">Waiting for live data…</div>;
  }

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      <h2 className="font-semibold text-lg sm:text-xl">
        Live Campaign Insights
      </h2>

      {/* KPI CARD */}
      <div className="rounded-xl border bg-white shadow-sm p-4 sm:p-5 w-full max-w-none sm:max-w-md">
        <div className="text-sm text-gray-500 mb-1">Campaign ID</div>
        <div className="text-lg font-semibold mb-4 break-all">
          {metrics?.campaign_id}
        </div>

        <div className="space-y-3">
          <Metric label="Impressions" value={metrics?.impressions} />
          <Metric label="Clicks" value={metrics?.clicks} />
          <Metric label="Spend" value={`$${metrics?.spend}`} />
        </div>

        <div className="text-xs text-gray-400 mt-4">
          Last updated at {metrics?.timestamp}
        </div>
      </div>

      {/* 📈 LINE CHART */}
      <div className="rounded-xl border bg-white shadow-sm p-4 sm:p-5">
        <h3 className="text-sm font-medium mb-3">Performance Over Time</h3>

        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                fontSize={12}
                tick={{ fontSize: 10 }}
              />
              <YAxis fontSize={12} tick={{ fontSize: 10 }} />
              <Tooltip contentStyle={{ fontSize: "12px" }} />
              <Line
                type="monotone"
                dataKey="impressions"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#16a34a"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className="font-semibold text-sm sm:text-base break-all text-right">
        {value}
      </span>
    </div>
  );
}
