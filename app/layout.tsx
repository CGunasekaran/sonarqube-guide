import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SonarQube Guide - Complete Setup & Feature Documentation",
  description:
    "Comprehensive guide to setting up SonarQube locally, understanding its features, and integrating it into your development workflow.",
  keywords:
    "sonarqube, code quality, static analysis, security, setup guide, tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen`}
      >
        <Header />
        <main className="min-h-[calc(100vh-300px)]">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
