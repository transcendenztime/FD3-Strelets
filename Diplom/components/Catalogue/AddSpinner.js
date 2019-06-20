"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/Catalogue/AddSpinner.css'

class AddSpinner extends React.Component {

    static proptypes = {
        class: PropTypes.string.isRequired,
    }
  
    render() {
  
      return (          
        <div className = {this.props.class}>
          <i className="fa fa-spinner fa-spin fa-fw"></i>
        </div>                        
      );
  
    }
  
  }
  
export default AddSpinner;