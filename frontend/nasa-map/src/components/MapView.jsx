import React from "react";
import { MapContainer, TileLayer, ImageOverlay, Circle, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { stateGHGData } from "../data/dummyStateGHG";

export default function MapView({ filters }) {
  // Example bounds for Texas overlay
  const bounds = [
    [25, -106], // Southwest corner (lat, lng)
    [36.5, -93], // Northeast corner (lat, lng)
  ];

  // Pick the first active filter
  const activeGas = Object.keys(filters).find(key => filters[key]);

  return (
    <MapContainer center={[31, -99]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Overlay PNG image of Texas */}
      <ImageOverlay url="/The Idea.png" bounds={bounds} opacity={0.5} />
      {/* Render colored circles for states based on selected gas */}
      {activeGas && stateGHGData.map(state => (
        <Circle
          key={state.name}
          center={state.center}
          radius={state[activeGas] * 10000} // scale for visibility
          pathOptions={{ color: state.color, fillColor: state.color, fillOpacity: 0.5 }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
            <div className="text-xs font-bold">
              {state.name}<br />
              {activeGas}: {state[activeGas]}
            </div>
          </Tooltip>
        </Circle>
      ))}
    </MapContainer>
  );
}
