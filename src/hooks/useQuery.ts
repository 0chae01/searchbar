import * as api from "../apis/recommend";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";

interface wordType {
  sickCd: string;
  sickNm: string;
}
interface matchingWordsType {
  words: wordType[];
  isLoading: boolean;
  errorStatus: string | number;
}
const useIssueDetail = () => {
  const [matchingWords, setMatchingWords] = useState<matchingWordsType>({
    words: [],
    isLoading: true,
    errorStatus: "",
  });
  const getMatchingWords = useCallback(async (word: string) => {
    try {
      const res = await api.searchKeyword(word);
      const data = res.data;
      setMatchingWords((prev) => ({ ...prev, words: data }));
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

export default useIssueDetail;
