import * as api from "../apis/recommend";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";
import { matchingWordsType } from "../types/wordType";

const useQuery = () => {
  const [matchingWords, setMatchingWords] = useState<matchingWordsType>({
    words: [],
    isLoading: true,
    errorStatus: "",
  });
  const getMatchingWords = useCallback(async (word: string) => {
    try {
      if (word.length === 0) {
        return setMatchingWords((prev) => ({ ...prev, words: [] }));
      }
      const res = await api.searchKeyword(word);
      const data = res.data;
      setMatchingWords((prev) => ({ ...prev, words: data.slice(0, 7) }));
    } catch (e) {
      const error = e as AxiosError;
      setMatchingWords((prev) => ({
        ...prev,
        errorStatus: error.response?.status ?? "정보를 불러오지 못했습니다.",
      }));
    } finally {
      setMatchingWords((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  return { matchingWords, getMatchingWords };
};

export default useQuery;
