"use client";
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import Link from "next/link";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            SafeTraveler
          </span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/Features" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Features
          </a>
          <a href="/SafetyMap" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Safety Map
          </a>
          <a href="#testimonials" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Testimonials
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-300"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              Sign In with Google
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
