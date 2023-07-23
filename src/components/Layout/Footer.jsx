import classes from "./Footer.module.css";
import tmdbLogo from "../../assests/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>
        A project by{" "}
        <a className={classes.linkText} href="https://github.com/lehandesilva">
          Lehan De Silva.{" "}
        </a>
        <a href="https://github.com/lehandesilva">
          <AiFillGithub className={classes.githubLogo} />
        </a>
      </p>
      <p className={classes.text}>
        Film Data provided by{" "}
        <a className={classes.linkText} href="https://www.themoviedb.org/">
          TMDB.
        </a>
        <a href="https://www.themoviedb.org/">
          <img src={tmdbLogo} alt="TMDB Logo" className={classes.logo} />
        </a>
      </p>
    </div>
  );
};

export default Footer;
