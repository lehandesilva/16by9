import Cards from "../UI/Cards";
import classes from "./PageContent.module.css";

const PageContent = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <Cards items={props.cardContent} />
    </>
  );
};

export default PageContent;
