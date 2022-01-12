import React from "react";
import PropTypes from "prop-types";
import RenderHeader from "./RenderHeader";
import Person from "./Person";

class PracticeQuiz extends React.Component {
  static propTypes = {
    screen: PropTypes.string,
  };

  componentDidMount() {
    this.props.randomSix();
  }

  render() {
    return (
      <div className="PracticeQuiz">
        {"Practice Quiz"}

        {Object.keys(this.props.options).map((key) => (
          <Person key={key} index={key} details={this.props.options[key]} />
        ))}
      </div>
    );
  }
}

export default PracticeQuiz;
