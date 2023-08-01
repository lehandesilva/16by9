import { Link } from "react-router-dom";

import classes from "./SearchResult.module.css";

const SearchResult = (props) => {
  return (
    <Link
      to={
        props.item.media_type === "movie"
          ? `/movies/${props.item.id}`
          : props.item.media_type === "tv"
          ? `/tvshows/${props.item.id}`
          : `/person/${props.item.id}`
      }
      className={classes.result}
      onClick={props.onClickHandler}
    >
      {props.item.poster_path ? (
        <img
          className={classes.searchImg}
          src={"https://image.tmdb.org/t/p/w92" + props.item.poster_path}
        />
      ) : props.item.profile_path ? (
        <img
          className={`${classes.searchImg} ${classes.personImg}`}
          src={"https://image.tmdb.org/t/p/w92" + props.item.profile_path}
        />
      ) : (
        <div className={classes.noPoster}></div>
      )}
      <div className={classes.searchInfo}>
        <p className={classes.resultTitle}>
          {props.item.title ? props.item.title : props.item.name}
        </p>
      </div>
    </Link>
  );
};

export default SearchResult;
