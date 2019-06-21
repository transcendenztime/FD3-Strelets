"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import { delivery_chng } from '../../redux/cartAC';

import { cart_clear, qty_to_null } from '../../redux/cartAC';

import { clearLocalStorage } from '../../services/LocalStorage';

import { round2 } from '../../services/round2';
import { checkNameValue, checkEmailValue, checkTelValue  } from '../../services/checkForm';

import OrderTable from './OrderTable';

import '../../styles/Cart/Order.css';
import '../../styles/Cart/OrderTable.css';

class Order extends React.PureComponent {
  
  static propTypes = {
    cart: PropTypes.object.isRequired//delivery: 0-самовывоз, 1-доставка Почтой, 2-доставка Курьером по Минску, 3-доставка Курьером по РБ
  };

  state = {
    name: '',
    email: '',
    tel: '',
    errorName: 0, //0-нет ошибки, 1-пустое значение, 2-неверное значение
    errorEmail: 0, //0-нет ошибки, 1-нет ошибки (email не обязателен), 2-неверное значение
    errorTel: 0, //0-нет ошибки, 1-пустое значение, 2-неверное значение

  }
  

  changeDeliverySum = (num) => {
    switch(num) {
        case 0:
          return 0
        case 1:
          return 4
        case 2:
          return 6
        case 3:
          return 8
    }
  }

  changeDelivery = (e) => {
    this.props.dispatch( delivery_chng(+e.target.value) );
  }

  totalSum = 0;

  
  changeName = (e)=> {
    this.setState( {name: e.target.value, errorName: 0} );
  };
  checkName = () => {
    let check = checkNameValue(this.state.name);
    this.setState( {errorName: check} );
    return check;
  };

  changeEmail = (e)=> {
    this.setState( {email: e.target.value, errorEmail: 0} );
  };
  checkEmail = () => {
    let check = checkEmailValue(this.state.email);
    this.setState( {errorEmail: check} );
  };

  changeTel = (e)=> {
    this.setState( {tel: e.target.value, errorTel: 0} );
  };
  checkTel = () => {
    let check = checkTelValue(this.state.tel);
    this.setState( {errorTel: check} );
    return check;
  };

  clearCart = () => {
    //анимация очистки корзины
    $('.cart-table').animate({
      opacity: 0
    }, 400, () => {
      this.props.dispatch( cart_clear() );
      this.props.dispatch( qty_to_null() );
    });    
    clearLocalStorage();
  }

  checkForm = (e) => {
    let checkN = this.checkName();
    let checkT = this.checkTel();

    if(checkN!==0 || this.state.errorEmail || checkT!==0) {
      (function($) {
        $(document).ready(function() {
             $('html, body').animate({
               'scrollTop':   $('#anchor').offset().top
             }, 500);
        });
      })(jQuery);
      e.preventDefault();
    }
    else{
      this.clearCart();
      alert("Заказ сформирован!");
    }
  }
  
  render() {

    let productsCode = [];
    this.totalSum = 0;

    for (let prod in this.props.cart.products) {
        productsCode.push(<OrderTable key = {this.props.cart.products[prod].id} info = {this.props.cart.products[prod]} />);
        
        this.totalSum += this.props.cart.products[prod].sum
    };

    return (
        <div>
          <hr />
          <div className="clear-cart-container">
						<input type="button" value="Очистить корзину" className="clear-cart" onClick = {this.clearCart}></input>
					</div>
          <h2 id="anchor">Оформление заказа:</h2>

          <div className = "order">

            <div>
				      <label htmlFor="order-name" className="order-title">Выберите доставку</label><br />
              <select name="order-shiping"  className="order-input"
                onChange = {this.changeDelivery} defaultValue = {this.props.cart.delivery}>
                <option value = {0}>Самовывоз: ул. Змитрока Бядули, 15</option>
                <option value = {1}>Почтой (только семена) (4 руб.) </option>
                <option value = {2}>Курьером по Минску (6 руб.)</option>
                <option value = {3}>Курьером по Беларуси (8 руб.)</option>
              </select>
			      </div>

            <div>
				      <label htmlFor="order-name" className="order-title">Ваше имя *</label><br />
              <input type="text" name="order-name" id="order-name" className="order-input"
                onChange = {this.changeName} onBlur = {this.checkName} />
              <span className = {this.state.errorName == 1 ? "visible" : "invisible"}> * Обязательное поле</span>
              <span className = {this.state.errorName == 2 ? "visible" : "invisible"}> * Введите до 30 букв</span>
			      </div>

            <div>
              <label htmlFor="order-email" className="order-title">Ваш email</label><br />
              <input type="email" name="order-email" id="order-email" className="order-input" 
                onChange = {this.changeEmail} onBlur = {this.checkEmail}  />
              <span className = {this.state.errorEmail == 2 ? "visible" : "invisible"}> * Некорректный email </span>
            </div>
							
            <div>
              <label htmlFor="order-tel" className="order-title">Ваш телефон для связи *</label><br />
              <input type="tel" name="order-tel" id="order-tel" className="order-input"
                onChange = {this.changeTel} onBlur = {this.checkTel}  />
              <span className = {this.state.errorTel == 1 ? "visible" : "invisible"}> * Обязательное поле</span>
              <span className = {this.state.errorTel == 2 ? "visible" : "invisible"}> * Некорректный номер телефона</span>
            </div>

            <div>
              <label htmlFor="order-text" className="order-title">Комментарий</label><br />
              <textarea name="order-text" id="order-text" className = "order-textarea"></textarea>
            </div>
						
          <table className = "order-table">
            <tbody>
              <tr>
                <th>ТОВАР</th>
                <th>Сумма</th>
              </tr>

              {productsCode}

              {this.props.cart.delivery ?
                <tr>
                  <td>Доставка</td>
                  <td>
                    {this.props.cart.delivery == 2 ?
                      'от ' + this.changeDeliverySum(this.props.cart.delivery) + " руб." : 
                      this.changeDeliverySum(this.props.cart.delivery) + " руб."
                    }
                  </td>
                </tr> 
                : null
              }

              <tr>
                <th>Итого:</th>
                <th>
                  {this.props.cart.delivery == 1 ?
                    'от ' + round2(this.totalSum + this.changeDeliverySum(this.props.cart.delivery), 100) + " руб."
                    : round2(this.totalSum + this.changeDeliverySum(this.props.cart.delivery), 100) + " руб."
                  }
                  {this.props.cart.delivery == 1 ?
                    <span className = "remark"><br />
                      * Окончательную стоимость уточняйте по телефону
                    </span> : null
                  }
                </th>
              </tr>
            </tbody>
          </table>
            
					<div className = "feedback-submit-container">
						<input type="submit" name="feedback-submit" value="Оформить заказ" className="feedback-submit" onClick = {this.checkForm}></input>
					</div>
          
          </div>
      </div>        
    );
    
  }

}
    
const mapStateToProps = function (state) {
    return {    
        cart: state.cart,
      }; 
};

export default connect(mapStateToProps)(Order);
