"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import TravelMap from "@/components/Map";
import Features from "@/components/Features";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
      <TravelMap />
      <Features />
    </Layout>
  );
};

export default Page;
