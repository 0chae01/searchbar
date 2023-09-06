import styled from "styled-components";
import SearchIcon from "./icons/SearchIcon";

interface SearchBarProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tmpQuery: string | "";
}
const SearchBar = ({ handleChange, tmpQuery }: SearchBarProps) => {
  return (
    <StyledInputWrapper>
      <StyledInput onChange={handleChange} value={tmpQuery} />
      <StyledButton>
        <SearchIcon />
      </StyledButton>
    </StyledInputWrapper>
  );
};

export default SearchBar;

const StyledInputWrapper = styled.div`
  position: relative;
  width: 490px;
  height: 75px;
  box-sizing: border-box;
  margin: 20px 0;
`;

const StyledInput = styled.input`
  background-color: #fff;
  width: 490px;
  height: 75px;
  border: 0;
  padding: 12px 20px;
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
