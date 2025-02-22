"use client";
import React, { useState, useEffect } from "react";

interface Alert {
  id: number;
  type: string;
  severity: "Low" | "Moderate" | "Severe" | "Extreme";
  location: string;
  message: string;
  timestamp: string;
}

const dummyAlerts: Alert[] = [
  { id: 1, type: "Storm", severity: "Severe", location: "Upper Lake", message: "Heavy storm expected tonight.", timestamp: "2025-02-21 18:00" },
  { id: 2, type: "Flood", severity: "Extreme", location: "Van Vihar", message: "Flash flood warning in effect.", timestamp: "2025-02-21 16:30" },
  { id: 3, type: "Earthquake", severity: "Moderate", location: "Kanha Fun City", message: "Minor tremors detected, stay alert.", timestamp: "2025-02-21 14:15" },
];

export default function WeatherAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>(dummyAlerts);

  useEffect(() => {
    // Fetch real-time weather alerts from an API in the future
  }, []);

  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Weather & Disaster Alerts</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Stay updated with the latest weather warnings and disaster alerts.
      </p>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="border-b py-3">
            <strong className={`text-${alert.severity === "Extreme" ? "red" : alert.severity === "Severe" ? "yellow" : "green"}-500`}>
              {alert.type} ({alert.severity})
            </strong>{" "}
            - {alert.location}
            <p className="text-gray-500 dark:text-gray-400 text-sm">{alert.message}</p>
            <span className="text-xs text-gray-400 dark:text-gray-500">{alert.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
