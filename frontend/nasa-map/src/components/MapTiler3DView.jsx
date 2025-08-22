// This file provides a wrapper for MapTiler 3D map integration and renders each gas as a separate layer.
import React from "react";
import { Map } from "@maptiler/sdk-react";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { stateGHGData } from "../data/dummyStateGHG";

const MAPTILER_KEY = "get_your_own_D6rA4zTHduk6KOKTXzGB"; // Replace with your own key
const center = [ -99, 31 ]; // [lng, lat]

const gasColors = {
    CO2: "#666666",
    CH4: "#999999",
    N2O: "#cccccc"
  };

export default function MapTiler3DView({ filters }) {
  // For each active gas, render a layer of circles
  return (
    <div className="w-full h-full">
      <Map
        style={`https://api.maptiler.com/maps/basic/style.json?key=${MAPTILER_KEY}`}
        center={center}
        zoom={4.5}
        pitch={45}
        bearing={-17}
        terrain={{ source: "maptiler-terrain", exaggeration: 1.5 }}
        containerStyle={{ width: "100%", height: "100vh" }}
        maptilerAccessToken={MAPTILER_KEY}
      >
        {/* Render a layer for each active gas using MapTiler Markers */}
        {Object.keys(filters).map(gas =>
          filters[gas]
            ? stateGHGData.map(state => (
                <Map.Marker
                  key={gas + state.name}
                  lngLat={[state.center[1], state.center[0]]}
                  color={gasColors[gas]}
                  popup={`<strong>${state.name}</strong><br/>${gas}: ${state[gas]}`}
                  size={20 + state[gas] * 2}
                />
              ))
            : null
        )}
      </Map>
    </div>
  );
}
