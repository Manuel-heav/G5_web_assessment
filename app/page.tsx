"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();
  router.push("/blogs");
  return <div></div>;
};

export default Home;
