import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";

const Keyword = ({ word, isFocused }: { word: string; isFocused: boolean }) => {
  return (
    <StyledContainer className={isFocused ? "focus" : ""}>
      <SearchIcon size={16} />
      <p>{word}</p>
    </StyledContainer>
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
`;
