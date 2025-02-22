"use client";
import React from "react";

export const Input = ({ type, placeholder, value, onChange }: any) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
