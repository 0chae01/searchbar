import Keyword from "../components/Keyword";
import { matchingWordsType } from "../types/wordType";

const KeywordContainer = ({
  matchingWords,
  focusingIdx,
}: {
  matchingWords: matchingWordsType;
  focusingIdx: number;
}) => {
  const { words, isLoading, errorStatus } = matchingWords;

  if (errorStatus) return <div>에러</div>;
  return (
    <>
      {isLoading ? (
        <div>로딩</div>
      ) : (
        <ul>
          {words &&
            words.map((word, idx) => (
              <Keyword
                key={word.sickCd}
                word={word.sickNm}
                isFocused={idx === focusingIdx}
              ></Keyword>
            ))}
        </ul>
      )}
    </>
  );
};

export default KeywordContainer;
