"use client";
import React, { useState } from "react";
import NightSafetyGuide from "@/components/NightSafetyGuide";
import Layout from "@/components/Layout";
import Features from "@/components/Features";

export default function NightSafetyPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
      <div className="container mx-auto px-4">
        <Features />
      </div>
    </Layout>
  );
}