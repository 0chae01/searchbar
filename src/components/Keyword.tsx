import React from "react";
import styled from "styled-components";
import { replaceValidKeyword } from "../utils/regex";
import SearchIcon from "./icons/SearchIcon";

const Keyword = ({
  word,
  isFocused,
  handleClick,
  query,
}: {
  word: string;
  isFocused: boolean;
  handleClick: React.MouseEventHandler<HTMLLIElement>;
  query: string;
}) => {
  const filteredQuery = replaceValidKeyword(query);
  return (
    <div>
      <StyledContainer
        className={isFocused ? "focus" : ""}
        onMouseDown={handleClick}
      >
        <SearchIcon size={16} />
        <p>
          {filteredQuery ? (
            word.split(filteredQuery).map((char, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="bold">{filteredQuery}</span>}
                {char}
              </React.Fragment>
            ))
          ) : (
            <>{word}</>
          )}
        </p>
      </StyledContainer>
    </div>
  );
};
export default Keyword;

const StyledContainer = styled.li`
  list-style: none;
  font-size: 16px;
  height: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.focus,
  &:hover {
    background-color: #f7f7f7;
  }

  svg {
    color: #6a737b;
  }

  p {
    padding: 0 10px;
  }

  .bold {
    font-weight: 700;
  }
`;
