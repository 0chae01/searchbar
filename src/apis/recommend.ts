import { API_BASE_URL } from "../constants/api";
import { instance } from "./instance";

export const getMatchingWords = async (word: string) => {
  const response = await instance.get(`${API_BASE_URL}?q=${word}`);
  return response;
};
