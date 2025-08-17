import React from "react";

const ShimmerCards = () => {
  return (
    <div className="px-6 animate-pulse">
      {/* Title shimmer */}
      <div className="h-6 w-32 bg-gray-700 rounded mb-4"></div>

      {/* Horizontal cards shimmer */}
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">
          {Array(6)
            .fill("")
            .map((_, i) => (
              <div key={i} className="w-48 h-72 bg-gray-800 rounded-lg"></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ShimmerCards;
