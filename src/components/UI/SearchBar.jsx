import { useState } from "react";
import classes from "./SearchBar.module.css";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [searchBtnState, setSearchBtnState] = useState(false);

  const searchBtnActiveHandler = (event) => {
    setSearchBtnState(true);
    console.log("true");
  };
  const searchBtnInactiveHandler = (event) => {
    setSearchBtnState(false);
    console.log("false");
  };

  return (
    <>
      <div className={classes.search} onClick={searchBtnActiveHandler}>
        <BiSearch className={classes.searchIcon} />

        <form>
          <input
            type="text"
            className={`${classes.searchBox} ${
              searchBtnState && classes.active
            }`}
            onBlur={searchBtnInactiveHandler}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
