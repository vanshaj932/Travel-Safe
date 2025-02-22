"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

type Location = {
  id: number;
  name: string;
  rating: number;
  reviews: number;
};

const dummyLocations: Location[] = [
  { id: 1, name: "Upper Lake", rating: 4.5, reviews: 120 },
  { id: 2, name: "Kanha Fun City", rating: 4.2, reviews: 95 },
  { id: 3, name: "Van Vihar", rating: 3.8, reviews: 50 },
  { id: 4, name: "Kerwa Dham", rating: 3.8, reviews: 50 },
  { id: 5, name: "Gauhar Mahal", rating: 3.8, reviews: 50 },
];

export default function CommunitySafetyRatings() {
  const [ratings, setRatings] = useState<Location[]>(dummyLocations);
  const [userRating, setUserRating] = useState<number>(0);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const handleRate = (locationId: number, rating: number) => {
    setRatings((prevRatings) =>
      prevRatings.map((location) =>
        location.id === locationId
          ? {
              ...location,
              rating: (location.rating * location.reviews + rating) / (location.reviews + 1),
              reviews: location.reviews + 1,
            }
          : location
      )
    );
    setUserRating(0);
    setSelectedLocation(null);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Community Safety Ratings</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        See and contribute safety ratings based on real experiences.
      </p>
      <ul>
        {ratings.map((location) => (
          <li key={location.id} className="border-b py-3 flex justify-between items-center">
            <span>
              {location.name} - <strong>{location.rating.toFixed(1)}</strong> ⭐ ({location.reviews} reviews)
            </span>
            <button
              onClick={() => setSelectedLocation(location.id)}
              className="text-blue-500 hover:underline"
            >
              Rate
            </button>
          </li>
        ))}
      </ul>
      {selectedLocation && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold">
            Rate {ratings.find((l) => l.id === selectedLocation)?.name}
          </h4>
          <div className="flex items-center space-x-2 mt-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                size={24}
                className={`cursor-pointer ${
                  userRating >= num ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setUserRating(num)}
              />
            ))}
          </div>
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            onClick={() => handleRate(selectedLocation, userRating)}
            disabled={userRating === 0}
          >
            Submit Rating
          </button>
        </div>
      )}
    </div>
  );
}
