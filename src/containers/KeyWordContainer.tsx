import KeyWord from "../components/Keyword";
import { matchingWordsType } from "../types/wordType";

const KeyWordContainer = ({
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
              <KeyWord
                key={word.sickCd}
                word={word.sickNm}
                isFocused={idx === focusingIdx}
              ></KeyWord>
            ))}
        </ul>
      )}
    </>
  );
};

export default KeyWordContainer;
