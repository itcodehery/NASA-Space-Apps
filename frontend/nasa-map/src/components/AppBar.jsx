import React from "react";

export default function AppBar() {
  return (
    <header className="w-full bg-white shadow-lg py-3 px-8 flex items-center justify-between fixed top-0 left-0 z-[1100] border-b border-gray-200">
      <div className="flex items-center gap-4">
        <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="NASA Logo" className="h-10 w-10 rounded-full border border-gray-300 bg-white" />
        <span className="text-gray-900 text-2xl font-extrabold tracking-tight font-sans">GHG Map Explorer</span>
      </div>
      <nav className="flex gap-8">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-500">Home</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-500">About</a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-500">Data Sources</a>
      </nav>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 font-mono">Powered by NASA Space Apps</span>
      </div>
    </header>
  );
}
