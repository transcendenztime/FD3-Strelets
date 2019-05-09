import React from 'react';

import './RainbowFrame.css';

function WithRainbowFrame(colors) {
  return function(Component) {
    return props => {
      let rainbow = <Component>{props.children}</Component>;
      colors.forEach((c) => {
        rainbow = <div style={{border:"solid 5px "+c,padding:"5px"}}>{rainbow}</div>
        }
      );
      return <div className="Rainbow">{rainbow}</div>;
    }
  }
}

export default WithRainbowFrame;