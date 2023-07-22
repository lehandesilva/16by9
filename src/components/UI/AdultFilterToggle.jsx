import { useDispatch } from "react-redux";

import { filterActions } from "../../store/adult-filter-slice";
import classes from "./AdultFilterToggle.module.css";

const AdultFilterToggle = () => {
  const dispatch = useDispatch();

  const toggleFilterHandler = () => {
    dispatch(filterActions.toggle());
  };
  return (
    <>
      <label className={classes.switch}>
        <input type="checkbox" onChange={toggleFilterHandler} />
        <span className={classes.slider} />
      </label>
    </>
  );
};

export default AdultFilterToggle;
