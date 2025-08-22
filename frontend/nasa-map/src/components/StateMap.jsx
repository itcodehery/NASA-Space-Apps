import React, { useState, useEffect } from "react";
import { FiLayers, FiFilter, FiCalendar } from "react-icons/fi";
import { fetchStateEmissions } from "../services/api";
import "./map.css";

// Dummy data for 7 states with realistic emission values
const dummyStateData = [
  {
    stateCode: "TX",
    stateName: "Texas",
    CO2: 85,
    CH4: 45,
    CO: 25,
    totalEmissions: 155,
  },
  {
    stateCode: "CA",
    stateName: "California",
    CO2: 70,
    CH4: 35,
    CO: 20,
    totalEmissions: 125,
  },
  {
    stateCode: "NY",
    stateName: "New York",
    CO2: 55,
    CH4: 25,
    CO: 15,
    totalEmissions: 95,
  },
  {
    stateCode: "FL",
    stateName: "Florida",
    CO2: 60,
    CH4: 30,
    CO: 18,
    totalEmissions: 108,
  },
  {
    stateCode: "PA",
    stateName: "Pennsylvania",
    CO2: 75,
    CH4: 40,
    CO: 22,
    totalEmissions: 137,
  },
  {
    stateCode: "IL",
    stateName: "Illinois",
    CO2: 65,
    CH4: 35,
    CO: 20,
    totalEmissions: 120,
  },
  {
    stateCode: "AL",
    stateName: "Alabama",
    CO2: 50,
    CH4: 25,
    CO: 15,
    totalEmissions: 90,
  },
];

// State coordinates and dimensions for positioning
const stateCoordinates = {
  TX: { x: 280, y: 450, width: 120, height: 80 },
  CA: { x: 120, y: 320, width: 100, height: 120 },
  NY: { x: 780, y: 220, width: 80, height: 60 },
  FL: { x: 780, y: 480, width: 80, height: 60 },
  PA: { x: 740, y: 280, width: 80, height: 60 },
  IL: { x: 520, y: 300, width: 100, height: 80 },
  AL: { x: 580, y: 420, width: 100, height: 60 },
};

// Color mapping for each gas - matching FilterCard colors
const gasColors = {
  CO2: "#ef4444", // red-500
  CH4: "#22c55e", // green-500
  CO: "#3b82f6", // blue-500
};

