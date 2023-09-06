import { useEffect } from "react";
import KeyWord from "../components/Keyword";

interface wordType {
  sickCd: string;
  sickNm: string;
}

interface matchingWordsType {
  words: wordType[];
  isLoading: boolean;
  errorStatus: string | number;
}

const KeyWordContainer = ({
  matchingWords,
}: {
  matchingWords: matchingWordsType;
}) => {
  const { words, isLoading, errorStatus } = matchingWords;
  useEffect(() => {
    console.log(words);
  }, [matchingWords]);

  if (errorStatus) return <div>에러</div>;
  return (
    <>
      {isLoading ? (
        <div>로딩</div>
      ) : (
        <ul>
          {words &&
            words.map((word) => (
              <KeyWord key={word.sickCd} word={word.sickNm}></KeyWord>
            ))}
        </ul>
      )}
    </>
  );
};

export default KeyWordContainer;
