import React from 'react';
import {Fragment} from 'react'

import WithRainbowFrame from './WithRainbowFrame'
class RainbowFrame extends React.Component {

  render() {
    let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
    let FramedFragment=WithRainbowFrame(colors)(Fragment);
    return (
        <FramedFragment>
            Hello
        </FramedFragment>
    );
  }

}

export default RainbowFrame;