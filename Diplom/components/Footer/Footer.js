"use strict";

import React from 'react';

import PagesLinks from '../../pages/PagesLinks';
import CategoriesLinks from '../../pages/CategoriesLinks';

import '../../styles/Footer/Footer.css';

class Footer extends React.PureComponent {


  render() {

    return (
        <footer className = "footer">
          <div className = "footer_shadow"></div>
          <div className = "footer-nav">
            
            <div className="footer-nav__block footer-nav__block2">
              <h3 className="footer-nav__title">Информация</h3>
              <PagesLinks />
            </div>
            <div className="footer-nav__block footer-nav__block1">
              <h3 className="footer-nav__title">Категории</h3>
              <CategoriesLinks />
            </div>
            <div className="footer-nav__block footer-nav__block3">
              <h3 className="footer-nav__title">Контакты</h3>
              <p>г. Минск, ул. Змитрока Бядули, 15</p>
              <p>+375 (33) 325-50-11</p>
              <p>Время работы 09:00-18:00 (Пн.-Пт.)</p>
            </div>
          </div>
          <div className="footer-copyright">
            2003 - 2019 Долина растений - садовый интернет-магазин саженцев, семян, луковиц и деревьев.
          </div>
        </footer>
    );

  }

}

export default Footer;