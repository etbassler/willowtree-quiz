import React from "react";
import PropTypes from "prop-types";

class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="Home">
        <button onClick={this.props.getPracticeQuiz}>
          Take the Practice Quiz
        </button>
        {"home"}
      </div>
    );
  }
}

export default Home;
