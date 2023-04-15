import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <MainNavigation />
    </>
  );
};

export default RootLayout;
