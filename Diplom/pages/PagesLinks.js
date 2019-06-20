import React from 'react';
import { NavLink } from 'react-router-dom';

import CategoriesLinks from './CategoriesLinks';


import '../styles/pages/PagesLinks.css';

class PagesLinks extends React.Component {
          
  render() {

    return (
      <ul className = "main-menu">
        <li><NavLink to="/" exact className="PageLink" activeClassName="ActivePageLink">Главная</NavLink></li>
        <li>
          <NavLink to="/catalogue" className="PageLink catalogueLink" activeClassName="ActivePageLink" onClick = {this.removeFilter}>
            Каталог
          </NavLink>
          {<CategoriesLinks />}
        </li>
        <li><NavLink to="/warranty" className="PageLink" activeClassName="ActivePageLink">Гарантии</NavLink></li>
        <li><NavLink to="/partnership" className="PageLink" activeClassName="ActivePageLink">Сотрудничество</NavLink></li>
        <li><NavLink to="/contacts" className="PageLink" activeClassName="ActivePageLink">Контакты</NavLink></li>
        <li><NavLink to="/cart" className="PageLink" activeClassName="ActivePageLink">Корзина</NavLink></li>
      </ul>
    );
    
  }

}
     
export default PagesLinks;
    