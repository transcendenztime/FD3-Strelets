"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2Jsx from './components/Br2Jsx';

let text="первый<br>второй<br/>третий<br />последний";

ReactDOM.render(
  <Br2Jsx text={text}/>
  , document.getElementById('MainContainer')
);

