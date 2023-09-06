import { AxiosResponse } from "axios";

export const setCacheData = async (
  cacheName: string,
  url: string,
  response: AxiosResponse
) => {
  const cacheStorage = await caches.open(cacheName);
  const init = {
    headers: {
      "Content-Type": "application/json",
      "content-length": "2",
    },
  };
  const clonedResponse = new Response(JSON.stringify(response), init);
  await cacheStorage.put(url, clonedResponse);

  return;
};

export const getCachedData = async (cacheName: string, word: string) => {
  try {
    const cacheStorage = await caches.open(cacheName);
    const cachedResponse = await cacheStorage.match(word);

    if (!cachedResponse || !cachedResponse.ok) {
      return false;
    }

    return await cachedResponse.json();
  } catch (error) {
    console.error("Error while getting data from cache:", error);
    return false;
  }
};
