import { Link } from "react-router-dom";
import classes from "./Cards.module.css";
import { AiOutlineStar } from "react-icons/ai";
const Cards = (props) => {
  return (
    <div className={classes.gridContainer}>
      {props.items.map((item) => (
        <div className={classes.Card}>
          <Link
            to={
              item.media_type === "movie"
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
};

export default Cards;
