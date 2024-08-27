import AuthIllustration from "@/components/AuthIllustration";
import Image from "next/image";
import { useRouter } from "next/router";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="md:grid grid-cols-2">
        <div className="hidden md:flex col-span-1">
          <AuthIllustration />
        </div>
        <div>{children}</div>
      </div>
    </main>
  );
}
