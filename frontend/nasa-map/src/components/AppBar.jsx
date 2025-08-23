import React, { useState } from "react";
import { FiGlobe, FiBarChart2, FiInfo } from "react-icons/fi";
import AboutDialog from "./AboutDialog";
import PredictDialog from "./PredictDialog";

export default function AppBar({ currentView, setCurrentView }) {
  const [showAbout, setShowAbout] = useState(false);
  const [showPredict, setShowPredict] = useState(false);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setShowAbout(true);
  };

  const handlePredictClick = (e) => {
    e.preventDefault();
    setShowPredict(true);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  const handleCloseAbout = () => {
    setShowAbout(false);
  };

  const handleClosePredict = () => {
    setShowPredict(false);
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
            Canopy
          </span>
        </div>
        <nav className="flex gap-10">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleViewChange("dashboard");
            }}
            className={`font-semibold text-lg transition cursor-pointer ${
              currentView === "dashboard"
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <FiBarChart2 className="w-4 h-4 inline mr-1" />
            Dashboard
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleViewChange("map");
            }}
            className={`font-semibold text-lg transition cursor-pointer ${
              currentView === "map"
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <FiGlobe className="w-4 h-4 inline mr-1" />
            Map
          </a>
          <a
            href="#"
            onClick={handleAboutClick}
            className="text-gray-300 hover:text-white font-semibold text-lg transition cursor-pointer"
          >
            <FiInfo className="w-4 h-4 inline mr-1" />
            About
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePredictClick}
            className="text-xs text-gray-400 font-medium bg-gray-900 px-3 py-1 border border-transparent hover:border-white cursor-pointer transition-all duration-500 rounded-none"
          >
            <FiBarChart2 className="w-4 h-4 inline mr-2" />
            Predict
          </button>
        </div>
      </header>
      <AboutDialog isOpen={showAbout} onClose={handleCloseAbout} />
      <PredictDialog isOpen={showPredict} onClose={handleClosePredict} />
    </>
  );
}
