import { useEffect, useState } from "react";
import Section from "../Layout/Section";
import { json } from "react-router-dom";

const UpcomingMoviesSection = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchUpcomingMovies() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
        if (resData.results.length > 16) {
          resData.results.length = 16;
        }
        setResults(resData.results);
      }
    }
    fetchUpcomingMovies();
  }, []);

  return (
    <>
      <Section
        path={"movies/upcoming"}
        type="movie"
        sectionTitle={"Upcoming Movies"}
        data={results}
      />
    </>
  );
};

export default UpcomingMoviesSection;
