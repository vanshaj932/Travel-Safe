"use client";
import React, { useState } from "react";
import CommunitySafetyRatings from "@/components/CommunitySafetyRatings";
import Layout from "@/components/Layout";

export default function SafetyRatingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
<Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Community Safety Ratings</h2>
        <CommunitySafetyRatings />
      </div>
      </Layout>
  );
}