export default function StateMap({
  filters = ["CO2", "CH4", "CO"],
  year = 2024,
}) {
  const [stateData, setStateData] = useState([]);
  const [hoveredState, setHoveredState] = useState(null);

  // Color mapping for each filter - matching FilterCard colors
  const gasColors = {
    CO2: "#ef4444", // red-500
    CH4: "#22c55e", // green-500
    CO: "#3b82f6", // blue-500
  };

  useEffect(() => {
    let isMounted = true;
    fetchStateEmissions().then((data) => {
      if (isMounted) setStateData(data);
    });
    return () => {
      isMounted = false;
    };
  }, [year]);

  const getStateColor = (state) => {
    if (!state) return "#6b7280";

    // Handle both array and object formats for filters
    let activeGases = [];
    if (Array.isArray(filters)) {
      activeGases = filters;
    } else if (typeof filters === "object") {
      activeGases = Object.keys(filters).filter((gas) => filters[gas]);
    }

    const activeGasValues = activeGases
      .map((gas) => ({
        gas,
        value: state[gas] || 0,
      }))
      .filter((g) => g.value > 0);

    if (activeGasValues.length === 0) return "#6b7280";

    const dominant = activeGasValues.reduce((max, current) =>
      current.value > max.value ? current : max
    );

    return gasColors[dominant.gas] || "#6b7280";
  };

  const getStateOpacity = (state) => {
    if (!state) return 0.3;

    // Calculate opacity based on total emissions relative to max
    const maxEmissions = Math.max(
      ...dummyStateData.map((s) => s.totalEmissions)
    );
    return 0.4 + (state.totalEmissions / maxEmissions) * 0.6;
  };

  const activeFilters = Object.keys(filters).filter((gas) => filters[gas]);

  return (
    <div className="map-wrap">
      <div className="state-map-container">
        <svg
          width="960"
          height="600"
          viewBox="0 0 960 600"
          className="state-map"
        >
          {/* Background */}
          <rect width="960" height="600" fill="#111827" />

          {/* US Map container */}
          <g transform="translate(80, 50) scale(0.9)">
            {/* Render 7 states with dummy data - using simplified state shapes */}
            {dummyStateData.map((state) => {
              const color = getStateColor(state);
              const opacity = getStateOpacity(state);

              // Simplified state shapes based on actual geography
              const stateShapes = {
                TX: {
                  path: "M 300 350 L 450 350 L 450 450 L 300 450 L 300 380 L 320 380 L 320 350 Z",
                  x: 375,
                  y: 400,
                  labelX: 375,
                  labelY: 380,
                },
                CA: {
                  path: "M 50 150 L 120 150 L 120 280 L 50 280 L 50 200 L 70 200 L 70 150 Z",
                  x: 85,
                  y: 215,
                  labelX: 85,
                  labelY: 195,
                },
                NY: {
                  path: "M 650 100 L 720 100 L 720 160 L 650 160 L 650 120 L 680 120 L 680 100 Z",
                  x: 685,
                  y: 130,
                  labelX: 685,
                  labelY: 110,
                },
                FL: {
                  path: "M 680 400 L 720 400 L 720 480 L 680 480 L 680 440 L 700 440 L 700 400 Z",
                  x: 700,
                  y: 440,
                  labelX: 700,
                  labelY: 420,
                },
                PA: {
                  path: "M 620 160 L 680 160 L 680 200 L 620 200 L 620 170 L 650 170 L 650 160 Z",
                  x: 650,
                  y: 180,
                  labelX: 650,
                  labelY: 160,
                },
                IL: {
                  path: "M 450 220 L 520 220 L 520 280 L 450 280 L 450 240 L 480 240 L 480 220 Z",
                  x: 485,
                  y: 250,
                  labelX: 485,
                  labelY: 230,
                },
                AL: {
                  path: "M 520 380 L 580 380 L 580 430 L 520 430 L 520 400 L 550 400 L 550 380 Z",
                  x: 550,
                  y: 405,
                  labelX: 550,
                  labelY: 385,
                },
              };

              const shape = stateShapes[state.stateCode];
              if (!shape) return null;

              return (
                <g key={state.stateCode}>
                  {/* State shape */}
                  <path
                    d={shape.path}
                    fill={color}
                    fillOpacity={opacity}
                    stroke="#ffffff"
                    strokeWidth="2"
                    onMouseEnter={() => setHoveredState(state)}
                    onMouseLeave={() => setHoveredState(null)}
                    className="state-path cursor-pointer transition-all duration-200 hover:stroke-white hover:stroke-4"
                  />

                  {/* State label */}
                  <text
                    x={shape.labelX}
                    y={shape.labelY}
                    className="text-sm fill-white font-bold pointer-events-none"
                    textAnchor="middle"
                  >
                    {state.stateCode}
                  </text>

                  {/* Emission value */}
                  <text
                    x={shape.labelX}
                    y={shape.labelY + 15}
                    className="text-xs fill-white pointer-events-none"
                    textAnchor="middle"
                  >
                    {state.totalEmissions}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Hover tooltip */}
        {hoveredState && (
          <div className="absolute top-4 right-4 bg-gray-900/95 border border-gray-700 p-4 z-10 rounded-none">
            <h3 className="text-white font-semibold mb-2">
              {hoveredState.stateName}
            </h3>
            <div className="text-sm text-gray-300 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>CO2: {hoveredState.CO2}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>CH4: {hoveredState.CH4}%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>CO: {hoveredState.CO}%</span>
              </div>
              <div className="border-t border-gray-600 pt-1 mt-1 font-semibold">
                Total: {hoveredState.totalEmissions}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Controls panel */}
      <div className="absolute top-4 left-4 bg-gray-900/95 border border-gray-700 p-4 z-10">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FiLayers className="w-4 h-4" />
          Controls
        </h3>
        <div className="text-sm text-gray-300 mb-2 flex items-center gap-1">
          <FiCalendar className="w-4 h-4" />
          Year: {year}
        </div>
        <div className="text-sm text-gray-300 flex items-center gap-1">
          <FiFilter className="w-4 h-4" />
          Active Gases: {activeFilters.join(", ") || "None"}
        </div>
      </div>
    </div>
  );
}
