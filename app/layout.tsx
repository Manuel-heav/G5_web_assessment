import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog Application for Web Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
