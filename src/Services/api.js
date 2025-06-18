// src/services/api.js
import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default api;
