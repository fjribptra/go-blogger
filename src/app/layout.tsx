import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic"; 

export const metadata: Metadata = {
  title: "Go Blogger By fjribptra",
  description: "This is a blog web app created by fjribptra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar/>
        <div className="container mx-auto">
        {children}
        </div>
        </body>
    </html>
  );
}
