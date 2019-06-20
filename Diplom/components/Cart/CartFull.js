"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import ProdCartTable from './ProdCartTable';
import Order from './Order';

import {connect} from 'react-redux';

import '../../styles/Cart/CartFull.css';

class CartFull extends React.PureComponent {
  
  static propTypes = {
    cart: PropTypes.object.isRequired
  };

  state = {
    cart: this.props.cart,
  }

  
  componentWillReceiveProps = (newProps) => {
    this.setState( {cart: newProps.cart} );
  };
  
  
  render() {

    let productsCode = [];
    for (let prod in this.state.cart.products) {
      productsCode.push(<ProdCartTable key = {this.state.cart.products[prod].id} info = {this.state.cart.products[prod]} />)
    };

    return (
        <div className = "cart-full">
          <table className = 'cart-table'>
            <tbody>
              <tr>
                <th></th>
                <th className = "th_img"></th>
                <th>Товар</th>
                <th className = "th_prodPrice">Цена</th>
                <th className = "th_qty">Количество</th>
                <th className = "th_sum">Итого</th>
              </tr>
              {productsCode}
            </tbody>
          </table>
          <Order />
        </div>
        
    );
    
  }

}
    
const mapStateToProps = function (state) {
  return {    
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(CartFull);