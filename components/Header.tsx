import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

      <div className="hidden md:flex items-center justify-between gap-8">
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

      <div className="hidden md:flex items-center justify-between gap-4">
        <button className="font-semibold">Login</button>
        <button className="bg-primaryBlue px-8 py-2 text-white rounded-lg">
          Donate
        </button>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <div className="md:hidden">
              <HamburgerIcon />
            </div>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col justify-between gap-8">
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
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;

function HamburgerIcon() {
  return (
    <div className="text-primaryBlue focus:outline-none">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </div>
  );
}
