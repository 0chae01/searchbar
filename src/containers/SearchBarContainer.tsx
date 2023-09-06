import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import useQuery from "../hooks/useQuery";
import KeyWordContainer from "./KeyWordContainer";

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

  return (
    <>
      <SearchBar handleChange={handleChange} tmpQuery={tmpQuery} />
      <KeyWordContainer matchingWords={matchingWords} />
    </>
  );
};

export default SearchBarContainer;
