import React, { useRef, useEffect, useState } from "react";
import { FiMapPin, FiFilter, FiCalendar, FiLayers } from 'react-icons/fi';
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import { fetchMethanePlumes, fetchStateEmissions } from "../api";

export default function Map({ filters, year }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: -99.1, lat: 31.0 };
  const zoom = 10;

  const [plumeGeoJson, setPlumeGeoJson] = useState(null);
  const [stateEmissions, setStateEmissions] = useState([]); // 'coordinates' or 'states'

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
    fetchMethanePlumes()
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

      // Calculate total emissions for percentage calculation
      let totalEmissions = { CO2: 0, CH4: 0, CO: 0 };
      if (plumeGeoJson && plumeGeoJson.features) {
        plumeGeoJson.features.forEach((feature) => {
          const properties = feature.properties || {};
          if (properties.CO2) totalEmissions.CO2 += properties.CO2;
          if (properties.CH4) totalEmissions.CH4 += properties.CH4;
          if (properties.CO) totalEmissions.CO += properties.CO;
        });
      }

      // Add a layer for each active filter
      Object.keys(filters).forEach((gas) => {
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
            filter: [">", ["get", gas], 0], // Only show features with this gas
          });

          // Add labels with percentages
          map.current.addLayer({
            id: `plume-label-${gas}`,
            type: "symbol",
            source: "methane-plume-source",
            layout: {
              "text-field": ["concat", ["get", gas], "%"],
              "text-size": 12,
              "text-anchor": "center",
              "text-allow-overlap": false,
            },
            paint: {
              "text-color": "#ffffff",
              "text-halo-color": "#000000",
              "text-halo-width": 2,
            },
            filter: [">", ["get", gas], 0],
          });
        }
      });
    });
  }, [plumeGeoJson, filters, center.lng, center.lat, zoom]);

  const activeFilters = Object.keys(filters).filter(gas => filters[gas]);

  // Aggregate facility emissions by state
  const aggregateStateEmissions = (facilityData) => {
    const stateData = {};
    
    facilityData.forEach(item => {
      const state = item.state;
      if (!stateData[state]) {
        stateData[state] = {
          stateCode: state,
          totalEmissions: 0,
          facilities: []
        };
      }
      
      stateData[state].totalEmissions += item['ghg_quantity_(metric_tons_co2e)'] || item.ghg_quantity_metric_tons_co2e || 0;
      stateData[state].facilities.push({
        city: item.city_name,
        company: item.parent_companies,
        emissions: item['ghg_quantity_(metric_tons_co2e)'] || item.ghg_quantity_metric_tons_co2e || 0,
        latitude: item.latitude,
        longitude: item.longitude
      });
    });
    
    return Object.values(stateData);
  };
  
  const stateData = stateEmissions ? aggregateStateEmissions(stateEmissions) : [];



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
          Active Gases: {activeFilters.join(', ') || 'None'}
        </div>
      </div>
    </div>
  );
}
