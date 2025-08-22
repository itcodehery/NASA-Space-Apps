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

  const results = await Promise.all(promises);
  return results.filter((result) => result && result.data);
}
