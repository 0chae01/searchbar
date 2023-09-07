import React from "react";
import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";

interface SearchBarProps {
  handleChange: React.ChangeEventHandler;
  tmpQuery: string | "";
  handleKeyArrow: React.KeyboardEventHandler;
  openRecommend: React.FocusEventHandler;
  closeRecommend: React.FocusEventHandler;
  handleSubmit: React.FormEventHandler;
}

const SearchBar = ({
  handleChange,
  tmpQuery,
  handleKeyArrow,
  openRecommend,
  closeRecommend,
  handleSubmit,
}: SearchBarProps) => {
  return (
    <StyledInputWrapper onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleChange}
        value={tmpQuery}
        onFocus={openRecommend}
        onBlur={closeRecommend}
        onKeyDown={handleKeyArrow}
        placeholder="질환명을 입력해주세요."
      />
      <StyledButton type="submit">
        <SearchIcon size={21} />
      </StyledButton>
    </StyledInputWrapper>
  );
};

export default SearchBar;

const StyledInputWrapper = styled.form`
  position: relative;
  width: 490px;
  height: 75px;
  box-sizing: border-box;
  margin: 10px 0;
`;

const StyledInput = styled.input`
  background-color: #fff;
  width: 490px;
  height: 75px;
  border: 0;
  padding: 12px 25px;
  border-radius: 42px;
  box-sizing: border-box;
  font-size: 20px;

  &:focus {
    outline: 2px solid #007be9;
  }
`;

const StyledButton = styled.button`
  color: #ffffff;
  background-color: #007be9;
  border: 0;
  cursor: pointer;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 13px;
  top: 13px;
`;
