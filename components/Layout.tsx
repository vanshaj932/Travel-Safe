// components/Layout.tsx
"use client";
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Layout({ children, darkMode, toggleDarkMode }: LayoutProps) {
  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen transition-colors duration-300`}
    >
      <Head>
        <title>SafeTraveler - Stay Safe While Exploring</title>
        <meta
          name="description"
          content="Real-time safety alerts, trusted community ratings, and emergency SOS – all in one app."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
