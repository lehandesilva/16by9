import { json, useLoaderData } from "react-router-dom";
import PeopleDetailContent from "../components/Layout/PeopleDetailContent";
const PersonDetailPage = () => {
  const data = useLoaderData();

  return <PeopleDetailContent data={data} />;
};

export default PersonDetailPage;

export async function loader({ params }) {
  let personID = params.personID;

  const response = await fetch(
    "https://api.themoviedb.org/3/person/" + personID + "?language=en-US",
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
