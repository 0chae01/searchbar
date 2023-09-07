const ONE_DAY_MILISECOND = 60 * 60 * 24 * 1000;
const HEADER_FETCH_DATE = "fetch-date";

export const isCacheExpired = (cacheResponse: Response | undefined) => {
  const fetchDate = new Date(
    cacheResponse?.headers.get(HEADER_FETCH_DATE)!
  ).getTime();
  const today = new Date().getTime();

  return today - fetchDate > ONE_DAY_MILISECOND;
};
