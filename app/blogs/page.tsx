"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hook";
import { fetchBlogs, setCurrentPage } from "@/lib/redux/slices/blogsSlice";
import Link from "next/link";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  return (
    <div>
      {displayedBlogs.map((blog) => (
        <div key={blog._id}>
          <img src={blog.image} alt={blog.title} />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Link href={`/blog/${blog._id}`}>Read more</Link>
        </div>
      ))}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
