import classes from "./MiniGrid.module.css";
const MiniGrid = (props) => {
  return <div className={classes.gridContainer}>{props.children}</div>;
};

export default MiniGrid;
