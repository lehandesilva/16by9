import React from "react";
import { Form, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assests/white.png";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <div className={classes.pageIcon}>
          <NavLink to="/" end>
            <img className={classes.logo} src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className={classes.navOptions}>
          <ul>
            <li>
              <svg
                width="30pt"
                height="30pt"
                version="1.1"
                fill="white"
                viewBox="0 0 700 700"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m623.18 520.28-191.52-191.89c27.207-34.625 44.145-77.699 44.145-125.11 0-112.09-90.996-203.28-202.9-203.28s-202.9 91.187-202.9 203.28 90.996 203.32 202.9 203.32c47.832 0 91.277-17.359 126-45.219l191.42 191.8c4.5273 4.5273 10.5 6.8125 16.426 6.8125 5.9258 0 11.898-2.2852 16.426-6.8125 9.1016-9.1016 9.1016-23.801 0.003906-32.902m-350.27-160.2c-86.238 0-156.42-70.324-156.42-156.8 0-86.379 70.184-156.7 156.42-156.7 86.238 0 156.42 70.324 156.42 156.7 0 86.473-70.184 156.8-156.42 156.8" />
              </svg>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Movies"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Tvshows"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                TV Shows
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
