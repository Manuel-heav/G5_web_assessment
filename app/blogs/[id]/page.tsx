"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BlogPost } from "@/types";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}
const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const router = useRouter();
  const { id } = params;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get<BlogPost>(
          `https://a2sv-backend.onrender.com/api/blogs/${id}`
        );
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog details");
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {blog && (
        <>
          <img src={blog.image} alt={blog.title} />
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
          {blog.author && (
            <div>
              <img src={blog.author.image} alt={blog.author.name} />
              <p>Author: {blog.author.name}</p>
              <p>Email: {blog.author.email}</p>
              <p>Role: {blog.author.role}</p>
            </div>
          )}
          <p>Tags: {blog.tags.join(", ")}</p>
          <p>Likes: {blog.likes}</p>
          <p>Skills: {blog.skills.join(", ")}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetailPage;
