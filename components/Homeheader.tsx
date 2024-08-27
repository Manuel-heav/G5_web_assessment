import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { setSearchQuery } from "@/lib/redux/slices/blogsSlice";

const Homeheader: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.blogs.searchQuery);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <div className="w-[60%] flex justify-between items-center mb-4">
      <h1 className="font-bold text-xl">Blogs</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="rounded-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="rounded-full px-4 py-2 bg-[#264FAD] text-white hover:bg-[#1e3a8a] transition-colors">
          + New Blog
        </button>
      </div>
    </div>
  );
};

export default Homeheader;
