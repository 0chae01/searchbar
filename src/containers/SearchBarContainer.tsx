import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import useQuery from "../hooks/useQuery";
import KeywordContainer from "./KeyWordContainer";

const SearchBarContainer = () => {
  const [query, setQuery] = useState("");
  const [tmpQuery, setTmpQuery] = useState(query);
  const { matchingWords, getMatchingWords } = useQuery();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTmpQuery(e.target.value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      return setQuery(tmpQuery);
    }, 500);
    return () => clearTimeout(debounce);
  }, [tmpQuery]);

  useEffect(() => {
    getMatchingWords(query);
  }, [query]);

  const [focusingIdx, setFocusingIdx] = useState(-1);
  const down = () => {
    if (focusingIdx >= matchingWords.words.length - 1) return;
    setFocusingIdx((prev) => prev + 1);
  };
  const up = () => {
    if (focusingIdx === -1) return;
    setFocusingIdx((prev) => prev - 1);
  };

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowDown": {
        if (!e.nativeEvent.isComposing) down();
        break;
      }
      case "ArrowUp": {
        up();
        break;
      }
    }
  };

  useEffect(() => {
    setFocusingIdx(-1);
  }, [query]);

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        tmpQuery={tmpQuery}
        handleKeyArrow={handleKeyArrow}
      />
      <KeywordContainer
        matchingWords={matchingWords}
        focusingIdx={focusingIdx}
      />
    </>
  );
};

export default SearchBarContainer;
