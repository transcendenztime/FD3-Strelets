"use strict";

import React from 'react';
import { NavLink } from 'react-router-dom';

import { checkNameValue, checkEmailValue, checkTelValue, checkTextValue  } from '../services/checkForm';

import '../styles/pages/Contacts.css';

class PageContacts extends React.PureComponent {
          
  state = {
    name: '',
    email: '',
		tel: '',
		text: '',
    errorName: 0, //0-нет ошибки, 1-пустое значение, 2-неверное значение
    errorEmail: 0, //0-нет ошибки, 1-нет ошибки тк не обязат поле, 2-неверное значение
		errorTel: 0, //0-нет ошибки, 1-пустое значение, 2-неверное значение
		errorText:0, //0-нет ошибки, 1-пустое значение

  }
  
  changeName = (e)=> {
    this.setState( {name: e.target.value, errorName: 0} );
  };
  checkName = () => {
    let check = checkNameValue(this.state.name);
    this.setState( {errorName: check} );
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
	};
	
  changeText = (e)=> {
    this.setState( {text: e.target.value, errorText: 0} );
  };
  checkText = () => {
    let check = checkTextValue(this.state.text);
    this.setState( {errorText: check} );
  };

  checkForm = (e) => {
    this.checkName();
    this.checkTel();
    this.checkText();

    if(this.state.errorName || this.state.errorEmail || this.state.errorTel || this.state.errorText) {
      e.preventDefault();
    }
	}
	

  render() {

    return (
      <div className = "contacts page">

        <h1 className="page-title">Контакты:</h1>

        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span className="breadcrumbs-arr" > &rarr; </span>
          <NavLink to="/contacts" className="breadcrumbs">Контакты</NavLink>
        </div>
        <hr />

        <div className="content__contacts">
					<h3 className="page-subtitle"> Время работы магазина:</h3>
					<p className="text">понедельник - пятница: с 9.00 до 18.00 </p>
					<h3 className="page-subtitle"> Адрес магазина:</h3>
					<p className="text">г. Минск, ул. Змитрока Бядули, 15</p>
					<h3 className="page-subtitle"> Телефон:</h3>
					<p className="text">+375 (33) 325-50-11</p>
          <p className = "text">Прием заказов по телефону с 9.00 до 18.00</p>
					<p className="text">Заказы через сайт принимаются круглосуточно.</p>
				</div>    
				    
				<h2 className="page-subtitle"> Карта проезда:</h2>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8d49deaeefa4b69aeec612972758a0dafd091fb16774e7a48873fbabbf0cca52&amp;source=constructor" width="600" height="450" frameBorder="0" allowFullScreen className = "contacts-map"></iframe>
        
				<div className="contacts__feedback">
					<h2 className="contacts-subtitle">Обратная связь</h2>
					<hr />
					<form className="contacts__feedback-form"  onSubmit = {this.checkForm}>
						<div className = "feedback-form__container">

							<div>
								<label htmlFor="feedback-name" className="contacts-title">Имя *</label><br />
								<input type="text" name="feedback-name" id="feedback-name" className="feedback-input"
									onChange = {this.changeName} onBlur = {this.checkName} /><br />
								<span className = {this.state.errorName == 1 ? "visible" : "invisible"}> * Обязательное поле</span>
								<span className = {this.state.errorName == 2 ? "visible" : "invisible"}> * Введите до 30 буквенных символов</span>
							</div>

							<div>
								<label htmlFor="feedback-email" className="contacts-title">email</label><br />
								<input type="email" name="feedback-email" id="feedback-email" className="feedback-input"
									onChange = {this.changeEmail} onBlur = {this.checkEmail}  /><br />
								<span className = {this.state.errorEmail == 2 ? "visible" : "invisible"}> * Некорректный email </span>
							</div>
							
							<div>
								<label htmlFor="feedback-tel" className="contacts-title">Телефон *</label><br />
								<input type="tel" name="feedback-tel" id="feedback-tel" className="feedback-input"
									onChange = {this.changeTel} onBlur = {this.checkTel}  /><br />
								<span className = {this.state.errorTel == 1 ? "visible" : "invisible"}> * Обязательное поле</span>
								<span className = {this.state.errorTel == 2 ? "visible" : "invisible"}> * Некорректный номер телефона</span>
							</div>

							<div>
								<label htmlFor="feedback-text" className="contacts-title">Комментарий *</label><br />
								<textarea name="feedback-text" id="feedback-text" className = "feedback-textarea"
									onChange = {this.changeText} onBlur = {this.checkText}  ></textarea><br />										
								<span className = {this.state.errorText == 1 ? "visible" : "invisible"}> * Обязательное поле</span>
							</div>
						</div> <br />

						<div className = "feedback-submit-container">
							<input type="submit" name="feedback-submit" value="Отправить" className="feedback-submit" onClick = {this.checkForm}></input>
						</div>

					</form>
				</div>
        
      </div>
    );
    
  }

}
    
export default PageContacts;
    