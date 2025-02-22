"use client";
import React, { useState } from "react";
import { Bell, Shield, CloudRain, Moon } from "lucide-react";
import SOSDialog from "@/components/SOSDialog";
import Link from "next/link";

export default function Features() {
  const [showSOSDialog, setShowSOSDialog] = useState(false);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Key Safety Features</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SOS Feature */}
          <div
            onClick={() => setShowSOSDialog(true)}
            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 flex items-center justify-center rounded-lg mb-4">
              <Bell className="text-red-600 dark:text-red-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">SOS Emergency Alerts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instantly send distress signals with your precise location to emergency contacts and local authorities.
            </p>
          </div>

          {/* Other Features */}
          <Link href="/GetStarted/SafetyRating">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 flex items-center justify-center rounded-lg mb-4">
              <Shield className="text-green-600 dark:text-green-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Safety Ratings</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access crowd-sourced safety ratings from fellow travelers to make informed decisions about your surroundings.
            </p>
          </div>
          </Link>

          <Link href="/GetStarted/WeatherAlert">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center rounded-lg mb-4">
              <CloudRain className="text-blue-600 dark:text-blue-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Weather & Disaster Alerts</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Stay ahead of severe weather and natural disasters with real-time notifications and evacuation routes.
            </p>
          </div>
          </Link>

          <Link href="/GetStarted/NightSafety">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center rounded-lg mb-4">
              <Moon className="text-indigo-600 dark:text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Nighttime Safety Guide</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Navigate unfamiliar areas after dark with well-lit route suggestions and safety corridor recommendations.
            </p>
          </div>
        </Link>
        
          <Link href="/GetStarted/FakeVideoCall">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center rounded-lg mb-4">
              <Moon className="text-indigo-600 dark:text-indigo-400" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fake Video Call</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Creates the impression of a fake video call to help you get out of uncomfortable situations.
            </p>
          </div>
        </Link>
        </div>

        {/* Importing the SOS Dialog */}
        <SOSDialog open={showSOSDialog} onClose={() => setShowSOSDialog(false)} />
      </div>
    </section>
  );
}
