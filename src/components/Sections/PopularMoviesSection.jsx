import { useEffect, useState } from "react";
import Section from "../Layout/Section";

const PopularMoviesSection = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
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
    fetchPopularMovies();
  }, []);

  return (
    <>
      <Section
        path={"movies/popular"}
        sectionTitle={"Popular Movies"}
        data={results}
      />
    </>
  );
};

export default PopularMoviesSection;
