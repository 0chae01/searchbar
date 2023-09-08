import { styled } from "styled-components";
import "./App.css";
import SearchContainer from "./containers/SearchContainer";

function App() {
  return (
    <div className="App">
      <Header>
        국내 모든 임상실험 검색하고 <br /> 온라인으로 참여하기
      </Header>
      <SearchContainer />
    </div>
  );
}

export default App;

const Header = styled.header`
  text-align: center;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.6;
  margin-top: 80px;
  margin-bottom: 20px;
`;
