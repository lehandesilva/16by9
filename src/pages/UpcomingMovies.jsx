import { json, useLoaderData, useParams } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const UpComingMovies = () => {
  const params = useParams();
  const data = useLoaderData();
  const results = data.results;

  let pageNum = params.page;

  if (pageNum === undefined) {
    pageNum = 1;
  } else {
    pageNum = parseInt(pageNum);
  }

  return (
    <PageContent
      pageId={2}
      cardContent={results}
      type="movie"
      pageNum={pageNum}
    />
  );
};

export default UpComingMovies;

export async function loader({ params }) {
  let pageNum = params.page;

  if (pageNum === undefined) {
    pageNum = 1;
  }

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=" +
      pageNum,
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
