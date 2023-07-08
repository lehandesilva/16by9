import { useLoaderData } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const OnTheAirTvshows = () => {
  const data = useLoaderData();
  const results = data.results;

  return <PageContent pageId={2} cardContent={results} type="tvshow" />;
};

export default OnTheAirTvshows;

export async function loader() {
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
    //...
  } else {
    return response;
  }
}
