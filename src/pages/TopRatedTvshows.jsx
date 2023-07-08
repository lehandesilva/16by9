import { useLoaderData } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const TopRatedTvshows = () => {
  const data = useLoaderData();
  const results = data.results;

  return <PageContent pageId={1} cardContent={results} type="tvshow" />;
};

export default TopRatedTvshows;

export async function loader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
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
    return response;
  }
}
