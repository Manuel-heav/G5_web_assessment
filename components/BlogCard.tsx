import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { convertDateFormatToLocale } from "@/utils/customFuncs";
import DOMPurify from "dompurify";

interface BlogCardProps {
  id: string;
  name: string | undefined;
  profileImage: string | undefined;
  createdAt: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
}

const BlogCard = ({
  id,
  name,
  profileImage,
  createdAt,
  title,
  image,
  description,
  tags,
}: BlogCardProps) => {
  const sanitizedHtml = DOMPurify.sanitize(description);

  return (
    <Link href={`/blogs/${id}}`} className="p-2 w-[80%]">
      <hr className="mb-4" />
      <div className="flex items-end gap-2 mb-6">
        <Avatar>
          <AvatarImage src={profileImage} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <p className="font-bold">
            {name ? name : "John"} .{" "}
            <span className="text-xs text-[#9C9C9C] font-normal">
              {convertDateFormatToLocale(createdAt)}
            </span>
          </p>
          <p className="capitalize text-xs text-[#9C9C9C]">SOFTWARE ENGINEER</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12">
        <div className="col-span-2 pb-4">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <p
            className="text-[#737373]"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          />

          <div className="flex gap-4 mt-4">
            {tags.map((tag) => (
              <div className="bg-[#F5F5F5] px-4 py-2 rounded-full text-[#8E8E8E]">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div>
          <Image
            src={image}
            height={400}
            width={300}
            className="fit-content rounded-xl"
            alt="Blog Image"
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
