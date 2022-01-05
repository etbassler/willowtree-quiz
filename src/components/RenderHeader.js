import React from 'react';
import PropTypes from "prop-types";

class RenderHeader extends React.Component  {
  static propTypes = {
    screen: PropTypes.string
  };
 headerText = () => {
  if (this.props.screen === 'timed'){
    return 'Timed Mode';
  }
  if (this.props.screen === 'practice'){
    return 'Practice Mode';
  }
 }

  render() {
    return (
      <header className="App-header">
        <button onClick={this.props.goHome}>{'<-'}</button>
        <h2>{this.headerText()}</h2>
      </header>
    );
  }
}

export default RenderHeader;
