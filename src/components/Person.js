import React from "react";
import PropTypes from "prop-types";

class Person extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      firstName: PropTypes.string,
    }),
    index: PropTypes.string
  };
  render() {
    const { firstName } = this.props.details;
    console.log(firstName);
    return (
      <li className="Person">
        <h3 className="Person-name">
          {firstName}
        </h3>
      </li>
    );
  }
}

export default Person;
