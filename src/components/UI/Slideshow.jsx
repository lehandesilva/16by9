import { useState, useEffect, Fragment } from "react";
import classes from "./Slideshow.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Slideshow = (props) => {
  const [index, setIndex] = useState(0);
  const slides = props.data;

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      10000
    );
    return () => {};
  }, [index]);

  return (
    <>
      <div className={classes.slideshow}>
        <div
          className={classes.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <div className={classes.slide}>
            {slides.map((item) => (
              <Fragment key={item.id}>
                <img
                  className={classes.heroImg}
                  src={
                    "https://image.tmdb.org/t/p/original" + item.backdrop_path
                  }
                />
                <img
                  className={classes.poster}
                  src={"https://image.tmdb.org/t/p/original" + item.poster_path}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.movieInfo}>
        <p className={classes.year}>
          {slides[index].release_date
            ? slides[index].release_date.slice(0, 4)
            : slides[index].first_air_date.slice(0, 4)}
        </p>
        <Link
          to={
            slides[index].media_type === "movie"
              ? `/movies/${slides[index].id}`
              : `/tvshows/${slides[index].id}`
          }
        >
          <h1 className={classes.title}>
            {slides[index].title
              ? slides[index].title.length > 41
                ? `${slides[index].title.slice(0, 41)}...`
                : slides[index].title
              : slides[index].name.length > 41
              ? `${slides[index].name.slice(0, 41)}...`
              : slides[index].name}
          </h1>
        </Link>
        <p className={classes.overview}>
          {slides[index].overview.length > 500
            ? `${slides[index].overview.slice(0, 500)} ...`
            : slides[index].overview}
        </p>
        <p className={classes.genre}></p>
        <p className={classes.genre}></p>
        <p className={classes.genre}></p>
        <div className={classes.rating}>
          <AiOutlineStar className={classes.star} />
          <p className={classes.rate}>
            {slides[index].vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </>
  );
};

export default Slideshow;
