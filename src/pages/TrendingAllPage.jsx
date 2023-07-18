import { useLoaderData, useParams } from "react-router-dom";
import TrendingPageContent from "../components/Layout/TrendingPageContent";

const TrendingAllPage = () => {
  const data = useLoaderData();
  const results = data.results;

  return <TrendingPageContent pageId={0} cardContent={results} />;
};

export default TrendingAllPage;

export async function loader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/week",
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
