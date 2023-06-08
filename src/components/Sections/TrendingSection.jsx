import Section from "../Layout/Section";

const TrendingSection = (props) => {
  return <>{<Section sectionTitle={"Trending"} data={props.results} />}</>;
};

export default TrendingSection;
