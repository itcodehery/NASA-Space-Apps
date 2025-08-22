import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  Polygon,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { fetchMethanePlumes } from "../services/api";

export default function MapView({ filters }) {
  // Example bounds for Texas overlay
  const bounds = [
    [25, -106], // Southwest corner (lat, lng)
    [36.5, -93], // Northeast corner (lat, lng)
  ];

  const [plumes, setPlumes] = useState([]);

  useEffect(() => {
    async function getPlumes() {
      try {
        const data = await fetchMethanePlumes();
        setPlumes(data.features || []);
      } catch (err) {
        setPlumes([]);
      }
    }
    getPlumes();
  }, []);

  return (
    <MapContainer
      center={[28.8, 20.85]}
      zoom={10}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Overlay PNG image of Texas */}
      {/* <ImageOverlay url="/The Idea.png" bounds={bounds} opacity={0.5} /> */}
      {/* Render methane plume polygons */}
      {plumes.map((feature, idx) => (
        <Polygon
          key={feature.properties?.PlumeID || idx}
          positions={feature.geometry.coordinates[0].map(([lng, lat]) => [
            lat,
            lng,
          ])}
          pathOptions={{
            color: "#38a169",
            fillColor: "#38a169",
            fillOpacity: 0.4,
          }}
        >
          <Tooltip direction="top" offset={[0, -10]} opacity={1}>
            <div className="text-xs font-bold">
              Plume: {feature.properties["Plume ID"]}
              <br />
              Max CH4: {feature.properties["Max Plume Concentration (ppm m)"]}
              <br />
              Time: {feature.properties["UTC Time Observed"]}
            </div>
          </Tooltip>
        </Polygon>
      ))}
    </MapContainer>
  );
}
