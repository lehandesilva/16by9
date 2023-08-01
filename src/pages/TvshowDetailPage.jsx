import { json, useLoaderData } from "react-router-dom";
import MediaDetailContent from "../components/Layout/MediaDetailContent";

const TvshowDetailPage = () => {
  const data = useLoaderData();

  return <MediaDetailContent type="tvshow" data={data} />;
};

export default TvshowDetailPage;

export async function loader({ params }) {
  let tvshowID = params.tvshowID;

  const response = await fetch(
    "https://api.themoviedb.org/3/tv/" + tvshowID + "?language=en-US",
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
