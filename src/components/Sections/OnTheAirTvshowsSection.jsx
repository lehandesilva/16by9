import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Section from "../Layout/Section";

const OnTheAirTvshowsSection = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchOnTheAirTvshows() {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
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
    fetchOnTheAirTvshows();
  }, []);

  return (
    <>
      <Section
        path={"tvshows/ontheair"}
        type="tvshow"
        sectionTitle={"On The Air"}
        data={results}
      />
    </>
  );
};

export default OnTheAirTvshowsSection;
