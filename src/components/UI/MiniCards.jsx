import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import classes from "./MiniCards.module.css";

const MiniCard = (props) => {
  return (
    <>
      <div className={classes.gridContainer}>
        {props.items.map((item) => (
          <Link
            key={props.credits ? item.credit_id : item.id}
            to={
              item.media_type === "movie" || props.type === "movie"
                ? `/movies/${item.id}`
                : `/tvshows/${item.id}`
            }
          >
            <div className={classes.Card}>
              <div className={classes.topContent}>
                {item.poster_path === null ? (
                  <div className={classes.noPoster}></div>
                ) : (
                  <img
                    src={"https://image.tmdb.org/t/p/w154" + item.poster_path}
                    className={classes.posterImg}
                  />
                )}
                <p
                  className={
                    item.poster_path === null
                      ? classes.noPosterName
                      : classes.name
                  }
                >
                  {item.title
                    ? item.title.length > 36
                      ? `${item.title.slice(0, 36)}...`
                      : item.title
                    : item.name.length > 36
                    ? `${item.name.slice(0, 36)}...`
                    : item.name}
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
    </>
  );
};

export default MiniCard;
