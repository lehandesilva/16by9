import classes from "./Grid.module.css";
const Grid = (props) => {
  return <div className={classes.gridContainer}>{props.children}</div>;
};

export default Grid;
