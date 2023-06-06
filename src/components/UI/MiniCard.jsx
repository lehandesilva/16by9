import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import classes from "./MiniCard.module.css";

const MiniCard = (props) => {
  let { imgPath: img, name: name, rating: rating, id: id } = props;

  return (
    <>
      {props.items.map((item) => (
        <div className={classes.Card}>
          <Link
            to={
              props.type === "movie"
                ? `/Movies/${item.id}`
                : `/Tvshows/${item.id}`
            }
          >
            <img
              src={"https://image.tmdb.org/t/p/w154" + item.img}
              className={classes.posterImg}
            />
            <p className={classes.name}>{item.name}</p>
            <div className={classes.rating}>
              <AiOutlineStar className={classes.star} />
              <p className={classes.rate}>{item.rating}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default MiniCard;
