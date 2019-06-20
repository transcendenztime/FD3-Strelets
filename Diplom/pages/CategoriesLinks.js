import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/pages/CategoryLink.css';

class CategoriesLinks extends React.Component {
          
  render() {

    return (
      <ul className = "category-menu main-menu">
        <li><NavLink to="/catalogue/semena-ovoshchey" className="CategoryLink PageLink">Семена овощей</NavLink></li>
        <li><NavLink to="/catalogue/semena-cvetov" exact className="CategoryLink PageLink">Семена цветов</NavLink></li>
        <li><NavLink to="/catalogue/sazhency-roz" className="CategoryLink PageLink">Саженцы роз</NavLink></li>
        <li><NavLink to="/catalogue/lukovicy-i-klubnelukovicy-cvetov" className="CategoryLink PageLink">Луковицы и клубнелуковицы цветов</NavLink></li>
        <li><NavLink to="/catalogue/plodovye-derevya-i-kustarniki" className="CategoryLink PageLink">Плодовые деревья и кустарники</NavLink></li>
        <li><NavLink to="/catalogue/hvoynye-rasteniya" className="CategoryLink PageLink">Хвойные растения</NavLink></li>
		    <li><NavLink to="/catalogue/dekorativnye-kustarniki" className="CategoryLink PageLink">Декоративные кустарники</NavLink></li>
		    <li><NavLink to="/catalogue/rododendrony" className="CategoryLink PageLink">Рододендроны</NavLink></li>
      </ul>
    );

  }

}
    
export default CategoriesLinks;