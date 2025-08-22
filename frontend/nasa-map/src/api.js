import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Replace with your API base URL
  // You can add other default settings here
});

// Fetch methane plume polygons from API
export async function fetchMethanePlumes() {
  // Simulate API fetch with dummy data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        type: "FeatureCollection",
        name: "methane_metadata",
        crs: {
          type: "name",
          properties: {
            name: "urn:ogc:def:crs:OGC:1.3:CRS84",
          },
        },
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-99.0, 31.0],
                  [-99.1, 31.1],
                  [-99.2, 31.0],
                  [-99.1, 30.9],
                  [-99.0, 31.0],
                ],
              ],
            },
            properties: {
              "Plume ID": "CH4_PlumeComplex-001",
              "Max Plume Concentration (ppm m)": 4000,
              "UTC Time Observed": "2022-08-15T14:08:23Z",
            },
          },
        ],
      });
    }, 500); // Simulate network delay
  });
}

export default api;
