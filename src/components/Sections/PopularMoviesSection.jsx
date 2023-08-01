import { useEffect, useState } from "react";
import Section from "../Layout/Section";
import { json } from "react-router-dom";

const PopularMoviesSection = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_SOME_KEY,
          },
        }
      );
      if (!response.ok) {
        return json({ message: "Could not fetch events" }, { status: 500 });
      } else {
        const resData = await response.json();
        setResults(resData.results);
      }
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Section
        path="movies/popular"
        type="movie"
        sectionTitle={"Popular Movies"}
        data={results}
      />
    </>
  );
};

export default PopularMoviesSection;
