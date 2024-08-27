"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BlogPost } from "@/types";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DOMPurify from "dompurify";
import RecCard from "@/components/RecCard";

// author
// :
// email
// :
// "bruke@a2sv.org"
// image
// :
// "https://res.cloudinary.com/djtkzulun/image/upload/v1684307248/Portfolio/dgxjqlgpys1imwnw2bhq.png"
// name
// :
// "Bruke Mekonen"
// role
// :
// "user"
// _id
// :
// "64e0623213118e7f1f0a59b0"
// [[Prototype]]
// :
// Object
// createdAt
// :
// "2023-08-19T06:36:17.363Z"
// description
// :
// "Code refactoring is an essential practice in software development that often separates novice programmers from experienced engineers. Refactoring isn't just about tidying up your code; it's about improving its structure, readability, and maintainability. Let's delve into the key aspects of mastering the art of code refactoring."
// image
// :
// "https://res.cloudinary.com/djtkzulun/image/upload/v1692426976/A2sv/eqg5kgjzu8o4592darvb.jpg"
// isPending
// :
// true
// likes
// :
// 0
// relatedBlogs
// :
// []
// skills
// :
// (2) ['Web Development', 'Mobile']
// tags
// :
// (2) ['Programming', 'Code']
// title
// :
// "Mastering the Art of Code Refactoring"
// updatedAt
// :
// "2023-08-19T06:36:17.363Z"
// __v
// :
// 0
// _id
// :
// "64e062e113118e7f1f0a59b5"

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}
const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  const { id } = params;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(blog);

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

  const sanitizedHtml = DOMPurify.sanitize(blog?.description || "");

  return (
    <div className="flex flex-col justify-center items-center px-24">
      <div className="flex flex-col justify-center items-center">
        <h1
          className="text-2xl font-bold"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {blog?.title}
        </h1>
        <p className="uppercase text-sm mt-5">
          {blog?.tags.join(", ")} | <span>2 min read</span>
        </p>
      </div>

      <div className="mt-6">
        {blog?.image && (
          <Image
            src={blog?.image}
            className="fit-content"
            alt="blog image"
            width={800}
            height={800}
          />
        )}
      </div>

      {blog?.author && (
        <div className="mt-5 flex flex-col items-center justify-center">
          <Avatar>
            <AvatarImage src={blog.author.image} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="mt-2">
            <p className="text-xs uppercase my-2">
              {blog.author.name} | Software Engineer
            </p>
            <p className="text-center uppercase text-xs text-[#264FAD] font-semibold cursor-pointer">
              @{blog.author.name}
            </p>
          </div>

          <div className="flex justify-center">
            <p
              className="text-[#737373] mt-5 w-[70%]"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          </div>
        </div>
      )}

      <div className="mt-24">
        <h1 className="font-bold mb-4 text-xl">Related Blogs</h1>
        <div className="grid grid-cols-3 gap-8">
          <RecCard />
          <RecCard />
          <RecCard />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
