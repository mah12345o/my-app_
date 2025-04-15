import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3200,
    pv: 4500,
    amt: 2300,
  },
  {
    name: "Sept",
    uv: 2800,
    pv: 4200,
    amt: 2400,
  },
  {
    name: "Oct",
    uv: 3400,
    pv: 4700,
    amt: 2200,
  },
  {
    name: "Nov",
    uv: 3000,
    pv: 3900,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3600,
    pv: 4100,
    amt: 2300,
  },
];

export default function LineChartComponent() {
  return (
    <div className="flex items-center text-sm w-full">
      <div style={{ width: "100%", height: 400, color: "#667085" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            className="w-full"
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line
              type="monotone"
              strokeWidth={5}
              dataKey="pv"
              dot={false}
              stroke="#2086BF"
            />
            <Line
              type="monotone"
              strokeWidth={5}
              dot={false}
              dataKey="uv"
              stroke="#F86624"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
