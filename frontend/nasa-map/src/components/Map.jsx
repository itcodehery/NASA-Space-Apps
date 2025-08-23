import React, { useRef, useEffect, useState } from "react";
import { FiMapPin, FiFilter, FiCalendar, FiLayers } from "react-icons/fi";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
// No change to imports needed if getGasDataForYear handles everything
import { getGasDataForYear } from "../services/index";

export default function Map({ filters, year, selectedState }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: -98.5, lat: 39.8 };
  const zoom = 4;

  const [gasData, setGasData] = useState([]);
  const [visualizationMode, setVisualizationMode] = useState('heatmap'); // 'heatmap' or 'circles'

  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  // STEP 1: ADD A COLOR FOR THE NEW LAYER
  const gasColors = {
    CO2: "#ef4444", // red-500
    CH4: "#f59e0b", // amber-500
    N2O: "#3b82f6", // blue-500
    TOTAL: "#a855f7", // NEW: violet-500 for Total GHG
  };

  useEffect(() => {
    let isMounted = true;

    // STEP 2: UPDATE DATA FETCHING TO ADD COLORS
    getGasDataForYear(year, filters).then((dataFromService) => {
      if (isMounted) {
        // Map over the data to add the color from our gasColors object
        let processedData = dataFromService.map((gasItem) => ({
          ...gasItem,
          color: gasColors[gasItem.type] || "#cccccc", // Add color, with a fallback
        }));

        // Filter by selected state if provided (your existing logic)
        if (selectedState && selectedState !== "ALL") {
          processedData = processedData.map((gasItem) => ({
            ...gasItem,
            data:
              gasItem.data?.filter(
                (facility) =>
                  facility.state_code === selectedState ||
                  facility.state === selectedState
              ) || [],
          }));
        }
        setGasData(processedData);
      }
    });

    // ... (no changes to fetchStateEmissions)

    return () => {
      isMounted = false;
    };
  }, [year, filters, selectedState]);

  // The map rendering useEffect DOES NOT NEED ANY CHANGES.
  // It is already generic and will automatically handle the new "TOTAL" type.
  useEffect(() => {
    if (!gasData) return;

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
      gasData.forEach(({ type, data, color }) => {
        if (!data || data.length === 0 || !color) return;

        const geoJsonData = {
          type: "FeatureCollection",
          features: data.map((facility) => ({
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [facility.longitude, facility.latitude],
            },
            properties: { ...facility, gas_type: type, color: color },
          })),
        };

        const sourceId = `${type.toLowerCase()}-source`;
        // Check if source already exists to prevent errors on fast re-renders
        if (map.current.getSource(sourceId)) {
          map.current.getSource(sourceId).setData(geoJsonData);
        } else {
          map.current.addSource(sourceId, {
            type: "geojson",
            data: geoJsonData,
          });
        }

        // Add facility points layer
        map.current.addLayer({
          id: `${type.toLowerCase()}-points`,
          type: "circle",
          source: sourceId,
          paint: {
            // This determines the size (density) based on GHG quantity
            "circle-radius": [
              "interpolate",
              ["linear"],
              ["get", "ghg_quantity_(metric_tons_co2e)"],
              0,
              3, // Min emissions, min radius
              1000000,
              20, // Max emissions, max radius
            ],
            "circle-color": color, // The color is now passed in
            "circle-opacity": 0.7,
            "circle-stroke-width": 1,
            "circle-stroke-color": "#ffffff",
          },
        });

        // NOTE: The labels layer might get very crowded with "TOTAL" on.
        // You may want to conditionally add labels later.
        map.current.addLayer({
          id: `${type.toLowerCase()}-labels`,
          type: "symbol",
          source: sourceId,
          layout: {
            "text-field": [
              "concat",
              ["get", "city_name"],
              "\n",
              ["get", "ghg_quantity_(metric_tons_co2e)"],
              " tons (",
              type,
              ")",
            ],
            "text-size": 10,
            "text-anchor": "top",
            "text-allow-overlap": false,
            "text-offset": [0, 0.5],
          },
          paint: {
            "text-color": "#000000",
            "text-halo-color": "#ffffff",
            "text-halo-width": 2,
          },
        });
      });
    });
  }, [gasData, center.lng, center.lat, zoom, visualizationMode]);

  const totalFacilities = gasData.reduce(
    (sum, gasItem) => sum + (gasItem.data?.length || 0),
    0
  );

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />

      {/* State-based overlay logic remains unchanged */}
      {/* ... */}

      {/* STEP 3: CLEANED UP INFO BOX (removed duplicate) */}
      <div className="absolute top-4 left-4 bg-gray-900/95 border border-gray-700 p-4 z-10">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FiLayers className="w-4 h-4" />
          Emissions Map
        </h3>
        <div className="text-sm text-gray-300 mb-2 flex items-center gap-1">
          <FiCalendar className="w-4 h-4" />
          Year: {year}
        </div>
        <div className="text-sm text-gray-300 mb-2 flex items-center gap-1">
          <FiFilter className="w-4 h-4" />
          Facilities: {totalFacilities}
        </div>
        <div className="text-sm text-gray-300 mb-3 flex items-center gap-1">
          <FiMapPin className="w-4 h-4" />
          Selected State: {selectedState || "All"}
        </div>
        <div className="border-t border-gray-700 pt-3">
          <div className="text-sm text-gray-300 mb-2">Visualization:</div>
          <div className="flex gap-2">
            <button
              onClick={() => setVisualizationMode('heatmap')}
              className={`px-3 py-1 text-xs rounded ${visualizationMode === 'heatmap' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Heatmap
            </button>
            <button
              onClick={() => setVisualizationMode('circles')}
              className={`px-3 py-1 text-xs rounded ${visualizationMode === 'circles' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              Circles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
