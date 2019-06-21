"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { prod_add, sum_qty } from '../../redux/cartAC';

import { setLocalStorage } from '../../services/LocalStorage';

import { convertLink } from '../../services/LinkConverter';

import '../../styles/Catalogue/ProdInfoPage.css';

class ProdInfoPage extends React.PureComponent {
  
  static propTypes = { 
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
  };

  state = {
    info: this.props.info,
    inCart:0, //1 - в корзине
  };

  
  newQTYRef = null;

  setNewQTYRef = (ref) => {
    this.newQTYRef = ref
  }

  addIntoCart = () => {
    let qty = +this.newQTYRef.value;
    let sum = qty * this.props.info.price;
    let info = {...this.state.info, qty: qty, sum: sum};

    this.props.dispatch( prod_add(this.state.info.id, info) ); //добавляем в корзину
    this.props.dispatch( sum_qty(qty) ); //добавляем количество продуктов в корзине для отображения в header

    setLocalStorage(this.state.info.id, info);

    this.setState( {inCart:1} );
  }
  
  render() {

    let link = convertLink(this.props.info.category);

    return (
      <div>
            
          <div className = "breadcrumbs-container">
            <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to="/catalogue" className="breadcrumbs">Каталог</NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to={"/catalogue/" + link} className="breadcrumbs">
              {this.props.info.category}
            </NavLink>
            <span className="breadcrumbs-arr" > &rarr; </span>
            <NavLink to={"/catalogue/" + link + "/" + this.props.info.id} className="breadcrumbs">
              {this.props.info.name}
            </NavLink>
          </div>
          <hr />

        <h2 className = "productPage-title" >{this.props.info.name}</h2>
        <div className="productPage-container">
          <div className = "productPage-img-container"><img src = {this.props.info.imgUrl} className = "productPage-img" /></div>
          <div className = "productPage-info">
            <p>{this.props.info.category}</p>
            <p>{this.props.info.brand}</p>
            <p>{this.props.info.description}</p>
            <p className="productPage-price">{this.props.info.price + " руб."}</p>
            <div className = "addCart-block">
              <input type='number' step = "1" min = "0" defaultValue = {1} title = "Кол-во" ref = {this.setNewQTYRef} className = "addQty_button" />
              <button onClick = {this.addIntoCart}  className = {this.state.inCart == 1? "addCart_button inCart" : "addCart_button"}>
                {this.state.inCart != 1? <i className="fas fa-shopping-cart"></i> : "в корзине"}              
              </button>
            </div>
          </div>
        </div> 

      </div>            
    );
  }
}
 
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { 
  }; 
};

export default connect(mapStateToProps)(ProdInfoPage);
