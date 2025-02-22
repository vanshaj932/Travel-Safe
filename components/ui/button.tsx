"use client";
import React from "react";

export const Button = ({ children, onClick, className }: any) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
