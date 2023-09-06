import styled from "styled-components";

const KeyWord = ({ word, isFocused }: { word: string; isFocused: boolean }) => {
  return (
    <StyledContainer className={isFocused ? "focus" : ""}>
      {word}
    </StyledContainer>
  );
};
export default KeyWord;

const StyledContainer = styled.li`
  list-style: none;
  &.focus {
    border: 1px solid gray;
  }
`;
