import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  // You can add other default settings here
});

// Fetch state-level emission data from API
export async function fetchStateEmissions() {
  // Simulate API fetch with state-level data using state codes
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          stateCode: "TX",
          stateName: "Texas",
          CO2: 28.5,
          CH4: 15.7,
          CO: 12.3,
          totalEmissions: 56.5,
        },
        {
          stateCode: "CA",
          stateName: "California",
          CO2: 22.8,
          CH4: 8.3,
          CO: 7.1,
          totalEmissions: 38.2,
        },
        {
          stateCode: "NY",
          stateName: "New York",
          CO2: 18.9,
          CH4: 11.4,
          CO: 5.2,
          totalEmissions: 35.5,
        },
        {
          stateCode: "FL",
          stateName: "Florida",
          CO2: 25.1,
          CH4: 13.2,
          CO: 9.8,
          totalEmissions: 48.1,
        },
        {
          stateCode: "PA",
          stateName: "Pennsylvania",
          CO2: 31.5,
          CH4: 25.8,
          CO: 19.2,
          totalEmissions: 76.5,
        },
      ]);
    }, 500); // Simulate network delay
  });
}

// Deprecated: Old polygon-based method
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
              CO2: 15.2,
              CH4: 8.7,
              CO: 12.3,
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-98.8, 30.8],
                  [-98.9, 30.9],
                  [-99.0, 30.8],
                  [-98.9, 30.7],
                  [-98.8, 30.8],
                ],
              ],
            },
            properties: {
              "Plume ID": "CO2_PlumeComplex-002",
              "Max Plume Concentration (ppm m)": 3200,
              "UTC Time Observed": "2022-08-15T14:15:45Z",
              CO2: 22.8,
              CH4: 5.3,
              CO: 7.1,
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-99.3, 31.2],
                  [-99.4, 31.3],
                  [-99.5, 31.2],
                  [-99.4, 31.1],
                  [-99.3, 31.2],
                ],
              ],
            },
            properties: {
              "Plume ID": "CO_PlumeComplex-003",
              "Max Plume Concentration (ppm m)": 2800,
              "UTC Time Observed": "2022-08-15T14:22:12Z",
              CO2: 8.9,
              CH4: 11.4,
              CO: 18.6,
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-98.7, 31.1],
                  [-98.8, 31.2],
                  [-98.9, 31.1],
                  [-98.8, 31.0],
                  [-98.7, 31.1],
                ],
              ],
            },
            properties: {
              "Plume ID": "MultiGas_Plume-004",
              "Max Plume Concentration (ppm m)": 4500,
              "UTC Time Observed": "2022-08-15T14:28:30Z",
              CO2: 31.5,
              CH4: 25.8,
              CO: 19.2,
            },
          },
        ],
      });
    }, 500); // Simulate network delay
  });
}

// Fetch city-based greenhouse gas statistics
export async function fetchCityStats() {
  // Simulate API fetch with comprehensive city data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "New York",
          country: "USA",
          CO2: 420,
          CH4: 1850,
          CO: 12,
          alertLevel: 85,
          population: 8336817,
          area: 783.8,
          lastUpdated: "2 hours ago",
          trend: 5.2,
        },
        {
          id: 2,
          name: "Los Angeles",
          country: "USA",
          CO2: 445,
          CH4: 2100,
          CO: 18,
          alertLevel: 92,
          population: 3990456,
          area: 1302.0,
          lastUpdated: "5 minutes ago",
          trend: 8.1,
        },
        {
          id: 3,
          name: "Chicago",
          country: "USA",
          CO2: 395,
          CH4: 1650,
          CO: 9,
          alertLevel: 72,
          population: 2716000,
          area: 606.1,
          lastUpdated: "1 hour ago",
          trend: 2.3,
        },
        {
          id: 4,
          name: "Houston",
          country: "USA",
          CO2: 410,
          CH4: 1950,
          CO: 15,
          alertLevel: 78,
          population: 2320268,
          area: 1651.1,
          lastUpdated: "30 minutes ago",
          trend: 4.7,
        },
        {
          id: 5,
          name: "Phoenix",
          country: "USA",
          CO2: 380,
          CH4: 1580,
          CO: 8,
          alertLevel: 65,
          population: 1680992,
          area: 1340.6,
          lastUpdated: "45 minutes ago",
          trend: -1.2,
        },
        {
          id: 6,
          name: "Philadelphia",
          country: "USA",
          CO2: 405,
          CH4: 1780,
          CO: 11,
          alertLevel: 75,
          population: 1584064,
          area: 369.6,
          lastUpdated: "15 minutes ago",
          trend: 3.8,
        },
        {
          id: 7,
          name: "San Antonio",
          country: "USA",
          CO2: 375,
          CH4: 1520,
          CO: 7,
          alertLevel: 58,
          population: 1547253,
          area: 1205.4,
          lastUpdated: "2 hours ago",
          trend: -2.1,
        },
        {
          id: 8,
          name: "San Diego",
          country: "USA",
          CO2: 385,
          CH4: 1620,
          CO: 9,
          alertLevel: 68,
          population: 1423851,
          area: 964.5,
          lastUpdated: "1 hour ago",
          trend: 1.5,
        },
        {
          id: 9,
          name: "Dallas",
          country: "USA",
          CO2: 400,
          CH4: 1820,
          CO: 13,
          alertLevel: 76,
          population: 1343573,
          area: 999.2,
          lastUpdated: "20 minutes ago",
          trend: 4.2,
        },
        {
          id: 10,
          name: "San Jose",
          country: "USA",
          CO2: 370,
          CH4: 1480,
          CO: 6,
          alertLevel: 55,
          population: 1021795,
          area: 466.1,
          lastUpdated: "3 hours ago",
          trend: -3.5,
        },
      ]);
    }, 800);
  });
}

export default api;
