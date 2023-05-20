import { Link } from "react-router-dom";
import classes from "./Card.module.css";
import { AiOutlineStar } from "react-icons/ai";
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
        <div className={classes.rating}>
          <AiOutlineStar className={classes.star} />
          <p className={classes.rate}>{props.rating}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
