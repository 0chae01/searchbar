export interface wordType {
  sickCd: string;
  sickNm: string;
}

export interface matchingWordsType {
  words: wordType[];
  isLoading: boolean;
  errorStatus: string | number;
}
