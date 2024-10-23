// src/services/api.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
