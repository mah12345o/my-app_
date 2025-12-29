import { Shimmer } from "@/src/components/Shimmer";

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <Shimmer className="h-8 w-64" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg">
            <Shimmer className="h-4 w-32" />

            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <Shimmer className="h-3 w-16 mb-2" />
                  <Shimmer className="h-6 w-12" />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-lg">
                  <Shimmer className="h-3 w-12 mb-2" />
                  <Shimmer className="h-6 w-10" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
