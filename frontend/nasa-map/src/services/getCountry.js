import api from "../api";

// Function to fetch country names using the get-country endpoint
export const fetchCountryNames = async (lat, lng) => {
  try {
    const response = await api.get(`get-country?lat=${lat}&lng=${lng}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching country names:", error);
    throw error;
  }
};
