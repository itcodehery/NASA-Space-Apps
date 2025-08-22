import React, { useState } from "react";
import AboutDialog from "./AboutDialog";

export default function AppBar() {
  const [showAbout, setShowAbout] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAbout(true);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  return (
    <>
      <header className="w-full relative top-0 left-0 z-[1100] bg-black shadow-lg px-10 py-5 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-4">
          {/* <img src="/vite.svg" alt="Logo" className="h-10 w-10" /> */}
          <span
            className="text-white text-3xl font-extrabold tracking-tight"
            style={{ fontFamily: "Monoir, sans-serif" }}
          >
            MAPXPLORE
          </span>
        </div>
        <nav className="flex gap-10">
          <a
            href="#"
            className="text-gray-300 hover:text-white font-semibold text-lg transition"
          >
            Home
          </a>
          <a
            href="#"
            onClick={handleAboutClick}
            className="text-gray-300 hover:text-white font-semibold text-lg transition cursor-pointer"
          >
            About
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400 font-medium bg-gray-900 px-3 py-1">
            NASA Space Apps
          </span>
        </div>
      </header>
      <AboutDialog isOpen={showAbout} onClose={handleCloseAbout} />
    </>
  );
}
