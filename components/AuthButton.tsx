"use client";
import { GoogleAuthProvider, signInWithPopup, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState, useEffect } from "react";

export default function AuthButton() {
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
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {user ? (
        <>
          <p>Welcome, {user.displayName}!</p>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-500 text-white rounded-md mt-2"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={handleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Sign In with Google
        </button>
      )}
    </div>
  );
}
