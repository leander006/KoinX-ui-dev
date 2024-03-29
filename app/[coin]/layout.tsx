import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar"
import MainProvider from "@/redux/MainProvider";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "KoinX",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MainProvider>
    <html lang="en">
      <body className={inter.className}>

        <Navbar/>
        <Toaster position="top-center" />
        {children}
        </body>
    </html>
    </MainProvider>
  );
}
