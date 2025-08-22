import React, { useRef, useEffect, useState } from "react";
import { FiMapPin, FiFilter, FiCalendar, FiLayers } from 'react-icons/fi';
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { fetchMethanePlumes } from "../api";

export default function Map({ filters, year }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: -98.5, lat: 39.8 };
  const zoom = 4;

  const [plumeGeoJson, setPlumeGeoJson] = useState(null);

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
    
    // Fetch coordinate-based data only
    fetchMethanePlumes(year)
      .then((data) => {
        if (isMounted) {
          // Ensure data is valid GeoJSON
          const validGeoJson = data && data.type === 'FeatureCollection' ? data : {
            type: 'FeatureCollection',
            features: []
          };
          setPlumeGeoJson(validGeoJson);
        }
      })
      .catch((error) => {
        console.error('Error loading methane plumes:', error);
        if (isMounted) {
          // Fallback to empty GeoJSON on error
          setPlumeGeoJson({
            type: 'FeatureCollection',
            features: []
          });
        }
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

  const totalFacilities = plumeGeoJson?.features?.length || 0;





  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      


      <div className="absolute top-4 left-4 bg-gray-900/95 border border-gray-700 p-4 z-10">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FiLayers className="w-4 h-4" />
          Emissions Map
        </h3>
        <div className="text-sm text-gray-300 mb-2 flex items-center gap-1">
          <FiCalendar className="w-4 h-4" />
          Year: {year}
        </div>
        <div className="text-sm text-gray-300 flex items-center gap-1">
          <FiFilter className="w-4 h-4" />
          Facilities: {totalFacilities.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
