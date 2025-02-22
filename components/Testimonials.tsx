// components/Testimonials.js
"use client";
import React from 'react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Traveler Testimonials</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                <img src="/api/placeholder/80/80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">Sarah K.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Solo Backpacker</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The SOS feature gave me peace of mind during my night trek in South America. When I felt followed, I activated the alert and quickly connected with local help."
            </p>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                <img src="/api/placeholder/80/80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">James T.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Digital Nomad</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The community safety ratings helped me find great neighborhoods in Bangkok that weren't in any guidebooks. I discovered safe local spots and made friends along the way."
            </p>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                <img src="/api/placeholder/80/80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">Maya J.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Adventure Traveler</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">
              "The weather alert system warned me about flash floods in Northern Thailand with enough time to change my plans. It potentially saved my life - couldn't recommend this app more!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}