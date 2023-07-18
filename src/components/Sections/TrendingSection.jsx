import Section from "../Layout/Section";

const TrendingSection = (props) => {
  return (
    <>
      {
        <Section
          path="trending/all"
          sectionTitle={"Trending"}
          type="trending"
          data={props.results}
        />
      }
    </>
  );
};

export default TrendingSection;
