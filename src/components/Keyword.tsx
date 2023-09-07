import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";

const Keyword = ({
  word,
  isFocused,
  handleClick,
}: {
  word: string;
  isFocused: boolean;
  handleClick: React.MouseEventHandler<HTMLLIElement>;
}) => {
  return (
    <div>
      <StyledContainer
        className={isFocused ? "focus" : ""}
        onMouseDown={handleClick}
      >
        <SearchIcon size={16} />
        <p>{word}</p>
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
`;
