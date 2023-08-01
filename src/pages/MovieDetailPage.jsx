import { json, useLoaderData } from "react-router-dom";
import MediaDetailContent from "../components/Layout/MediaDetailContent";

const MovieDetailPage = () => {
  const data = useLoaderData();

  return <MediaDetailContent type="movie" data={data} />;
};

export default MovieDetailPage;

export async function loader({ params }) {
  let movieID = params.movieID;

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieID + "?language=en-US",
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
