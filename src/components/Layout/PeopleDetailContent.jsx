import { useEffect, useState } from "react";
import classes from "./PeopleDetailContent.module.css";
import MiniCard from "../UI/MiniCards";

const PeopleDetailContent = (props) => {
  const [readMore, setReadMore] = useState(false);
  const [movieCast, setMovieCast] = useState([]);
  const [movieCrew, setMovieCrew] = useState([]);
  const [tvshowCast, setTvshowCast] = useState([]);
  const [tvshowCrew, setTvshowCrew] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/person/" +
          props.data.id +
          "/movie_credits?language=en-US",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_SOME_KEY,
          },
        }
      );
      if (!response.ok) {
        return json({ message: "Could not fetch results" }, { status: 500 });
      } else {
        const resData = await response.json();
        setMovieCast(resData.cast);
        setMovieCrew(resData.crew);
      }
    }
    async function fetchTvshows() {
      const response = await fetch(
        "https://api.themoviedb.org/3/person/" +
          props.data.id +
          "/tv_credits?language=en-US",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_SOME_KEY,
          },
        }
      );
      if (!response.ok) {
        return json({ message: "Could not fetch results" }, { status: 500 });
      } else {
        const resData = await response.json();
        setTvshowCast(resData.cast);
        setTvshowCrew(resData.crew);
      }
    }
    fetchMovies();
    fetchTvshows();
  }, [props.data.id]);

  const readMoreButtonHandler = () => {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };
  return (
    <>
      <div className={classes.topContainer}>
        {props.data.profile_path === null ? (
          <div className={classes.noPoster}></div>
        ) : (
          <img
            className={classes.profilePoster}
            src={"https://image.tmdb.org/t/p/w342" + props.data.profile_path}
          />
        )}

        <div className={classes.personInfo}>
          <h1 className={classes.name}>{props.data.name}</h1>
          <p className={classes.bio}>
            {props.data.biography.length > 400
              ? readMore
                ? props.data.biography
                : `${props.data.biography.slice(0, 400)}.....`
              : props.data.biography}
          </p>
          {props.data.biography.length > 400 && (
            <div className={classes.readButtom} onClick={readMoreButtonHandler}>
              <p className={classes.text}>
                {readMore ? "Read less..." : "...Read more"}
              </p>
            </div>
          )}
          <p className={classes.info}>{`Born : ${props.data.birthday}`}</p>
          {props.data.deathday && (
            <p className={classes.info}>{`Died : ${props.data.deathday}`}</p>
          )}
          <p
            className={classes.info}
          >{`Known for ${props.data.known_for_department}`}</p>
        </div>
      </div>
      <div className={classes.lowerContainer}>
        <div className={classes.section}>
          <h2 className={classes.starringTitles}>Movies Starring</h2>
          <MiniCard type="movie" items={movieCast} />
          <h2 className={classes.starringTitles}>Movies By</h2>
          <MiniCard type="movie" items={movieCrew} />
        </div>
        <div className={classes.section}>
          <h2 className={classes.starringTitles}>Tv Shows Starring</h2>
          <MiniCard type="tv" items={tvshowCast} />
          <h2 className={classes.starringTitles}>Tv Shows By</h2>
          <MiniCard type="tv" items={tvshowCrew} />
        </div>
      </div>
    </>
  );
};

export default PeopleDetailContent;
