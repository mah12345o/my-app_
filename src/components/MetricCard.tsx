interface MetricCardProps {
  title: string;
  value: string | number;
  bgColor: string;
  textColor: string;
}

export const MetricCard = ({ title, value, bgColor, textColor }: MetricCardProps) => {
  return (
    <div className={`p-4 ${bgColor} rounded-lg`}>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
};