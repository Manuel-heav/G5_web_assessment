import Image from "next/image";
import Link from "next/link";
import React from "react";

const headerLinks = [
  { name: "Home", href: "#" },
  { name: "Teams", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Get Involved", href: "#" },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-12">
      <Image src="/images/logo.png" height={120} width={120} alt="Logo" />

      <div className="flex items-center justify-between gap-8">
        {headerLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className="font-semibold text-[#565656] text-base hover:text-primaryBlue border-b-[3px] border-transparent hover:border-primaryBlue transition duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <button className="font-semibold">Login</button>
        <button className="bg-primaryBlue px-8 py-2 text-white rounded-lg">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Header;
