import { AxiosResponse } from "axios";
import { CACHE_NAME } from "../constants/cache";

export const setCacheData = async (url: string, response: AxiosResponse) => {
  const cacheStorage = await caches.open(CACHE_NAME);
  const init = {
    headers: {
      "Content-Type": "application/json",
      "content-length": "2",
    },
  };

  const clonedResponse = new Response(JSON.stringify(response), init);
  const newResponse = await getResponseWithFetchDate(clonedResponse);
  await cacheStorage.put(url, newResponse);

  return;
};

export const getCachedData = async (word: string) => {
  try {
    const cacheStorage = await caches.open(CACHE_NAME);
    const cachedResponse = await cacheStorage.match(word);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    return cachedResponse;
  } catch (error) {
    console.error("Error while getting data from cache:", error);
    return false;
  }
};

const getResponseWithFetchDate = async (fetchResponse: Response) => {
  const cloneResponse = fetchResponse.clone();
  const newBody = await cloneResponse.blob();
  let newHeaders = new Headers(cloneResponse.headers);
  newHeaders.append("fetch-date", new Date().toISOString());

  return new Response(newBody, {
    status: cloneResponse.status,
    statusText: cloneResponse.statusText,
    headers: newHeaders,
  });
};
