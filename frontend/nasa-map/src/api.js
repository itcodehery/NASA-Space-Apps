import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API base URL
  // You can add other default settings here
});

export default api;
