import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const tokyo = { lng: 139.753, lat: 35.6844 };
  const zoom = 12; // Adjusted zoom to see all polygons

  // State to manage the visibility of each layer
  const [showCo2Layer, setShowCo2Layer] = useState(true);
  const [showN2oLayer, setShowN2oLayer] = useState(false);

  // Best practice: Store your API key in an environment variable
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY; // Replaced hardcoded API key with env variable

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });

    // Use the 'load' event to make sure the map is fully loaded before adding data
    map.current.on("load", () => {
      // 1. Add the GeoJSON data source
      map.current.addSource("greenhouse-gas-source", {
        type: "geojson",
        data: "/greenhouse-data.geojson", // URL to your data
      });

      // 2. Add the CO2 layer
      map.current.addLayer({
        id: "co2-layer",
        type: "fill", // a 'fill' layer will color the polygons
        source: "greenhouse-gas-source",
        paint: {
          // Use data-driven styling for the fill color
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "co2_level"], // Get the 'co2_level' property from the data
            0,
            "#ffffcc", // Levels <= 0 are this color
            50,
            "#a1dab4", // Levels <= 50 are this color
            100,
            "#41b6c4", // Levels <= 100 are this color
            150,
            "#2c7fb8", // Levels <= 150 are this color
            200,
            "#253494", // Levels > 150 are this color
          ],
          "fill-opacity": 0.7,
        },
        layout: {
          // Set initial visibility based on our React state
          visibility: showCo2Layer ? "visible" : "none",
        },
      });

      // 3. Add the N2O layer (similarly styled)
      map.current.addLayer({
        id: "n2o-layer",
        type: "fill",
        source: "greenhouse-gas-source",
        paint: {
          "fill-color": [
            "interpolate",
            ["linear"],
            ["get", "n2o_level"],
            0,
            "#feedde",
            50,
            "#fdbe85",
            100,
            "#fd8d3c",
            150,
            "#e6550d",
            200,
            "#a63603",
          ],
          "fill-opacity": 0.7,
        },
        layout: {
          visibility: showN2oLayer ? "visible" : "none",
        },
      });
    });
  }, [tokyo.lng, tokyo.lat, zoom]); // These dependencies are fine

  // This useEffect hook will run whenever the visibility state changes
  useEffect(() => {
    // If the map instance isn't ready, do nothing
    if (!map.current || !map.current.isStyleLoaded()) return;

    // Use setLayoutProperty to toggle the visibility of layers
    map.current.setLayoutProperty(
      "co2-layer",
      "visibility",
      showCo2Layer ? "visible" : "none"
    );
    map.current.setLayoutProperty(
      "n2o-layer",
      "visibility",
      showN2oLayer ? "visible" : "none"
    );
  }, [showCo2Layer, showN2oLayer]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      {/* 4. Add UI Controls to toggle layers */}
      <div className="controls">
        <h3>Greenhouse Gas Layers</h3>
        <div>
          <input
            type="checkbox"
            id="co2"
            checked={showCo2Layer}
            onChange={() => setShowCo2Layer(!showCo2Layer)}
          />
          <label htmlFor="co2">CO₂ Levels</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="n2o"
            checked={showN2oLayer}
            onChange={() => setShowN2oLayer(!showN2oLayer)}
          />
          <label htmlFor="n2o">N₂O Levels</label>
        </div>
      </div>
    </div>
  );
}
