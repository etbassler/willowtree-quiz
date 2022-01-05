import React from 'react';
import PropTypes from "prop-types";
import RenderHeader from './RenderHeader';
import Person from './Person';

class PracticeQuiz extends React.Component  {
  static propTypes = {
    screen: PropTypes.string
  };

  render() {
    return (
      <div className="PracticeQuiz">
      {'Practice QUiz'}
      <RenderHeader screen={this.props.screen} goHome={this.props.goHome}></RenderHeader>
      {Object.keys(this.props.questionOptions).map(key => (
        <Person
          key={key}
          index={key}
          details={this.props.questionOptions[key]}
        />
      ))}
      </div>
    );
  }
}

export default PracticeQuiz;
