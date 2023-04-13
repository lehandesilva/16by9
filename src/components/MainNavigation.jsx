import React from "react";
import { Form, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <div className={classes.pageIcon}>
          <NavLink to="/" end>
            <svg
              id="logo-14"
              width="73"
              height="49"
              viewBox="0 0 73 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                className="ccustom"
                fill="#68DBFF"
              ></path>{" "}
              <path
                d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                className="ccompli1"
                fill="#FF7917"
              ></path>{" "}
              <path
                d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                className="ccompli2"
                fill="#5D2C02"
              ></path>{" "}
            </svg>
          </NavLink>
        </div>
        <div className={classes.navOptions}>
          <ul>
            <li>
              <svg
                width="20pt"
                height="20pt"
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
                to="/movies"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshows"
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
