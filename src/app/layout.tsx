import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Koncerty i wydarzenia artystyczne | Numio",
  description: "Koncerty i wydarzenia artystyczne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="bg-black text-white font-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
