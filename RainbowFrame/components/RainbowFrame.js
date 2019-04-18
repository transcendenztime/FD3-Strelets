import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  render() {
    let rainbow = this.props.children;
    //проходим по массиву с цветами
    //в каждой итерации цикла rainbow заменяем на <div>, в качестве props.children которого передаем текущее значение rainbow
    this.props.colors.forEach((c) => 
      rainbow = <div style={{border:"solid 5px "+c,padding:"5px"}}>{rainbow}</div>
    );

    return (
      <div className="Rainbow">{rainbow}</div>
    );
  }

}

export default RainbowFrame;
