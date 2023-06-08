import Section from "../Layout/Section";

const Trending = (props) => {
  return (
    <>
      <Section sectionTitle={"Trending"} data={props.results} />
    </>
  );
};

export default Trending;
