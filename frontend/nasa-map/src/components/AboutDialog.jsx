import React from 'react';

export default function AboutDialog({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000]" onClick={onClose}>
      <div 
        className="bg-gray-900 border border-gray-700 rounded-none p-8 max-w-md mx-4 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold" style={{ fontFamily: "Monoir, sans-serif" }}>
            About MAPXPLORE
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4 text-sm">
          <p>
            MAPXPLORE is a NASA Space Apps Challenge project designed to visualize 
            greenhouse gas emissions data across the globe.
          </p>
          
          <p>
            Using interactive mapping technology, users can explore environmental 
            data from 1970 to 2020, focusing on CO₂, CH₄, and CO emissions.
          </p>
          
          <p>
            Built with React, Leaflet, and modern web technologies to provide 
            an intuitive interface for environmental data exploration.
          </p>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              NASA Space Apps Challenge 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}