import classes from "./Section.module.css";
import { Link } from "react-router-dom";
import MiniCards from "../UI/MiniCards";

const Section = (props) => {
  return (
    <>
      <Link to={props.path}>
        <h1 className={classes.title}>{props.sectionTitle}</h1>
      </Link>
      <MiniCards items={props.data} />
    </>
  );
};

export default Section;
