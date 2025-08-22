import axios from "axios";

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/", // Replace with your API base URL
  // You can add other default settings here
});

export default api;
