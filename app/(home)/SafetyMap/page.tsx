"use client";

import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker, Circle } from "@react-google-maps/api";
import { MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const defaultCenter = { lat: 22.5726, lng: 88.3639 }; // Default location (Kolkata)

// Sample Safe & Unsafe Locations
const safeZones = [{ lat: 22.575, lng: 88.36 }, { lat: 22.58, lng: 88.37 }];
const unsafeZones = [{ lat: 22.57, lng: 88.365 }, { lat: 22.565, lng: 88.355 }];

export default function SafetyMap() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [currentLocation, setCurrentLocation] = useState(defaultCenter);

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  return (
        <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
    
    <section id="map" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Global Safety Map</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Explore safety ratings worldwide and check the safety status of your next destination.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 h-96 border border-gray-200 dark:border-gray-700">
          <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap mapContainerStyle={containerStyle} center={currentLocation} zoom={14}>
              {/* User's Location */}
              <Marker position={currentLocation} label="📍 You" />

              {/* Safe Zones (Green) */}
              {safeZones.map((zone, index) => (
                <Circle key={`safe-${index}`} center={zone} radius={300} options={{
                  fillColor: "rgba(0, 255, 0, 0.3)",
                  strokeColor: "#00ff00",
                  strokeWeight: 1,
                }} />
              ))}

              {/* Unsafe Zones (Red) */}
              {unsafeZones.map((zone, index) => (
                <Circle key={`unsafe-${index}`} center={zone} radius={300} options={{
                  fillColor: "rgba(255, 0, 0, 0.3)",
                  strokeColor: "#ff0000",
                  strokeWeight: 1,
                }} />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
            <MapPin size={18} />
            Check Your Location's Safety
          </button>
        </div>
      </div>
    </section>
    </Layout>
  );
}
