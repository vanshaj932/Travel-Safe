// components/SafetyMap.js
"use client";
import React from 'react';
import { MapPin } from 'lucide-react';

export default function SafetyMap() {
  return (
    <section id="map" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Global Safety Map</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore safety ratings worldwide and check the safety status of your next destination.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 h-96 border border-gray-200 dark:border-gray-700">
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
            <div className="w-full h-full bg-cover bg-center opacity-70 dark:opacity-50" style={{backgroundImage: `url('/api/placeholder/1200/600')`}}></div>
            <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span>High Safety</span>
            </div>
            <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Low Safety</span>
            </div>
            <MapPin size={48} className="absolute text-red-600 animate-bounce" style={{top: '40%', left: '60%'}} />
          </div>
        </div>
        
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
            <MapPin size={18} />
            Check Your Location's Safety
          </button>
        </div>
      </div>
    </section>
  );
}