"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils"; // Optional: Utility function for merging classNames

interface DialogProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md relative animate-fadeIn"
      >
        {children}
      </div>
    </div>
  );
};

interface DialogContentProps {
  children: ReactNode;
  className?: string;
}

export const DialogContent: React.FC<DialogContentProps> = ({ children, className }) => (
  <div className={cn("relative p-6", className)}>{children}</div>
);

export const DialogHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="border-b pb-3">{children}</div>
);

export const DialogTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-center">{children}</h2>
);

interface DialogTriggerProps {
  children: ReactNode;
  onClick: () => void;
}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, onClick }) => (
  <button onClick={onClick} className="cursor-pointer">
    {children}
  </button>
);
