"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { qty_add, prod_del, sum_qty } from '../../redux/cartAC';

import { delLocalStorage, editLocalStorage } from '../../services/LocalStorage';
import { round2 } from '../../services/round2';

import '../../styles/Cart/ProdCartTable.css';

class ProdCartTable extends React.PureComponent {
  
  static propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imgUrl: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        sum: PropTypes.number.isRequired,
      }),
  };
  

  deleteProduct = (e) => {
    //анимация удаления товара из корзины
    $( e.target.closest("tr") ).animate({
      opacity: 0
    }, 400, () => {
      this.props.dispatch( prod_del(this.props.info.id) ); 
      this.props.dispatch( sum_qty( - this.props.info.qty) );    
    });
    delLocalStorage(this.props.info.id);
  }

  changeQty = (e) => {
    let newQTY = +e.target.value;
    //если количество стало равно "0", удаляем товар
    if(newQTY == 0)
    {
      this.deleteProduct(e);
    }else{

      let newSum = round2(this.props.info.price * newQTY, 100)// округляем до вида 0,00
      
      this.props.dispatch( qty_add(this.props.info.id, newQTY, newSum) );
      this.props.dispatch( sum_qty(newQTY - this.props.info.qty) );

      let newInfo = {...this.props.info, qty: newQTY, sum: newSum};
      editLocalStorage(this.props.info.id, newInfo);
    }    
  }
  
  render() {

    return (
        <tr>
          <td className = "td_delButton" ><input type = "button" value = "&times;" onClick = {this.deleteProduct} title = "УДАЛИТЬ" className = "delProd-button" /></td>
          <td className = "td_img"><img src = {this.props.info.imgUrl} className = "cart_img " /></td>
          <td className = "td_prodName">
            <NavLink to = {"/catalogue/"+ this.props.info.category + "/" + this.props.info.id} className = "cart_prodName " >
              {this.props.info.name}
            </NavLink>
          </td>
          <td className = "td_prodPrice"><div className = "cart_prodPrice" >{this.props.info.price + " руб."}</div></td>
          <td className = "td_qty">                
            <div className="CounterButton">
              <input type='number' step = "1" min = "0" defaultValue = {this.props.info.qty} onChange={this.changeQty} title = "Кол-во"  className = "prodQty-button"/>
            </div>
          </td>
          <td className = "td_sum"><div className = "cart_prodPrice">{this.props.info.sum + " руб."}</div></td>
        </tr>
        
    );
    
  }

}
    
const mapStateToProps = function (state) {
  // этому компоненту ничего не нужно из хранилища Redux
  return { }; 
};

export default connect(mapStateToProps)(ProdCartTable);
