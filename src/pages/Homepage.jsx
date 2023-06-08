import Slideshow from "../components/UI/Slideshow";
import Trending from "../components/Sections/Trending";
import { useLoaderData } from "react-router-dom";

const Homepage = () => {
  const data = useLoaderData();
  const results = data.results;
  return (
    <>
      <Slideshow data={results} />
      <Trending results={results} />
    </>
  );
};

export default Homepage;

export async function loader() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_SOME_KEY,
      },
    }
  );

  if (!response.ok) {
  } else {
    return response;
  }
}
