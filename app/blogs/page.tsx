"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { fetchBlogs, setCurrentPage } from "@/lib/redux/slices/blogsSlice";
import Link from "next/link";
import Homeheader from "@/components/Homeheader";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const dispatch = useAppDispatch();
  const { displayedBlogs, loading, error, currentPage, postsPerPage, blogs } =
    useAppSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(currentPage));
  }, [dispatch, currentPage]);

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  console.log(blogs);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div>
      <Homeheader />
      <div className="flex flex-col gap-4 mt-8 justify-center items-center">
        {displayedBlogs.map((blog) => (
          <BlogCard
            id={blog._id}
            title={blog.title}
            key={blog._id}
            name={blog.author?.name}
            profileImage={blog.author?.image}
            image={blog.image}
            description={blog.description}
            tags={blog.tags}
            createdAt={blog.createdAt}
          />
        ))}
      </div>
      <div className="pagination flex items-center justify-center gap-4 mt-6">
        <button
          className="pagination-button bg-[#264FAD] text-white hover:bg-[#1e3a8a] disabled:bg-[#cbd5e1] disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button bg-[#264FAD] text-white hover:bg-[#1e3a8a] disabled:bg-[#cbd5e1] disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
