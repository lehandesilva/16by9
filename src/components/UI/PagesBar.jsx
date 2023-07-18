import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

import classes from "./PagesBar.module.css";
import { Link } from "react-router-dom";

const PageBar = (props) => {
  const { currentPage, currentLink, currentGenre } = props;

  let prevActive = true;
  let nextPage = currentPage + 1;
  let prevNum = currentPage - 1;

  if (currentPage === 1) {
    prevActive = false;
  }

  return (
    <div className={classes.pagesContainer}>
      {prevActive && (
        <Link to={`${currentLink}/${prevNum}/${currentGenre}`}>
          <div className={classes.previousContainer}>
            <HiArrowSmLeft className={classes.arrowLeft} />
          </div>
        </Link>
      )}
      {!prevActive && (
        <div className={classes.prevInactive}>
          <HiArrowSmLeft className={classes.inactiveArrow} />
        </div>
      )}
      <div className={classes.currentContainer}>
        <p className={classes.currentText}>{currentPage}</p>
      </div>
      <Link to={`${currentLink}/${nextPage}/${currentGenre}`}>
        <div className={classes.nextContainer}>
          <HiArrowSmRight className={classes.arrowRight} />
        </div>
      </Link>
    </div>
  );
};

export default PageBar;
