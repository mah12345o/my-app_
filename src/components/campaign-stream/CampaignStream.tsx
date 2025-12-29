"use client";

import { useEffect, useState } from "react";

export default function CampaignStream({ id }: { id: string }) {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchStream = async () => {
      const res = await fetch(
        `https://mixo-fe-backend-task.vercel.app/campaigns/${id}/insights/stream`
      );

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setData((prev) => [...prev, chunk]);
      }
    };

    fetchStream();
  }, []);

  return (
    <div className="p-6">
      <h2 className="font-semibold mb-2">Live Campaign Insights</h2>
      <div className="bg-black text-green-400 p-4 rounded text-sm h-64 overflow-auto">
        {data.map((chunk, index) => (
          <div key={index}>{chunk}</div>
        ))}
      </div>
    </div>
  );
}
