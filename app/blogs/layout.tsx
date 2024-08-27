import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="px-12 py-4">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
}
