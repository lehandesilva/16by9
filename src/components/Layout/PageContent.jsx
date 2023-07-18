import { Link } from "react-router-dom";
import { useState } from "react";
import Cards from "../UI/Cards";
import classes from "./PageContent.module.css";
import { AiOutlineDown } from "react-icons/ai";
import PageBar from "../UI/PagesBar";
import GenreDropdown from "../UI/GenreDropdown";

const PageContent = (props) => {
  const [dropdownState, setDropdownState] = useState(false);

  let listOfPages;

  if (props.type === "movie") {
    listOfPages = [
      { id: 0, title: "Popular", path: "../popular" },
      { id: 1, title: "Top Rated", path: "../toprated" },
      { id: 2, title: "Upcoming", path: "../upcoming" },
    ];
  } else if (props.type === "tvshow") {
    listOfPages = [
      { id: 0, title: "Popular", path: "../popular" },
      { id: 1, title: "Top Rated", path: "../toprated" },
      { id: 2, title: "On The Air", path: "../ontheair" },
    ];
  }

  const otherPages = listOfPages.filter((page) => page.id !== props.pageId);
  const dropdownStateHandler = () => {
    if (dropdownState === false) {
      setDropdownState(true);
    }
    if (dropdownState) {
      setDropdownState(false);
    }
  };

  const selectClickHandler = () => {
    if (dropdownState) {
      setDropdownState(false);
    }
  };
  return (
    <>
      <h1 className={classes.title}>
        {props.type === "movie" ? "Movies" : "Tv Shows"}
      </h1>
      <div className={classes.dropdownInactive} onClick={dropdownStateHandler}>
        <h1 className={classes.activeTitle}>
          {listOfPages[props.pageId].title}
        </h1>
        <AiOutlineDown className={classes.downIcon} />
      </div>
      {dropdownState && (
        <div className={classes.dropdownActive} onClick={selectClickHandler}>
          <ul className={classes.dropdownList}>
            {otherPages.map((page) => (
              <Link to={page.path}>
                <li key={page.id} className={classes.listItem}>
                  <p>{page.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      {listOfPages[props.pageId] !== listOfPages[2] && (
        <GenreDropdown
          currentLink={listOfPages[props.pageId].path}
          type={props.type}
          currentGenre={props.currentGenre}
        />
      )}
      <Cards items={props.cardContent} type={props.type} />
      <PageBar
        currentPage={props.pageNum}
        currentLink={listOfPages[props.pageId].path}
        currentGenre={props.currentGenre}
      />
    </>
  );
};

export default PageContent;
