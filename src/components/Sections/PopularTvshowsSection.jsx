import { useEffect, useState } from "react";
import Section from "../Layout/Section";
import { json } from "react-router-dom";

const PopularTvshowsSection = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchPopularTvshows() {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
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
    fetchPopularTvshows();
  }, []);

  return (
    <>
      <Section
        path={"tvshows/popular"}
        type="tvshow"
        sectionTitle={"Popular Tv Shows"}
        data={results}
      />
    </>
  );
};

export default PopularTvshowsSection;
