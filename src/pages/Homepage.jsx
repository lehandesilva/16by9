import Slideshow from "../components/UI/Slideshow";
import TrendingSection from "../components/Sections/TrendingSection";
import { json, useLoaderData } from "react-router-dom";
import PopularMoviesSection from "../components/Sections/PopularMoviesSection";
import TopRatedMoviesSection from "../components/Sections/TopRatedMoviesSection";
import UpcomingMoviesSection from "../components/Sections/UpcomingMoviesSection";
import PopularTvshowsSection from "../components/Sections/PopularTvshowsSection";
import TopRatedTvshowsSection from "../components/Sections/TopRatedTvshowsSection";
import OnTheAirTvshowsSection from "../components/Sections/OnTheAirTvshowsSection";

const Homepage = () => {
  const data = useLoaderData();
  const trendingResults = data.results;

  return (
    <>
      <Slideshow data={trendingResults} />
      <TrendingSection results={trendingResults} />
      <PopularMoviesSection />
      <TopRatedMoviesSection />
      <UpcomingMoviesSection />
      <PopularTvshowsSection />
      <TopRatedTvshowsSection />
      <OnTheAirTvshowsSection />
    </>
  );
};

export default Homepage;

export async function loader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?language=en-US",
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
    return response;
  }
}
