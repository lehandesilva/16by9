import { Link } from "react-router-dom";
import classes from "./Card.module.css";
const Card = (props) => {
  const imgURL = props.imgUrl;
  return (
    <Link to={props.id}>
      <div className={classes.Card}>
        <img
          className={classes.poster}
          src={"https://image.tmdb.org/t/p/w342" + imgURL}
        />
        <p className={classes.name}>{props.name}</p>
        <p className={classes.rating}>{props.rating}</p>
      </div>
    </Link>
  );
};

export default Card;
