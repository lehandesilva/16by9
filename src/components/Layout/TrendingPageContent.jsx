import { Link } from "react-router-dom";
import { useState } from "react";
import Cards from "../UI/Cards";
import classes from "./TrendingPageContent.module.css";
import { AiOutlineDown } from "react-icons/ai";

const TrendingPageContent = (props) => {
  const [dropdownState, setDropdownState] = useState(false);

  const trendingPages = [
    { id: 0, title: "All", path: "../all" },
    { id: 1, title: "Movies", path: "../movies" },
    { id: 2, title: "Tv Shows", path: "../tvshows" },
  ];

  const otherPages = trendingPages.filter((page) => page.id !== props.pageId);

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
      <h1 className={classes.title}>Trending</h1>
      <div className={classes.dropdownInactive} onClick={dropdownStateHandler}>
        <h1 className={classes.activeTitle}>
          {trendingPages[props.pageId].title}
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
      <Cards items={props.cardContent} type="trending" />
    </>
  );
};

export default TrendingPageContent;
