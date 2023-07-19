import classes from "./ErrorContent.module.css";

const ErrorContent = (props) => {
  return (
    <>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.message}>{props.message}</p>
    </>
  );
};

export default ErrorContent;
