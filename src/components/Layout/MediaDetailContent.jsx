import { useEffect, useState } from "react";
import classes from "./MediaDetailContent.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import MiniCard from "../UI/MiniCards";

const MediaDetailContent = (props) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [directors, setDirectors] = useState([]);
  const [similarMedia, setSimilarMedia] = useState([]);
  useEffect(() => {
    async function fetchCredits() {
      if (props.type === "movie") {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + props.data.id + "/credits",
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
          const directorData = resData.crew.filter(
            (member) =>
              member.job === "Director" || member.job === "Co-Director"
          );
          setDirectors(directorData);
          if (resData.cast.length > 30) {
            resData.cast = resData.cast.slice(0, 30);
          }
          setCast(resData.cast);
          if (resData.crew.length > 30) {
            resData.crew = resData.crew.slice(0, 30);
          }
          setCrew(resData.crew);
        }
      } else {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/" +
            props.data.id +
            "/credits?language=en-US",
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
          if (resData.cast.length > 30) {
            resData.cast = resData.cast.slice(0, 30);
          }
          setCast(resData.cast);
          if (resData.crew.length > 30) {
            resData.crew = resData.crew.slice(0, 30);
          }
          setCrew(resData.crew);
        }
      }
    }
    async function fetchSimilar() {
      if (props.type === "movie") {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/" + props.data.id + "/similar",
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
          setSimilarMedia(resData.results);
        }
      } else {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/" + props.data.id + "/similar",
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
          setSimilarMedia(resData.results);
        }
      }
    }
    fetchCredits();
    fetchSimilar();
  }, [props.data.id]);

  return (
    <>
      <div className={classes.backdropContainer}>
        {props.data.backdrop_path === null ? (
          <div className={classes.noBackdrop}></div>
        ) : (
          <img
            className={classes.backdrop}
            src={"https://image.tmdb.org/t/p/w1280" + props.data.backdrop_path}
          />
        )}
        <div
          className={
            props.data.backdrop_path === null
              ? classes.topContainerWOBackdrop
              : classes.topContainerInfo
          }
        >
          <div className={classes.posterWithDetailsContainer}>
            {props.data.poster_path === null ? (
              <div className={classes.noPoster}></div>
            ) : (
              <img
                className={classes.poster}
                src={"https://image.tmdb.org/t/p/w342" + props.data.poster_path}
              />
            )}
            <div className={classes.movieDetails}>
              <p className={classes.year}>
                {props.data.release_date
                  ? props.data.release_date.slice(0, 4)
                  : props.data.in_production
                  ? `${props.data.first_air_date.slice(0, 4)} - `
                  : `${props.data.first_air_date.slice(
                      0,
                      4
                    )} - ${props.data.last_air_date.slice(0, 4)}`}
              </p>
              <h1 className={classes.title}>
                {props.data.title
                  ? props.data.title.length > 35
                    ? `${props.data.title.slice(0, 35)}... `
                    : props.data.title
                  : props.data.name.length > 35
                  ? `${props.data.name.slice(0, 35)}...`
                  : props.data.name}
              </h1>
              <div className={classes.directors}>
                <p className={classes.text}>
                  {props.type === "movie" ? "Directed by" : "Created by"}
                </p>
                {props.type === "movie"
                  ? directors.map((director) => (
                      <Link key={director.id} to={`/person/${director.id}`}>
                        <p className={classes.directed}>{director.name}</p>
                      </Link>
                    ))
                  : props.data.created_by.map((creator) => (
                      <Link
                        key={creator.credit_id}
                        to={`/person/${creator.id}`}
                      >
                        <p className={classes.directed}>{creator.name}</p>
                      </Link>
                    ))}
              </div>
              <div className={classes.genres}>
                {props.data.genres.map((genre) => (
                  <p key={genre.id} className={classes.genre}>
                    {genre.name}
                  </p>
                ))}
              </div>
              <p className={classes.time}>
                {props.type === "movie"
                  ? `${props.data.runtime} mins`
                  : `${props.data.number_of_episodes} episodes`}
              </p>
            </div>
          </div>
          <div className={classes.rating}>
            <AiOutlineStar className={classes.star} />
            <p className={classes.rate}>{props.data.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </div>
      )
      <div className={classes.overviewSection}>
        <h2 className={classes.secondaryTitle}>Overview</h2>
        <p className={classes.overview}>{props.data.overview}</p>
      </div>
      <div className={classes.lowerContainer}>
        <div className={classes.lowerLeft}>
          <h2 className={classes.secondaryTitle}>Cast</h2>
          <div className={classes.personSection}>
            {cast.map((actor) => (
              <Link key={actor.credit_id} to={`/person/${actor.id}`}>
                <div className={classes.person}>
                  <p
                    className={classes.name}
                  >{`${actor.name} - ${actor.character}`}</p>
                </div>
              </Link>
            ))}
          </div>
          <h2 className={classes.secondaryTitle}>Crew</h2>
          <div className={classes.personSection}>
            {crew.map((crewMember) => (
              <div key={crewMember.credit_id} className={classes.person}>
                <Link to={`/person/${crewMember.id}`}>
                  <p
                    className={classes.name}
                  >{`${crewMember.name} - ${crewMember.job}`}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.lowerRight}>
          <h2 className={classes.secondaryTitle}>Similar</h2>
          <MiniCard items={similarMedia} type={props.type} />
        </div>
      </div>
    </>
  );
};

export default MediaDetailContent;
