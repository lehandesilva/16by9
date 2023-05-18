import React from "react";
import { Form, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assests/white.png";
import SearchBar from "../UI/SearchBar";

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
              <SearchBar />
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
