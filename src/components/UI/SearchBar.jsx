import { useState } from "react";
import classes from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const SearchBar = () => {
  const [searchBtnState, setSearchBtnState] = useState(false);

  const searchBtnActiveHandler = (event) => {
    setSearchBtnState(true);
  };
  const searchBtnInactiveHandler = (event) => {
    setSearchBtnState(false);
  };

  return (
    <>
      <div className={classes.search}>
        <input
          type="text"
          placeholder={searchBtnState ? "Search..." : ""}
          className={`${classes.searchBox} ${searchBtnState && classes.active}`}
          onBlur={searchBtnInactiveHandler}
        />
        <button
          className={`${classes.searchBtn} ${searchBtnState && classes.active}`}
          onClick={searchBtnActiveHandler}
        >
          <BiSearch />
        </button>
        <button
          className={`${classes.closeBtn} ${searchBtnState && classes.active}`}
          onClick={searchBtnInactiveHandler}
        >
          <IoIosClose />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
