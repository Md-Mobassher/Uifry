import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Unifry",
  description: "This is a Unifry website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-[1090px] mx-auto lg:px-6 md:px-5 px-4">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
