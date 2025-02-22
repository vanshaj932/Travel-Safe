"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/button";

interface Location {
  latitude: number;
  longitude: number;
}

interface SOSDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SOSDialog({ open, onClose }: SOSDialogProps) {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [sendingLocation, setSendingLocation] = useState(false);

  // Fetch user's location when SOS is activated
  useEffect(() => {
    if (isEmergencyMode) {
        const fetchLocation = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const locationData = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                  };
                  setCurrentLocation(locationData);
                  sendLocationToRescueCenter(locationData);
                },
                (error) => {
                  let errorMessage = "";
                  switch (error.code) {
                    case error.PERMISSION_DENIED:
                      errorMessage = "User denied the request for Geolocation.";
                      break;
                    case error.POSITION_UNAVAILABLE:
                      errorMessage = "Location information is unavailable.";
                      break;
                    case error.TIMEOUT:
                      errorMessage = "The request to get user location timed out.";
                      break;
                    case error.UNKNOWN_ERROR:
                    default:
                      errorMessage = "An unknown error occurred.";
                      break;
                  }
                  console.error("Error getting location:", errorMessage);
                  alert(errorMessage); // Show error to user
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Ensures fresh location data
              );
            } else {
              console.error("Geolocation is not supported by this browser.");
              alert("Geolocation is not supported by your browser.");
            }
          };
          

      // Fetch initial location
      fetchLocation();

      // Continuously send location every 5 seconds
      const locationInterval = setInterval(fetchLocation, 5000);

      return () => clearInterval(locationInterval);
    }
  }, [isEmergencyMode]);

  // Handle countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isEmergencyMode && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setSendingLocation(true);
    }
    return () => clearInterval(timer);
  }, [isEmergencyMode, countdown]);

  // Simulate sending location to a rescue center
  const sendLocationToRescueCenter = async (location: Location) => {
    console.log("Sending location to rescue center...", location);

    // In a real application, replace with an API call like:
    // await fetch("/api/send-location", {
    //   method: "POST",
    //   body: JSON.stringify({ location }),
    // });

    setSendingLocation(true);
  };

  const handleCancelSOS = () => {
    setIsEmergencyMode(false);
    setCountdown(5);
    setSendingLocation(false);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {isEmergencyMode ? (
              <div className="text-red-600 flex items-center justify-center gap-2">
                <AlertCircle className="animate-pulse" />
                Emergency Mode Activated
              </div>
            ) : (
              "Emergency SOS"
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 p-6">
          {isEmergencyMode ? (
            <>
              {sendingLocation ? (
                <div className="text-lg font-semibold text-red-600">
                  Sending live location to nearby rescue centers...
                </div>
              ) : (
                <div className="text-2xl font-bold text-red-600">
                  Sending Alert in {countdown}...
                </div>
              )}
              <p className="text-center text-gray-600">
                Your current location:
                <br />
                {currentLocation ? (
                  <span className="font-mono">
                    {currentLocation.latitude.toFixed(6)}, {currentLocation.longitude.toFixed(6)}
                  </span>
                ) : (
                  "Getting location..."
                )}
              </p>
              <Button variant="destructive" className="w-full" onClick={handleCancelSOS}>
                Cancel Emergency Alert
              </Button>
            </>
          ) : (
            <>
              <Phone className="h-12 w-12 text-red-600 animate-pulse" />
              <p className="text-center text-gray-600">
                Click to activate emergency mode. This will alert emergency services and your emergency contacts.
              </p>
              <div className="flex gap-4 w-full">
                <Button variant="destructive" className="flex-1" onClick={() => setIsEmergencyMode(true)}>
                  Activate SOS
                </Button>
                <Button variant="outline" className="flex-1" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
