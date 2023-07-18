import { useLoaderData, useParams } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const TopRatedTvshows = () => {
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
      pageId={1}
      cardContent={results}
      type="tvshow"
      pageNum={pageNum}
      currentGenre={genre}
    />
  );
};

export default TopRatedTvshows;

export async function loader({ params }) {
  let pageNum = params.page;
  let genreNum = params.genre;

  if (pageNum === undefined) {
    pageNum = 1;
  }

  const response = await fetch(
    "https://api.themoviedb.org/3/discover/tv?include_adult=true&language=en-US&page=" +
      pageNum +
      "&sort_by=vote_average.desc&vote_count.gte=200&with_genres=" +
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
    //...
  } else {
    return response;
  }
}
