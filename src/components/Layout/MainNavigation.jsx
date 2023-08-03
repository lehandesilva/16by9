import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assests/white.png";
import SearchBar from "../UI/SearchBar";
import AdultFilterToggle from "../UI/AdultFilterToggle";
import { IoIosClose, IoMdMenu } from "react-icons/io";

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <header>
      <nav>
        <ul className={classes.navBar}>
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
          <div
            className={`${classes.navOptions} ${
              !menuOpen && classes.navOptionsActive
            }`}
          >
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
        <div className="hamburgerMenu" onClick={menuHandler}>
          {menuOpen ? (
            <IoIosClose className={classes.closeIcon} />
          ) : (
            <IoMdMenu className={classes.hamburgerIcon} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
