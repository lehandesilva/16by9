import { Link } from "react-router-dom";
import classes from "./Card.module.css";
const Card = (props) => {
  const imgURL = props.imgUrl;
  return (
    <div className={classes.Card}>
      <Link
        to={
          props.type === "movie"
            ? `/Movies/${props.id}`
            : `/Tvshows/${props.id}`
        }
      >
        <img
          className={classes.poster}
          src={"https://image.tmdb.org/t/p/w342" + imgURL}
        />
        <p className={classes.name}>{props.name}</p>
        <p className={classes.rating}>{props.rating}</p>
      </Link>
    </div>
  );
};

export default Card;
