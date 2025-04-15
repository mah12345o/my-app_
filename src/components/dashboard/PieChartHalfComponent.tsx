import { useEffect, useRef } from "react";

export default function PieChartHalfComponent() {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;

    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      const progress = 75.55; // Percentage
      const offset = circumference - (progress / 100) * circumference;

      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${offset}`;
    }
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="relative my-3 flex justify-center w-full">
        <svg className="transform -rotate-90 md:w-70 h-70">
          <circle
            cx="128"
            cy="128"
            r="100"
            fill="none"
            stroke="#D5F0FF"
            strokeWidth="16"
          />
          <circle
            ref={circleRef}
            cx="128"
            cy="128"
            r="100"
            fill="none"
            stroke="#2086BF"
            strokeWidth="16"
            strokeDasharray="0 1"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">75.55%</span>
            <span className="px-2 w-fit py-1 bg-[#f9c9cda8] rounded-lg text-sm font-medium">
              <span className="text-[#EB3D4D]">+18%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
