export const Shimmer = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
    />
  );
};

export const CampaignDetailsShimmer = () => {
  return (
    <div className="rounded-lg border bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <Shimmer className="h-8 w-48" />
        <Shimmer className="h-6 w-16 rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg">
            <Shimmer className="h-4 w-20 mb-2" />
            <Shimmer className="h-6 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const CampaignTableShimmer = () => {
  return (
    <div className="rounded-lg border bg-white p-4">
      <Shimmer className="h-6 w-40 mb-4" />
      <div className="space-y-3">
        <div className="grid grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Shimmer key={i} className="h-4 w-full" />
          ))}
        </div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="grid grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, j) => (
              <Shimmer key={j} className="h-4 w-full" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const InsightsShimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-lg border bg-white p-4">
          <Shimmer className="h-4 w-24 mb-2" />
          <Shimmer className="h-8 w-16 mb-1" />
          <Shimmer className="h-3 w-20" />
        </div>
      ))}
    </div>
  );
};