"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaVideo, FaMicrophone, FaPlus, FaPhoneSlash } from "react-icons/fa"; // Importing icons

const FakeVideoCall: React.FC = () => {
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const fakeVideoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [callActive, setCallActive] = useState(false); // Controls call visibility

  useEffect(() => {
    if (callActive) {
      // Get user camera stream
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
          setStream(mediaStream);
          if (userVideoRef.current) {
            userVideoRef.current.srcObject = mediaStream;
          }
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });

      // Play the fake video when the call starts
      if (fakeVideoRef.current) {
        fakeVideoRef.current.load();
        fakeVideoRef.current.play();
      }
    } else {
      endCall();
    }
  }, [callActive]);

  const endCall = () => {
    // Stop camera stream
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }

    // Stop fake video playback
    if (fakeVideoRef.current) {
      fakeVideoRef.current.pause();
      fakeVideoRef.current.currentTime = 0;
    }

    setCallActive(false); // Close the video call window
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {!callActive && (
        <button
          onClick={() => setCallActive(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Start Video Call
        </button>
      )}

      {callActive && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
          {/* Receiver's Video (Large) */}
          <video
            ref={fakeVideoRef}
            autoPlay
            playsInline
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/videos/fakevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* User's Video (Small Thumbnail) */}
          <div className="absolute bottom-20 left-4 w-28 h-20 border-2 border-white rounded-md overflow-hidden">
            <video
              ref={userVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Call Controls */}
          <div className="absolute bottom-5 flex space-x-4 bg-gray-800 bg-opacity-70 px-4 py-2 rounded-full">
            <button className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
              <FaVideo />
            </button>
            <button className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
              <FaMicrophone />
            </button>
            <button className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full">
              <FaPlus />
            </button>
            <button
              onClick={endCall}
              className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full"
            >
              <FaPhoneSlash />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeVideoCall;
