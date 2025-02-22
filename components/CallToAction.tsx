// components/CallToAction.js
"use client";
import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Join Our Global Community of Safe Travelers</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#" 
            className="px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Download App
          </a>
          <a 
            href="#" 
            className="px-8 py-3 border-2 border-white hover:bg-white/10 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Join the Safety Community
          </a>
        </div>
        <a href="#" className="inline-block mt-6 text-white/80 hover:text-white underline">
          Report a Safety Concern
        </a>
      </div>
    </section>
  );
}