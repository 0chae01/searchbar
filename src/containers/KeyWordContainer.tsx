import Keyword from "../components/Keyword";
import { matchingWordsType } from "../types/wordType";

interface KeywordContainerProps {
  matchingWords: matchingWordsType;
  focusingIdx: number;
}
const KeywordContainer = ({
  matchingWords,
  focusingIdx,
}: KeywordContainerProps) => {
  const { words, isLoading, errorStatus } = matchingWords;

  if (errorStatus) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      {isLoading && <div>로딩중</div>}
      <p>추천검색어</p>
      {words.length > 0 ? (
        <ul>
          {words.map((word, idx) => (
            <Keyword
              key={word.sickCd}
              word={word.sickNm}
              isFocused={idx === focusingIdx}
            ></Keyword>
          ))}
        </ul>
      ) : (
        <p>검색어 없음</p>
      )}
    </>
  );
};

export default KeywordContainer;
