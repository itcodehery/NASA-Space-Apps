import React, { useRef, useEffect, useState } from "react";
import {
  FiMapPin,
  FiFilter,
  FiCalendar,
  FiLayers,
  FiGlobe,
} from "react-icons/fi";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { fetchMethanePlumes, fetchStateEmissions } from "../services/api";

export default function Map({ filters, year }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: -98.5, lat: 39.8 };
  const zoom = 4;

  const [plumeGeoJson, setPlumeGeoJson] = useState(null);
  const [stateEmissions, setStateEmissions] = useState([]);
  const [mapMode, setMapMode] = useState("coordinates"); // 'coordinates' or 'states'

  // Best practice: Store your API key in an environment variable
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  // Color mapping for each filter - matching FilterCard colors
  const gasColors = {
    CO2: "#ef4444", // red-500
    CH4: "#ffcc3d", // green-500
    CO: "#8f8f8f", // blue-500
  };

  useEffect(() => {
    let isMounted = true;

    // Fetch both coordinate-based and state-based data
    fetchMethanePlumes().then((data) => {
      if (isMounted) setPlumeGeoJson(data);
    });

    fetchStateEmissions().then((data) => {
      if (isMounted) setStateEmissions(data);
    });

    return () => {
      isMounted = false;
    };
  }, [year]); // refetch if year changes

  useEffect(() => {
    if (!plumeGeoJson) return;

    // Remove previous map instance if it exists
    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [center.lng, center.lat],
      zoom: zoom,
    });

    map.current.on("load", () => {
      map.current.addSource("methane-plume-source", {
        type: "geojson",
        data: plumeGeoJson,
      });

      // Add facility points as circles
      map.current.addLayer({
        id: "facility-points",
        type: "circle",
        source: "methane-plume-source",
        paint: {
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["get", "ghg_quantity_(metric_tons_co2e)"],
            0, 3,
            1000000, 20
          ],
          "circle-color": "#ef4444",
          "circle-opacity": 0.7,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#ffffff"
        }
      });

      // Add facility labels
      map.current.addLayer({
        id: "facility-labels",
        type: "symbol",
        source: "methane-plume-source",
        layout: {
          "text-field": [
            "concat",
            ["get", "city_name"],
            "\n",
            ["get", "ghg_quantity_(metric_tons_co2e)"],
            " tons"
          ],
          "text-size": 10,
          "text-anchor": "top",
          "text-allow-overlap": false,
          "text-offset": [0, 0.5]
        },
        paint: {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 2
        }
      });
    });
  }, [plumeGeoJson, center.lng, center.lat, zoom]);

  const activeFilters = Object.keys(filters).filter((gas) => filters[gas]);

  // Dummy state emission data for visualization
  const stateData = [
    {
      stateCode: "TX",
      stateName: "Texas",
      CO2: 85,
      CH4: 45,
      CO: 25,
      totalEmissions: 155,
      x: 300,
      y: 400,
    },
    {
      stateCode: "CA",
      stateName: "California",
      CO2: 70,
      CH4: 35,
      CO: 20,
      totalEmissions: 125,
      x: 100,
      y: 250,
    },
    {
      stateCode: "NY",
      stateName: "New York",
      CO2: 55,
      CH4: 25,
      CO: 15,
      totalEmissions: 95,
      x: 700,
      y: 180,
    },
    {
      stateCode: "FL",
      stateName: "Florida",
      CO2: 60,
      CH4: 30,
      CO: 18,
      totalEmissions: 108,
      x: 680,
      y: 420,
    },
    {
      stateCode: "PA",
      stateName: "Pennsylvania",
      CO2: 75,
      CH4: 40,
      CO: 22,
      totalEmissions: 137,
      x: 650,
      y: 220,
    },
    {
      stateCode: "IL",
      stateName: "Illinois",
      CO2: 65,
      CH4: 35,
      CO: 20,
      totalEmissions: 120,
      x: 500,
      y: 280,
    },
    {
      stateCode: "AL",
      stateName: "Alabama",
      CO2: 50,
      CH4: 25,
      CO: 15,
      totalEmissions: 90,
      x: 550,
      y: 380,
    },
  ];

  const getStateColor = (state) => {
    const activeGases = Object.keys(filters).filter((gas) => filters[gas]);
    if (activeGases.length === 0) return "#6b7280";

    let maxValue = 0;
    let dominantGas = null;

    activeGases.forEach((gas) => {
      if (state[gas] > maxValue) {
        maxValue = state[gas];
        dominantGas = gas;
      }
    });

    return dominantGas ? gasColors[dominantGas] : "#6b7280";
  };

  const getStateOpacity = (state) => {
    const maxEmissions = Math.max(...stateData.map((s) => s.totalEmissions));
    return 0.4 + (state.totalEmissions / maxEmissions) * 0.6;
  };

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />

      {/* State-based overlay */}
      {mapMode === "states" && (
        <div className="absolute inset-0 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 960 600"
            className="state-overlay"
          >
            <g transform="translate(80, 50) scale(0.9)">
              {stateData.map((state) => {
                const color = getStateColor(state);
                const opacity = getStateOpacity(state);

                // Simplified state shapes
                const stateShapes = {
                  TX: {
                    path: "M 250 350 L 400 350 L 400 450 L 250 450 Z",
                    x: 325,
                    y: 400,
                  },
                  CA: {
                    path: "M 50 150 L 150 150 L 150 300 L 50 300 Z",
                    x: 100,
                    y: 225,
                  },
                  NY: {
                    path: "M 600 100 L 700 100 L 700 180 L 600 180 Z",
                    x: 650,
                    y: 140,
                  },
                  FL: {
                    path: "M 650 400 L 750 400 L 750 500 L 650 500 Z",
                    x: 700,
                    y: 450,
                  },
                  PA: {
                    path: "M 580 160 L 680 160 L 680 220 L 580 220 Z",
                    x: 630,
                    y: 190,
                  },
                  IL: {
                    path: "M 400 220 L 500 220 L 500 300 L 400 300 Z",
                    x: 450,
                    y: 260,
                  },
                  AL: {
                    path: "M 500 350 L 600 350 L 600 420 L 500 420 Z",
                    x: 550,
                    y: 385,
                  },
                };

                const shape = stateShapes[state.stateCode];
                if (!shape) return null;

                return (
                  <g key={state.stateCode}>
                    <path
                      d={shape.path}
                      fill={color}
                      fillOpacity={opacity}
                      stroke="#ffffff"
                      strokeWidth="2"
                      className="pointer-events-auto cursor-pointer transition-all duration-200 hover:stroke-white hover:stroke-4"
                    />
                    <text
                      x={shape.x}
                      y={shape.y - 15}
                      className="text-sm fill-white font-bold pointer-events-none"
                      textAnchor="middle"
                    >
                      {state.stateCode}
                    </text>
                    <text
                      x={shape.x}
                      y={shape.y + 5}
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
        </div>
      )}

      <div className="absolute top-4 left-4 bg-gray-900/95 border border-gray-700 p-4 z-10">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FiLayers className="w-4 h-4" />
          Emissions Map
        </h3>

        <div className="mb-3">
          <button
            onClick={() =>
              setMapMode(mapMode === "coordinates" ? "states" : "coordinates")
            }
            className="flex items-center gap-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm text-white transition-colors"
          >
            <FiGlobe className="w-4 h-4" />
            {mapMode === "coordinates" ? "Show States" : "Show Coordinates"}
          </button>
        </div>

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
