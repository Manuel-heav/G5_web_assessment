// lib/types.ts
export interface Author {
  email: string;
  id: string;
  name: string;
  image: string;
  role: string;
  _id: string;
}

export interface BlogPost {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author | null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: string[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
}
