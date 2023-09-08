import { API_BASE_URL } from "../constants/api";
import { instance } from "./instance";
import { getCachedData, setCacheData } from "../utils/cache";
import { AxiosError } from "axios";
import { isCacheExpired } from "../utils/isCacheExpired";

export const searchKeyword = async (word: string) => {
  try {
    const url = `${API_BASE_URL}?sickNm_like=${word}`;

    const cachedRes = await getCachedData(word);

    if (cachedRes && !isCacheExpired(cachedRes)) {
      return await cachedRes.json();
    }

    const response = await instance.get(url);

    await setCacheData(url, response);

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
