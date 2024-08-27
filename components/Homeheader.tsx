import React from "react";

const Homeheader = () => {
  return (
    <div className="w-[60%] flex justify-between items-center">
      <h1 className="font-bold text-xl">Blogs </h1>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-full p-2 border"
        />
        <button className="rounded-full px-4 py-2 bg-primaryBlue text-white">
          + New Blog
        </button>
      </div>
    </div>
  );
};

export default Homeheader;
