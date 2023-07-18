import { useEffect, useState } from "react";
import Section from "../Layout/Section";

const TopRatedMoviesSection = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: import.meta.env.VITE_SOME_KEY,
          },
        }
      );
      if (!response.ok) {
        //...
      } else {
        const resData = await response.json();
        if (resData.results.length > 16) {
          resData.results.length = 16;
        }
        setResults(resData.results);
      }
    }
    fetchTopRatedMovies();
  }, []);

  return (
    <>
      <Section
        path={"movies/toprated"}
        type="movie"
        sectionTitle={"Top Rated Movies"}
        data={results}
      />
    </>
  );
};

export default TopRatedMoviesSection;
