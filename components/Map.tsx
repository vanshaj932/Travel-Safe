"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mapTilerAPIKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY || "";
const orsAPIKey = process.env.NEXT_PUBLIC_ORS_API_KEY || ""; // Make sure to add your OpenRouteService API key

// Custom marker icons
const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Map view updater component
const MapUpdater = ({ center, bounds }: { center: LatLngExpression, bounds?: L.LatLngBounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds) {
      map.fitBounds(bounds);
    } else {
      map.setView(center, 12);
    }
  }, [map, center, bounds]);
  return null;
};

const TravelMap = () => {
  const [currentLocation, setCurrentLocation] = useState<LatLngExpression | null>(null);
  const [destination, setDestination] = useState("");
  const [destinationCoords, setDestinationCoords] = useState<LatLngExpression | null>(null);
  const [routePath, setRoutePath] = useState<LatLngExpression[]>([]);
  const [mapBounds, setMapBounds] = useState<L.LatLngBounds | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
        setError("Unable to get your current location");
      },
      { enableHighAccuracy: true }
    );
  }, []);

  // Function to fetch coordinates for a place name
  const fetchCoordinates = async (place: string) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${orsAPIKey}&text=${encodeURIComponent(place)}`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].geometry.coordinates;
        return { lat, lng };
      }
      throw new Error("Location not found");
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setError("Could not find the specified location");
      return null;
    }
  };

  // Function to fetch the route between two points
  const fetchRoute = async (start: LatLngExpression, end: LatLngExpression) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${orsAPIKey}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        // Convert coordinates from [longitude, latitude] to [latitude, longitude]
        const coordinates = data.features[0].geometry.coordinates.map(
          ([lng, lat]: number[]) => ({ lat, lng })
        );
        return coordinates;
      }
      throw new Error("Route not found");
    } catch (error) {
      console.error("Error fetching route:", error);
      setError("Could not calculate the route");
      return [];
    }
  };

  // Handle route calculation
  const calculateRoute = async () => {
    if (!currentLocation) {
      setError("Current location not available");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const coords = await fetchCoordinates(destination);
      if (coords) {
        setDestinationCoords(coords);
        const routeCoordinates = await fetchRoute(currentLocation, coords);
        setRoutePath(routeCoordinates);
        
        // Calculate bounds to fit both points and the route
        const bounds = L.latLngBounds([
          [currentLocation.lat, currentLocation.lng],
          [coords.lat, coords.lng]
        ]);
        setMapBounds(bounds);
      }
    } catch (error) {
      console.error("Error calculating route:", error);
      setError("Failed to calculate the route");
    }
    
    setLoading(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Travel Route Planner</h2>

      <div className="flex items-center space-x-4 mb-6">
        <Input
          type="text"
          placeholder="Enter destination..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && calculateRoute()}
          className="flex-1"
        />
        <Button 
          onClick={calculateRoute}
          disabled={loading || !currentLocation}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {loading ? "Calculating..." : "Show Route"}
        </Button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <div className="h-[600px] w-full rounded-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={currentLocation || [51.505, -0.09]}
          zoom={12}
          className="h-full w-full"
        >
          <TileLayer url={`https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=${mapTilerAPIKey}`} />
          
          {mapBounds && <MapUpdater center={currentLocation!} bounds={mapBounds} />}

          {currentLocation && (
            <Marker position={currentLocation} icon={customIcon}>
              <Popup>Your Location</Popup>
            </Marker>
          )}

          {destinationCoords && (
            <Marker position={destinationCoords} icon={customIcon}>
              <Popup>Destination: {destination}</Popup>
            </Marker>
          )}

          {routePath.length > 0 && (
            <Polyline
              positions={routePath}
              color="blue"
              weight={4}
              opacity={0.7}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default TravelMap;