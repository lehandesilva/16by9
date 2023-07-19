import classes from "./ErrorComponent.module.css";

const ErrorComponent = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.message}>{props.message}</p>
    </>
  );
};

export default ErrorComponent;
