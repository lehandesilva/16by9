import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";
import Footer from "../components/Layout/Footer";

const RootLayout = () => {
  return (
    <>
      <Outlet />
      <MainNavigation />
      <Footer />
    </>
  );
};

export default RootLayout;
