import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cards from "../UI/Cards";
import classes from "./PageContent.module.css";
import { AiOutlineDown } from "react-icons/ai";
import PageBar from "../UI/PagesBar";

const PageContent = (props) => {
  const [dropdownState, setDropdownState] = useState(false);

  // useEffect();

  let listOfPages;

  if (props.type === "movie") {
    listOfPages = [
      { id: 0, title: "Popular Movies", path: "../popular" },
      { id: 1, title: "Top Rated Movies", path: "../toprated" },
      { id: 2, title: "Upcoming Movies", path: "../upcoming" },
    ];
  } else if (props.type === "tvshow") {
    listOfPages = [
      { id: 0, title: "Popular Tv Shows", path: "../popular" },
      { id: 1, title: "Top Rated Tv Shows", path: "../toprated" },
      { id: 2, title: "On The Air Tv Shows", path: "../ontheair" },
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
  return (
    <>
      <div className={classes.dropdownInactive} onClick={dropdownStateHandler}>
        <h1 className={classes.title}>{listOfPages[props.pageId].title}</h1>
        <AiOutlineDown className={classes.downIcon} />
      </div>
      {dropdownState && (
        <div className={classes.dropdownActive}>
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
      <Cards items={props.cardContent} />
      <PageBar
        currentPage={props.pageNum}
        currentLink={listOfPages[props.pageId].path}
      />
    </>
  );
};

export default PageContent;
