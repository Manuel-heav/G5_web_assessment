import React from "react";

const BlogCardSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-[80%] p-4 bg-white border rounded-lg shadow-md animate-pulse">
      <hr className="mb-4" />
      <div className="flex items-end gap-2 mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2 space-y-4">
          <div className="h-6 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
        </div>
        <div className="w-full h-full bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
