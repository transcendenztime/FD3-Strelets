import React from 'react';
import PropTypes from 'prop-types';

//import './br2jsx.css';

class Br2Jsx extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }

}

export default Br2Jsx;
