import { useLoaderData, useParams } from "react-router-dom";
import PageContent from "../components/Layout/PageContent";

const TopRatedTvshows = () => {
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
      pageId={1}
      cardContent={results}
      type="tvshow"
      pageNum={pageNum}
    />
  );
};

export default TopRatedTvshows;

export async function loader({ params }) {
  let pageNum = params.page;

  if (pageNum === undefined) {
    pageNum = 1;
  }

  const response = await fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=" + pageNum,
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
