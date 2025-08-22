import api from "../api";

// Function to fetch country name using latitude and longitude
const getCountryName = async (latitude, longitude) => {
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

export default getCountryName;
