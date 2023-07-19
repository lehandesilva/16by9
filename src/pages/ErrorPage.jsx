import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/Layout/ErrorContent";
import MainNavigation from "../components/Layout/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error occured";
  let message = "Fully fucked up bro an error bloody occured!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found";
    message = "Could not find the bloody page";
  }

  return (
    <>
      <MainNavigation />
      <ErrorContent title={title} message={message} />
    </>
  );
};

export default ErrorPage;
