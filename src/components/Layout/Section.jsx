import classes from "./Section.module.css";
import { Link } from "react-router-dom";
import MiniCards from "../UI/MiniCards";
import { HiOutlineChevronRight } from "react-icons/hi";

const Section = (props) => {
  return (
    <>
      <div className={classes.container}>
        <Link to={props.path}>
          <h1 className={classes.title}>
            {props.sectionTitle}
            <HiOutlineChevronRight className={classes.rightArrow} />
          </h1>
        </Link>
      </div>
      <MiniCards items={props.data} type={props.type} />
    </>
  );
};

export default Section;
