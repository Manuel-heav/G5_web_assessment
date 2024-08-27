import React from "react";

const BlogDetailPageSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center px-24">
      {/* Title and Tags */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-3/4 h-8 bg-gray-300 rounded mb-4"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Main Image */}
      <div className="mt-6 w-full max-w-4xl h-80 bg-gray-300 rounded"></div>

      {/* Author Section */}
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="mt-2 w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>

      {/* Description */}
      <div className="flex justify-center mt-5">
        <div className="w-3/4 h-24 bg-gray-300 rounded"></div>
      </div>

      {/* Related Blogs */}
      <div className="mt-24">
        <h1 className="font-bold mb-4 text-xl bg-gray-300 h-6 w-3/4 rounded"></h1>
        <div className="grid grid-cols-3 gap-8">
          <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="mt-4 h-24 bg-gray-300 rounded"></div>
          </div>
          <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="mt-4 h-24 bg-gray-300 rounded"></div>
          </div>
          <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
            <div className="mt-4 h-24 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPageSkeleton;
