import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import useQuery from "../hooks/useQuery";
import KeywordContainer from "./KeyWordContainer";

const SearchContainer = () => {
  const [query, setQuery] = useState("");
  const [tmpQuery, setTmpQuery] = useState(query);
  const [focusingIdx, setFocusingIdx] = useState(-1);
  const [isRecOpen, setIsRecOpen] = useState(false);

  const { matchingWords, getMatchingWords } = useQuery();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTmpQuery(e.target.value);

  // 디바운스
  useEffect(() => {
    const debounce = setTimeout(() => {
      return setQuery(tmpQuery);
    }, 500);
    return () => clearTimeout(debounce);
  }, [tmpQuery]);

  const down = () => {
    if (focusingIdx >= matchingWords.words.length - 1) return;
    setFocusingIdx((prev) => prev + 1);
  };
  const up = () => {
    if (focusingIdx === -1) return;
    setFocusingIdx((prev) => prev - 1);
  };

  const handleKeyArrow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown": {
        if (!e.nativeEvent.isComposing) down();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        up();
        break;
      }
    }
  };

  const openRecommend = () => setIsRecOpen(true);
  const closeRecommend = () => {
    setIsRecOpen(false);
    setFocusingIdx(-1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (focusingIdx === -1) {
      alert(`"${tmpQuery}" 검색결과`);
    }
  };

  useEffect(() => {
    getMatchingWords(query);
    setFocusingIdx(-1);
  }, [query]);

  useEffect(() => {
    if (focusingIdx !== -1) {
      const selectKeyword = (e: KeyboardEvent) => {
        e.preventDefault();
        if (e.key === "Enter") {
          setTmpQuery(matchingWords.words[focusingIdx].sickNm);
          setFocusingIdx(-1);
        }
      };
      document.body.addEventListener("keyup", (e) => selectKeyword(e));
    }
  }, [focusingIdx]);

  return (
    <>
      <SearchBar
        handleChange={handleChange}
        tmpQuery={tmpQuery}
        handleKeyArrow={handleKeyArrow}
        openRecommend={openRecommend}
        closeRecommend={closeRecommend}
        handleSubmit={handleSubmit}
      />
      {isRecOpen && (
        <KeywordContainer
          matchingWords={matchingWords}
          focusingIdx={focusingIdx}
        />
      )}
    </>
  );
};

export default SearchContainer;
