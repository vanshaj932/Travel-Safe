"use client";
import React, { useState } from "react";
import FakeVideoCall from "@/components/FakeVideoCall";
import Layout from "@/components/Layout";

export default function FakeVideoCallPage() {
  const [darkMode, setDarkMode] = useState(false);

  console.log("FakeVideoCallPage is rendering...");

  return (
    <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Fake Video Call</h2>
        <FakeVideoCall open={true} onClose={() => console.log("Call ended")} />
      </div>
    </Layout>
  );
}
