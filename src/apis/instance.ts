import axios from "axios";
import { API_BASE_URL } from "../constants/api";

export const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use((error) => {
  return error;
});
