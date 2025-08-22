import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { fetchMethanePlumes } from "../api";

export default function Map({ filters, year }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: -99.1, lat: 31.0 };
  const zoom = 10;

  const [plumeGeoJson, setPlumeGeoJson] = useState(null);

  // Best practice: Store your API key in an environment variable
  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  // Color mapping for each filter - monochrome
  const gasColors = {
    CO2: "#666666", // gray
    CH4: "#999999", // light gray
    CO: "#cccccc", // lighter gray
  };

  useEffect(() => {
    let isMounted = true;
    fetchMethanePlumes().then(data => {
      if (isMounted) setPlumeGeoJson(data);
    });
    return () => { isMounted = false; };
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

      // Add a layer for each active filter
      Object.keys(filters).forEach(gas => {
        if (filters[gas]) {
          map.current.addLayer({
            id: `plume-layer-${gas}`,
            type: "fill",
            source: "methane-plume-source",
            paint: {
              "fill-color": gasColors[gas],
              "fill-opacity": 0.5,
            },
            layout: {
              visibility: "visible",
            },
          });
        }
      });
    });
  }, [plumeGeoJson, filters, center.lng, center.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
