"use strict";

import React from 'react';

import PagesLinks from '../../pages/PagesLinks';

import HeaderCart from './HeaderCart';
import Logo from './Logo';
import Search from './Search';

import '../../styles/Header/Header.css';

class Header extends React.Component {

  componentDidMount() {
      
  $(document).ready(function(){
    var toggleButton = document.querySelector('.toggleButton');
    var menu = document.querySelector('.header_main-menu');    
    var body = document.querySelector('body'); 
    var catalogue = document.querySelector('.catalogueLink', '.header_main-menu');

    body.onclick = function(e) {
      if  (e.target == toggleButton) {
        menu.classList.toggle('main-menu_open'); 
        if(menu.classList.contains('main-menu_open')) menu.classList.remove('catalogue-open')  
      }

      if (e.target == catalogue && menu.classList.contains('main-menu_open') ) { 
        if(menu.classList.contains('catalogue-open')) { 
          menu.classList.remove('catalogue-open');
          menu.classList.remove('main-menu_open');
          return
        }           
        e.preventDefault();
        menu.classList.add('catalogue-open');
      }
      
      if(e.target != toggleButton && e.target != catalogue){
        menu.classList.remove('catalogue-open');
        menu.classList.remove('main-menu_open');
      }
    };
    

  });
  }

  render() {

    return (
        <header>
          <div className="header-container">
            <Logo />      
            <div className="header__info">
              <p><b>+375 (33) 325-50-11</b></p>
              <p><b>+375 (29) 625-50-11</b></p>
              <p><b>+375 (25) 549-86-81</b></p>
            </div>
            <div className="header__info">
              <p><b>Режим работы</b></p>
              <p><b>Пн-Пт</b></p>
              <p><b>09:00-18:00</b></p>
            </div>
            <HeaderCart />
          </div>

          <div className="header-container1">
            <div className = "header-nav">         
				      <i className = "fas fa-bars toggleButton"></i>
              <div className = "header_main-menu">     
                <PagesLinks />
              </div>          
              <div><Search /></div>
            </div>          
          </div>
          
        </header>
    );

  }

}

export default  Header;
