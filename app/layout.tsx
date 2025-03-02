'use client';

import React from "react";
import { Analytics } from '@vercel/analytics/next';
import { Jost } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Jost({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} antialiased`}>
      <body className="mx-4">
        <Navbar />
        {children}
        <ToastContainer
          autoClose={3000}
          position="top-center"
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
        />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
