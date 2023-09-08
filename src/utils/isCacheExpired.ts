import { HEADER_FETCH_DATE, ONE_DAY_MILISECOND } from "../constants/cache";

export const isCacheExpired = (cacheResponse: Response | undefined) => {
  const fetchDate = new Date(
    cacheResponse?.headers.get(HEADER_FETCH_DATE)!
  ).getTime();
  const today = new Date().getTime();

  return today - fetchDate > ONE_DAY_MILISECOND;
};
