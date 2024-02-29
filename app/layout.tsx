import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import Header from "@/components/Header";
import SideControl from "@/components/SideControl";
import AppContainer from "@/components/AppContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eisenhower Matrix",
  description: "Good way to manage what you need to do.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-500 sm:bg-slate-100 h-[100dvh]`}
      >
        <AppContainer>{children}</AppContainer>
      </body>
    </html>
  );
}
