import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "IronForge Gym | Build Your Strongest Self",
  description:
    "IronForge Gym provides professional training, modern facilities, expert trainers, and flexible membership plans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />

        <main className="min-h-screen pt-[73px]">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
