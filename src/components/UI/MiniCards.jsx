import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import classes from "./MiniCards.module.css";

const MiniCard = (props) => {
  return (
    <>
      <div className={classes.gridContainer}>
        {props.items.map((item) => (
          <div key={item.id} className={classes.Card}>
            <Link
              to={
                item.media_type === "movie"
                  ? `/Movies/${item.id}`
                  : `/Tvshows/${item.id}`
              }
            >
              <img
                src={"https://image.tmdb.org/t/p/w154" + item.poster_path}
                className={classes.posterImg}
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
    </>
  );
};

export default MiniCard;
