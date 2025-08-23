import api from "./api";

// Function to fetch country name using latitude and longitude
export const getCountryName = async (latitude, longitude) => {
  try {
    const response = await api.get(
      `/get_country?latitude=${latitude}&longitude=${longitude}`
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching country name:", error);
    throw error;
  }
};

// Service functions to interact with backend gas endpoints
export async function getN2OData(year) {
  try {
    const response = await api.get(`/n2o/${year}`);

    if (response.status !== 200) {
      throw new Error("Error fetching N2O data");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching N2O data:", error);
    return null;
  }
}

export async function getCO2Data(year) {
  try {
    const response = await api.get(`/co2/${year}`);
    if (response.status !== 200) {
      throw new Error("Error fetching CO2 data");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching CO2 data:", error);
    return null;
  }
}

export async function getCH4Data(year) {
  try {
    const response = await api.get(`/ch4/${year}`);
    if (response.status !== 200) {
      throw new Error("Error fetching CH4 data");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching CH4 data:", error);
    return null;
  }
}

export async function getTotalGHGData(year) {
  try {
    const response = await api.get(`/total/${year}`);
    if (response.status !== 200) {
      throw new Error("Error fetching total GHG data");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching CH4 data:", error);
    return null;
  }
}

// New function to fetch data for specific gases based on filters
export async function getGasDataForYear(year, filters) {
  const promises = [];

  if (filters.CO2) {
    promises.push(
      getCO2Data(year).then((data) => ({ type: "CO2", data, color: "#ef4444" }))
    );
  }
  if (filters.CH4) {
    promises.push(
      getCH4Data(year).then((data) => ({ type: "CH4", data, color: "#f59e0b" }))
    );
  }
  if (filters.N2O) {
    promises.push(
      getN2OData(year).then((data) => ({ type: "N2O", data, color: "#6b7280" }))
    );
  }
  if (filters.TOTAL) {
    promises.push(
      getTotalGHGData(year).then((data) => ({
        type: "TOTAL",
        data,
        color: "#6b7280",
      }))
    );
  }

  const results = await Promise.all(promises);
  return results.filter((result) => result && result.data);
}

// New function to combine gas data and compute density-based rgba colors
export async function getCombinedGasData(year) {
  try {
    // Fetch data concurrently from all endpoints
    const [totalData, co2Data, ch4Data, n2oData] = await Promise.all([
      getTotalGHGData(year),
      getCO2Data(year),
      getCH4Data(year),
      getN2OData(year),
    ]);

    // Assign base colors for each type
    const baseColors = {
      Total: "#10B981", // emerald for total
      CO2: "#ef4444",
      CH4: "#f59e0b",
      N2O: "#6b7280",
    };

    // Helper function to convert hex to RGB
    function hexToRgb(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    }

    // Tag each dataset with its type
    const taggedTotal = Array.isArray(totalData)
      ? totalData.map((item) => {
          let alpha = 0.15; // default minimum
          // If level property exists, set alpha based on level (5=darkest, 1=lightest)
          if (item.level) {
            // Map level 5 to 1.0, 4 to 0.7, 3 to 0.45, 2 to 0.25, 1 to 0.15
            const level = Number(item.level);
            if (level === 5) alpha = 1.0;
            else if (level === 4) alpha = 0.7;
            else if (level === 3) alpha = 0.45;
            else if (level === 2) alpha = 0.25;
            else alpha = 0.15;
          }
          const { r, g, b } = hexToRgb(baseColors.Total);
          return {
            ...item,
            type: "Total",
            densityColor: `rgba(${r}, ${g}, ${b}, ${alpha})`,
          };
        })
      : [];
    const taggedCO2 = Array.isArray(co2Data)
      ? co2Data.map((item) => ({
          ...item,
          type: "CO2",
          densityColor: baseColors.CO2,
        }))
      : [];
    const taggedCH4 = Array.isArray(ch4Data)
      ? ch4Data.map((item) => ({
          ...item,
          type: "CH4",
          densityColor: baseColors.CH4,
        }))
      : [];
    const taggedN2O = Array.isArray(n2oData)
      ? n2oData.map((item) => ({
          ...item,
          type: "N2O",
          densityColor: baseColors.N2O,
        }))
      : [];

    // Combine all data
    const combinedData = [
      ...taggedTotal,
      ...taggedCO2,
      ...taggedCH4,
      ...taggedN2O,
    ];

    return combinedData;
  } catch (error) {
    console.error("Error fetching combined gas data:", error);
    return [];
  }
}
