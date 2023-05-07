import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

const TvshowsRootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default TvshowsRootLayout;
