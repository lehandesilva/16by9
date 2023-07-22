import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assests/white.png";
import SearchBar from "../UI/SearchBar";
import AdultFilterToggle from "../UI/AdultFilterToggle";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className={classes.logoAndSearch}>
            <li>
              <NavLink to="/" end>
                <img className={classes.logo} src={logo} alt="logo" />
              </NavLink>
            </li>
            <li className={classes.searchBar}>
              <SearchBar />
            </li>
          </div>
          <div className={classes.navOptions}>
            <li className={classes.navOption}>
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
            <li className={classes.navOption}>
              <NavLink
                to="movies/popular"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Movies
              </NavLink>
            </li>
            <li className={classes.navOption}>
              <NavLink
                to="tvshows/popular"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                TV Shows
              </NavLink>
            </li>
            <li className={classes.navOption}>
              <AdultFilterToggle />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
