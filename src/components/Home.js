import React from 'react';
import PropTypes from "prop-types";

class Home extends React.Component  {
  static propTypes = {
    screen: PropTypes.string
  };

  render() {
    return (
      <div className="Home">
{'home'}
      </div>
    );
  }
}

export default Home;
