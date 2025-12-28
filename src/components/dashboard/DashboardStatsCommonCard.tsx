interface DashboardStatsCommonCardProps {
  text: string;
  data?: string | number;
  format?: "currency" | "percentage" | "number";
}

export const DashboardStatsCommonCard = ({
  text,
  data,
  format = "number",
}: DashboardStatsCommonCardProps) => {
  const formattedValue = (() => {
    if (data == null) return "--";

    const numericData = typeof data === "string" ? parseFloat(data) : data;
    if (isNaN(numericData)) return data.toString();

    switch (format) {
      case "currency":
        return `$${numericData.toLocaleString()}`;
      case "percentage":
        return `${numericData.toFixed(2)}%`;
      default:
        return numericData.toLocaleString();
    }
  })();

  return (
    <div className="rounded-lg border p-4">
      <p className="text-sm text-gray-500">{text}</p>
      <p className="text-2xl font-semibold">{formattedValue}</p>
    </div>
  );
};
