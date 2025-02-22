// pages/index.js
"use client";
import { useState } from 'react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import SafetyMap from '../../components/SafetyMap';
import Testimonials from '../../components/Testimonials';
import CallToAction from '../../components/CallToAction';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <Hero />
      {/* <Features /> */}
      <SafetyMap />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}