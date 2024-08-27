"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const AuthIllustration = () => {
  const pathname = usePathname();
  const isSignIn = pathname === "/auth/sign-in";

  return (
    <div className="p-8">
      <Image
        src="/images/authLogo.svg"
        width="100"
        height="200"
        alt="Auth Illustration"
      />

      <div className="flex items-center justify-center h-[80vh]">
        <Image
          src="/images/authIcon.svg"
          width="400"
          height="500"
          alt="Auth Illustration"
        />
        <div>
          <h1 className="text-4xl text-[#434343] font-bold">
            {isSignIn ? "Welcome Back" : "Welcome to A2SV"}
          </h1>
          <p className="text-lg text-[#8A8A8A] mt-5">
            {isSignIn
              ? "Login to receive blogs and learn more about A2SV"
              : "Register for free to receive blogs and learn more about A2SV"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthIllustration;
