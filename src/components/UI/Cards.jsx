import { Link } from "react-router-dom";
import classes from "./Cards.module.css";
import { AiOutlineStar } from "react-icons/ai";
const Cards = (props) => {
  if (props.type === "trending") {
    return (
      <div className={classes.gridContainer}>
        {props.items.map((item) => (
          <Link
            to={
              item.media_type === "movie"
                ? `/movies/${item.id}`
                : `/tvshows/${item.id}`
            }
          >
            <div className={classes.Card} key={item.id}>
              <div className={classes.topContent}>
                {item.poster_path === null ? (
                  <div className={classes.noPoster}></div>
                ) : (
                  <img
                    className={classes.poster}
                    src={"https://image.tmdb.org/t/p/w342" + item.poster_path}
                  />
                )}
                <p
                  className={
                    item.poster_path === null
                      ? classes.noPosterName
                      : classes.name
                  }
                >
                  {item.title ? item.title : item.name}
                </p>
              </div>
              <div className={classes.rating}>
                <AiOutlineStar className={classes.star} />
                <p className={classes.rate}>{item.vote_average.toFixed(1)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className={classes.gridContainer}>
        {props.items.map((item) => (
          <div className={classes.Card} key={item.id}>
            <Link
              to={
                props.type === "movie"
                  ? `/movies/${item.id}`
                  : `/tvshows/${item.id}`
              }
            >
              <img
                className={classes.poster}
                src={"https://image.tmdb.org/t/p/w342" + item.poster_path}
              />
              <p className={classes.name}>
                {item.title ? item.title : item.name}
              </p>
              <div className={classes.rating}>
                <AiOutlineStar className={classes.star} />
                <p className={classes.rate}>{item.vote_average.toFixed(1)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
};

export default Cards;
