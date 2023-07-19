import { json, useLoaderData, useParams } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const PopularMovies = () => {
  const params = useParams();
  const data = useLoaderData();
  const results = data.results;

  let pageNum = params.page;
  let genre = params.genre;

  if (pageNum === undefined) {
    pageNum = 1;
  } else {
    pageNum = parseInt(pageNum);
  }

  genre = parseInt(genre);

  return (
    <PageContent
      pageId={0}
      cardContent={results}
      type="movie"
      pageNum={pageNum}
      currentGenre={genre}
    />
  );
};

export default PopularMovies;

export async function loader({ params }) {
  let pageNum = params.page;
  let genreNum = params.genre;

  if (pageNum === undefined) {
    pageNum = 1;
  }

  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=" +
      pageNum +
      "&sort_by=popularity.desc&with_genres=" +
      genreNum,
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
