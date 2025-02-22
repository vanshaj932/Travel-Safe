// components/Hero.js
"use client";
import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/api/placeholder/1920/1080')`,
          filter: 'blur(2px) brightness(0.6)'
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Stay Safe.<br />Travel Smart.
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Real-time safety alerts, trusted community ratings, and emergency SOS – all in one app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/GetStarted" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
            <a 
              href="#" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg text-center transition-all duration-300"
            >
              Try Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}