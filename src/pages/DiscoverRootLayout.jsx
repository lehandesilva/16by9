import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

const DiscoverRootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default DiscoverRootLayout;
