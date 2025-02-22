"use client";
import React, { useState } from "react";
import { MapPin, Lightbulb, Shield } from "lucide-react";

interface SafetyTip {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

const safetyTips: SafetyTip[] = [
  { id: 1, icon: <Lightbulb size={20} />, title: "Stay in Well-Lit Areas", description: "Avoid dark alleys and deserted streets. Stick to well-lit and populated areas." },
  { id: 2, icon: <Shield size={20} />, title: "Use Trusted Routes", description: "Plan your path using trusted navigation apps with real-time safety alerts." },
  { id: 3, icon: <MapPin size={20} />, title: "Share Your Location", description: "Enable live location sharing with a trusted friend or family member." },
  { id: 4, icon: <Lightbulb size={20} />, title: "Be Aware of Your Surroundings", description: "Avoid distractions like loud music or texting while walking alone at night." },
];

export default function NightSafetyGuide() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Nighttime Safety Guide</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Stay safe while traveling at night with these essential safety tips.
      </p>
      <ul>
        {safetyTips.slice(0, showMore ? safetyTips.length : 3).map((tip) => (
          <li key={tip.id} className="border-b py-3 flex items-start space-x-3">
            <div className="text-blue-500">{tip.icon}</div>
            <div>
              <strong>{tip.title}</strong>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{tip.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
