"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import {sum_qty, prod_add } from '../../redux/cartAC';

import { clearLocalStorage, checkLocalStorage, getLocalStorage } from '../../services/LocalStorage'

import '../../styles/Header/HeaderCart.css';

class HeaderCart extends React.PureComponent {
 
  static propTypes = {
    selectedProducts: PropTypes.object.isRequired, // передано из Redux
  };

  componentDidMount = () => {
      if( checkLocalStorage() ) {
        let data = getLocalStorage();
        for(let prod in data) {
          this.props.dispatch( prod_add(prod, data[prod]) ); //добавляем в корзину
          this.props.dispatch( sum_qty(data[prod].qty) ); //добавляем количество продуктов в корзине для отображения в header
        }
      };      
  };

  componentWillReceiveProps = (newProps) => {
    if(newProps.selectedProducts.productsQTY == 0) {
      clearLocalStorage();}
  };

  render() {

    return (
    <div className="header__cart">
      <NavLink to="/cart" className="header__cart-link"> 
      <i className="fas fa-shopping-cart">
        {
          this.props.selectedProducts.productsQTY != 0 ?
          <div className = "cart-qty">{this.props.selectedProducts.productsQTY}</div> : null
        }
      </i>
      </NavLink>
    </div>
    );

  }

}

const mapStateToProps = function (state) {
  return {
    selectedProducts: state.selectedProducts,
  };
};

export default connect(mapStateToProps)(HeaderCart);