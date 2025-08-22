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

    if (!response.status === 200) {
      throw new Error("Error fetching N2O data");
    }
    return await response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCO2Data(year) {
  try {
    const response = await api.get(`/co2/${year}`);
    if (!response.status === 200) {
      throw new Error("Error fetching CO2 data");
    }
    return await response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCH4Data(year) {
  try {
    const response = await api.get(`/ch4/${year}`);
    if (!response.status === 200) {
      throw new Error("Error fetching CH4 data");
    }
    return await response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
