import { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { json } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [searchBtnState, setSearchBtnState] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const adultToggle = useSelector((state) => state.filter.adultFilter);

  let input = "";

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (searchInput.trim() !== "") {
        input = searchInput.replace(/ /g, "%20");
        async function fetchSearchResults() {
          const response = await fetch(
            "https://api.themoviedb.org/3/search/multi?query=" +
              input +
              "&include_adult=" +
              adultToggle +
              "&language=en-US&page=1",
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: import.meta.env.VITE_SOME_KEY,
              },
            }
          );
          if (!response.ok) {
            return json(
              { message: "Could not fetch results" },
              { status: 500 }
            );
          } else {
            const resData = await response.json();
            if (resData.results.length > 10) {
              resData.results = resData.results.slice(0, 10);
            }
            setSearchResults(resData.results);
          }
        }
        fetchSearchResults();
      }
    }, 800);

    return () => {
      clearTimeout(identifier);
    };
  }, [searchInput]);

  const searchBtnActiveHandler = () => {
    setSearchBtnState(true);
  };

  const searchBtnInactiveHandler = () => {
    setSearchBtnState(false);
    setSearchResults([]);
    setSearchInput("");
  };

  const inputChangeHandler = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className={classes.search}>
        <input
          type="text"
          placeholder={searchBtnState ? "Search..." : ""}
          className={`${classes.searchBox} ${searchBtnState && classes.active}`}
          onBlur={searchResults.length === 0 ? searchBtnInactiveHandler : null}
          onChange={inputChangeHandler}
          value={searchInput}
        />
        {!searchBtnState && (
          <button
            className={classes.searchBtn}
            onClick={searchBtnActiveHandler}
          >
            <BiSearch />
          </button>
        )}
        <button
          className={`${classes.closeBtn} ${searchBtnState && classes.active}`}
          onClick={searchBtnInactiveHandler}
        >
          <IoIosClose />
        </button>
      </div>
      <div className={classes.searchResultsContainer}>
        <ul className={classes.searchResults}>
          {searchResults.map((item) => (
            <li key={item.id}>
              <SearchResult
                item={item}
                onClickHandler={searchBtnInactiveHandler}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
