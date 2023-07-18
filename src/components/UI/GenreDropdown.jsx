import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

import classes from "./GenreDropdown.module.css";

const GenreDropdown = (props) => {
  const [dropdownState, setDropdownState] = useState(false);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      if (props.type === "movie") {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: import.meta.env.VITE_SOME_KEY,
            },
          }
        );
        if (!response.ok) {
        } else {
          const resData = await response.json();
          setGenreList(resData.genres);
        }
      } else if (props.type === "tvshow") {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/tv/list",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: import.meta.env.VITE_SOME_KEY,
            },
          }
        );
        if (!response.ok) {
        } else {
          const resData = await response.json();
          setGenreList(resData.genres);
        }
      }
    }
    fetchGenres();
  }, []);

  const currentGenre = genreList.filter(
    (genre) => genre.id === props.currentGenre
  );

  const dropdownStateHandler = () => {
    if (dropdownState === false) {
      setDropdownState(true);
    }
    if (dropdownState) {
      setDropdownState(false);
    }
  };

  const selectClickHandler = () => {
    if (dropdownState) {
      setDropdownState(false);
    }
  };

  return (
    <>
      <div className={classes.dropdownInactive} onClick={dropdownStateHandler}>
        <p className={classes.activeGenre}>
          {currentGenre.length === 0 ? "Genres" : currentGenre[0].name}
        </p>
        <AiOutlineDown className={classes.downIcon} />
      </div>
      {dropdownState && (
        <div className={classes.dropdownActive} onClick={selectClickHandler}>
          <ul className={classes.dropdownList}>
            {genreList.map((genre) => (
              <Link to={`${props.currentLink}/1/${genre.id}`}>
                <li key={genre.id} className={classes.listItem}>
                  <p key={genre.id}>{genre.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GenreDropdown;
