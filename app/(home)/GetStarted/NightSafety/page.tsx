"use client";
import React, { useState } from "react";
import NightSafetyGuide from "@/components/NightSafetyGuide";
import Layout from "@/components/Layout";

export default function NightSafetyPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nighttime Safety Guide</h2>
        <NightSafetyGuide />
      </div>
    </Layout>
  );
}
