import { API_BASE_URL } from "../constants/api";
import { instance } from "./instance";
import { getCachedData, setCacheData } from "../utils/cache";
import { AxiosError } from "axios";

export const searchKeyword = async (word: string) => {
  try {
    const cacheName = word;
    const url = `${API_BASE_URL}?q=${word}`;

    let cachedData = await getCachedData(cacheName, url);

    if (cachedData) {
      return cachedData;
    }

    const response = await instance.get(url);

    await setCacheData(cacheName, url, response);

    console.info("calling api");
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
    console.error("Error while searching for keyword:", error);
    return { data: [] };
  }
};