import propTypes from "prop-types";
export const Header = (props) => {
  return (
    <h1>Test</h1>
);
};
Header.defaultProps = {
  Title: "Title",
};
Header.propTypes = {
  Title: propTypes.string,
};
