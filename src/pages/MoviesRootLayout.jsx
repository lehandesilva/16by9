import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

const MoviesRootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default MoviesRootLayout;
