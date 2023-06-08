import { useEffect, useState } from "react";
import Section from "../Layout/Section";

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
        //...
      } else {
        const resData = await response.json();
        if (resData.results.length > 16) {
          resData.results.length = 16;
        }
        setResults(resData.results);
      }
    }
    fetchPopularTvshows();
  }, []);

  return (
    <>
      <Section
        path={"tvshows/popular"}
        sectionTitle={"Popular Tv Shows"}
        data={results}
      />
    </>
  );
};

export default PopularTvshowsSection;
