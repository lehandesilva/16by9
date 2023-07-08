import { useLoaderData } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const PopularTvshows = () => {
  const data = useLoaderData();
  const results = data.results;

  return <PageContent pageId={0} cardContent={results} type="tvshow" />;
};

export default PopularTvshows;

export async function loader() {
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
    return response;
  }
}
