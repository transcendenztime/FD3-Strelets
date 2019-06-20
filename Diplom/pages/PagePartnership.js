import React from 'react';

import { NavLink } from 'react-router-dom';


import '../styles/pages/Partnership.css';

class PagePartnership extends React.PureComponent {

  render() {

    return (
      <div  className = "partnership page">
        <h1 className="page-title">О компании:</h1>

        <div className = "breadcrumbs-container">
          <NavLink to="/" exact className="breadcrumbs">Главная </NavLink>
          <span> &rarr; </span>
          <NavLink to="/partnership" className="breadcrumbs">Сотрудничество</NavLink>
        </div>
        <hr />

        <section className="description">
          <blockquote>
            <div>Приглашаем Вас к взаимовыгодному сотрудничеству с нашей компанией.</div>
            <div>Мы рады предложить Вам широкий ассортимент товаров по самым низким ценам.</div>
            <div>На данный момент у нас более 5000 позиций.</div>
            <div>Мы обеспечим индивидуальный подход, гибкую ценовую политику, наилучшее качество продукции.</div>
            <div>По вопросам оптовых цен можно связаться по тел +375291643523.</div>
            <div>или оставив заявку на наш электронный адрес: sadmir@bk.ru</div>
            <div>Очень будем рады крепким и честным отношениям.</div>
            <div>С Уважением! Долина Растений</div>
          </blockquote>
        </section>
        
      </div>
    );
    
  }

}
    
export default PagePartnership;
    