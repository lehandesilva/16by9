import { json, useLoaderData } from "react-router-dom";
import TrendingPageContent from "../components/Layout/TrendingPageContent";

const TrendingTvshows = () => {
  const data = useLoaderData();
  const results = data.results;

  return <TrendingPageContent pageId={2} cardContent={results} />;
};

export default TrendingTvshows;

export async function loader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/tv/week",
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
