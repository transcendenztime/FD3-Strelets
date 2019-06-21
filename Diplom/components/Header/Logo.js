"use strict";

import React from 'react';
import { NavLink } from 'react-router-dom';
class Logo extends React.PureComponent {

  
    render() {
  
      return (          
        <NavLink to="/" exact className="header__logo">
          <div className="header__logo-text">Долина</div>
          <div className="header__logo-span">Растений</div>
        </NavLink>                        
      );
  
    }
  
  }
  
  export default Logo;