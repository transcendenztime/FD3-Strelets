"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class OrderTable extends React.PureComponent {
  
  static propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
        sum: PropTypes.number.isRequired,
      }),
  };
   
  
  render() {

    return (
        <tr>
          <td>{this.props.info.name}</td>
          <td>{this.props.info.sum + " руб."}</td>
        </tr>        
    );
    
  }

}
    
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

export default connect(mapStateToProps)(OrderTable);
