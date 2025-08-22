import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Replace with your API base URL
  // You can add other default settings here
});

// Deprecated - Use fetchMethanePlumes instead
export async function fetchStateEmissions(year = 2022) {
  console.warn(
    "fetchStateEmissions is deprecated. Use fetchMethanePlumes instead."
  );
  return fetchMethanePlumes(year);
}

// Real API functions for methane plume data
export async function fetchMethanePlumes(year = 2022) {
  try {
    const response = await fetch(
      `http://localhost:8000/filter-data?year=${year}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch methane plumes data");
    }
    const data = await response.json();

    // Convert the facility data to GeoJSON format
    if (Array.isArray(data)) {
      return {
        type: "FeatureCollection",
        features: data.map((facility) => ({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [facility.longitude, facility.latitude],
          },
          properties: facility,
        })),
      };
    }

    return data;
  } catch (error) {
    console.warn(
      "API endpoint not available, returning empty data. Make sure the backend is running on localhost:8000"
    );
    return {
      type: "FeatureCollection",
      features: [],
    };
  }
}

// Deprecated - Use fetchMethanePlumes instead
export async function fetchCityStats(year = 2022) {
  console.warn("fetchCityStats is deprecated. Use fetchMethanePlumes instead.");
  return fetchMethanePlumes(year);
}

export default api;
