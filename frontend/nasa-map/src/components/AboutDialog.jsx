import React from "react";
import {
  FiX,
  FiGlobe,
  FiBarChart2,
  FiUsers,
  FiAlertTriangle,
  FiCalendar,
} from "react-icons/fi";

export default function AboutDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-none p-8 max-w-md mx-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-2xl font-bold"
            style={{ fontFamily: "Monoir, sans-serif" }}
          >
            About Canopy
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
            aria-label="Close dialog"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <p className="flex items-start gap-2">
            <FiGlobe className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>
              Canopy is a NASA Space Apps Challenge project designed to
              visualize greenhouse gas emissions data across the globe.
            </span>
          </p>

          <p className="flex items-start gap-2">
            <FiBarChart2 className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>
              Using interactive mapping technology, users can explore
              environmental data from 1970 to 2020, focusing on CO₂, CH₄, and
              N₂O emissions.
            </span>
          </p>

          <p className="flex items-start gap-2">
            <FiUsers className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>
              Built with React, Vite, MapTiler, and modern web technologies to
              provide an intuitive interface for environmental data exploration.
            </span>
          </p>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <FiCalendar className="w-3 h-3" />
              NASA Space Apps Challenge 2025
            </p>
            <div className="text-xs text-gray-400">
              <div className="relative mt-2">
                <select
                  onChange={(e) => window.open(e.target.value, "_blank")}
                  className="bg-gray-800 text-gray-300 px-2 py-1 w-full cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <option value="#">Meet Our Team</option>
                  <option value="https://github.com/Kanika244">
                    Kanika Jain
                  </option>
                  <option value="https://github.com/itcodehery">
                    Hari Prasad
                  </option>
                  <option value="https://github.com/DarshanHeble">
                    Darshan Heble
                  </option>
                  <option value="https://github.com/ArdenDiago">
                    Arden Diago Savio
                  </option>
                  <option value="https://github.com/Kartik2903">
                    Kartik Dewnani
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
