import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Replace with your API base URL
  // You can add other default settings here
});

// Real function to fetch state-level emission data
export async function fetchStateEmissions(year = 2022) {
  // TODO: Replace with your actual API endpoint
  try {
    const response = await fetch(`/api/state-emissions?year=${year}`);
    if (!response.ok) {
      throw new Error("Failed to fetch state emissions data");
    }
    return response.json();
  } catch (error) {
    console.warn(
      "API endpoint not available, returning empty data. Update API URLs in api.js"
    );
    return [];
  }
}

// Real API functions for methane plume data
export async function fetchMethanePlumes(year = 2022) {
  // TODO: Replace with your actual API endpoint
  try {
    const response = await fetch(`/api/methane-plumes?year=${year}`);
    if (!response.ok) {
      throw new Error("Failed to fetch methane plumes data");
    }
    return response.json();
  } catch (error) {
    console.warn(
      "API endpoint not available, returning empty data. Update API URLs in api.js"
    );
    return {
      type: "FeatureCollection",
      features: [],
    };
  }
}

// Real function to fetch city statistics from API
export async function fetchCityStats(year = 2022) {
  // TODO: Replace with your actual API endpoint
  try {
    const response = await fetch(`/api/city-stats?year=${year}`);
    if (!response.ok) {
      throw new Error("Failed to fetch city statistics");
    }
    return response.json();
  } catch (error) {
    console.warn(
      "API endpoint not available, returning empty data. Update API URLs in api.js"
    );
    return [];
  }
}

export default api;
