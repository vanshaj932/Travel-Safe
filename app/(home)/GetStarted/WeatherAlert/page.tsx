"use client";
import React, { useState } from "react";
import WeatherAlerts from "@/components/WeatherAlerts";
import Layout from "@/components/Layout";

export default function WeatherAlertsPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Weather & Disaster Alerts</h2>
        <WeatherAlerts />
      </div>
    </Layout>
  );
}
