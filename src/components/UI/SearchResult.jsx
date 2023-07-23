import { Link } from "react-router-dom";

import classes from "./SearchResult.module.css";

const SearchResult = (props) => {
  if (props.item.media_type === "movie") {
    return (
      <Link
        to={`/movies/${props.item.id}`}
        className={classes.result}
        onClick={props.onClickHandler}
      >
        <img
          className={classes.searchImg}
          src={"https://image.tmdb.org/t/p/w92" + props.item.poster_path}
        />
        <div className={classes.searchInfo}>
          <p className={classes.resultTitle}>
            {props.item.title ? props.item.title : props.item.name}
          </p>
        </div>
      </Link>
    );
  } else if (props.item.media_type === "tv") {
    return (
      <Link
        to={`/tvshows/${props.item.id}`}
        className={classes.result}
        onClick={props.onClickHandler}
      >
        <img
          className={classes.searchImg}
          src={"https://image.tmdb.org/t/p/w92" + props.item.poster_path}
        />
        <div className={classes.searchInfo}>
          <p className={classes.resultTitle}>
            {props.item.title ? props.item.title : props.item.name}
          </p>
        </div>
      </Link>
    );
  } else if (props.item.media_type === "person") {
    return (
      <Link
        to={`/person/${props.item.id}`}
        className={classes.result}
        onClick={props.onClickHandler}
      >
        <img
          className={`${classes.searchImg} ${classes.personImg}`}
          src={"https://image.tmdb.org/t/p/w92" + props.item.profile_path}
        />
        <div className={classes.searchInfo}>
          <p className={classes.resultTitle}>
            {props.item.title ? props.item.title : props.item.name}
          </p>
        </div>
      </Link>
    );
  }
};

export default SearchResult;
