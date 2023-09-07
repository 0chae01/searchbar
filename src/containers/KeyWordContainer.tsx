import React from "react";
import { styled } from "styled-components";
import Keyword from "../components/Keyword";
import { matchingWordsType } from "../types/wordType";

interface KeywordContainerProps {
  matchingWords: matchingWordsType;
  focusingIdx: number;
}

const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
  e.preventDefault();
  const target = e.target as HTMLLIElement;
  if (target.tagName === "path") {
    return alert(
      `"${target.parentElement?.parentElement?.innerText}" 검색결과`
    );
  }
  alert(`"${target.parentElement?.innerText}" 검색결과`);
};

const KeywordContainer = ({
  matchingWords,
  focusingIdx,
}: KeywordContainerProps) => {
  const { words, isLoading, errorStatus } = matchingWords;

  if (errorStatus) return <div>에러가 발생했습니다.</div>;

  return (
    <StyledContainer>
      {isLoading && <div>로딩중</div>}
      <StyledTitle>추천 검색어</StyledTitle>
      {words.length > 0 ? (
        <ul>
          {words.map((word, idx) => (
            <Keyword
              key={word.sickCd}
              word={word.sickNm}
              isFocused={idx === focusingIdx}
              handleClick={handleClick}
            ></Keyword>
          ))}
        </ul>
      ) : (
        <StyledEmptyMessage>검색어 없음</StyledEmptyMessage>
      )}
    </StyledContainer>
  );
};

export default KeywordContainer;

const StyledContainer = styled.div`
  background: white;
  width: 490px;
  padding: 20px 0 0 0;
  box-sizing: border-box;
  border-radius: 30px;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    margin: 5px 0 20px 0;
  }
`;

const StyledTitle = styled.p`
  color: #6a737b;
  font-size: 13px;
  padding: 0 20px;
  margin: 0;
`;

const StyledEmptyMessage = styled.p`
  padding: 0 20px;
  color: #6a737b;
`;
