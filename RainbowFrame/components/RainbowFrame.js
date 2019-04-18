import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.rainbow = this.props.children; //инициализируем сразу тем, что пришло в "children" (в нашем случае это "hello")
  }
  
  render() {
    //проходим по массиву с цветами
    //в каждой итерации цикла в rainbow заменяем на <div>, в качестве props.children которого передаем текущее состояние rainbow
    this.props.colors.forEach((c) => 
      this.rainbow = <div style={{border:"solid 5px "+c,padding:"5px"}}>{this.rainbow}</div>
    );

    return (
      <div className="Rainbow">{this.rainbow}</div>
    );
  }

}

export default RainbowFrame;
