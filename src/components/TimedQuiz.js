import React from 'react';
import PropTypes from "prop-types";
import RenderHeader from './RenderHeader';
import Timer from './Timer';


class TimedQuiz extends React.Component  {
  static propTypes = {
    screen: PropTypes.string
  };

  render() {
    return (
      <div className="TimedQuiz">
      <RenderHeader screen={this.props.screen} goHome={this.props.goHome}></RenderHeader>
      <Timer/>
{'timed quiz'}
      </div>
    );
  }
}

export default TimedQuiz;
