import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';

import CartEmpty from '../components/Cart/CartEmpty';
import CartFull from '../components/Cart/CartFull';

class PageCart extends React.PureComponent {
    
  static propTypes = {
    cart: PropTypes.object.isRequired, // передано из Redux
  };
          
  render() {
    let l = Object.keys(this.props.cart.products).length;

    return (
      <div className = "cart page">
        <h1 className="page-title">Корзина:</h1>

        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span> &rarr; </span>
          <NavLink to="/cart" className="breadcrumbs"> Корзина</NavLink>
        </div>
        <hr />
        
        {
          l == 0 ? 
          <CartEmpty /> : <CartFull />          
        }
        
      </div>
    );
    
  }

}

const mapStateToProps = function (state) {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(PageCart);