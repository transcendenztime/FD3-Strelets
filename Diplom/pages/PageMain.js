"use strict";

import React from 'react';

import '../styles/pages/Main.css';

class Main extends React.PureComponent {

  componentDidMount() {

  }
  
  render() {

    return (

      <div  className = "main page">
        <section className="description">
        <h1 className="page-title">О компании:</h1>
          <p>Компания Долина Растений была образована в <b>2003</b> году и успешно работает по всей Республике Беларусь. Мы предлагаем товары из собственного питомника растений, из наших теплиц, а также широкий ассортимент садового интернет-магазина от белорусских, польских, немецких, итальянских и голландских производителей.</p>
          <div className="img-center"><img src="./img/cb9baf4e9a5f4217d5ca5182cab680ae.jpg"/></div>
          <blockquote><b>Нам важен каждый клиент, поэтому мы организовали доставку в каждый уголок Беларуси. Долина Растений - это компания, где работают профессионалы, любящие свое дело, и собирая каждый заказ наших Клиентов, мы собираем его как для себя.</b></blockquote>
          <p>Выбирая для вас ассортимент этого сайта, агрономы Долины Растений подбирают его, учитывая климатические особенности каждого сорта, чтобы растение отлично прижилось в белорусском климате. В своем предложении мы никогда не забываем популярные и полюбившиеся клиентам сорта. Отслеживая мировые садовые тенденции, мы любим баловать клиентов новинками селекции и эксклюзивными редкими сортами, которые удивят даже самых опытных садоводов. Долина Растений – это большой выбор разнообразных сортов, которые придутся по сердцу как искушенным садоводам-огородникам, так и начинающим любителям сада, ведь каждый найдет что-то для себя!</p>
          <blockquote><b>Мы гарантируем, что отправленные саженцы приедут живыми и очень быстро акклиматизируются на новом месте.</b></blockquote>
          <p>Растения – это живые существа, которые требуют бережного отношения с вниманием и любовью. Отправляя заказы к началу периода посадки, мы уверены в высокой всхожести и приживаемости растений. Почему? Мы выстроили большой тонкий процесс по хранению, упаковке и доставке каждой группы растений, избавив наших клиентов от сложностей правильного хранения и доставляя посадочный материал, полностью подготовленный к посадке! Складские системы с маркировкой помогают избежать пересорта. Уникальная упаковка, созданная специально для пересылки саженцев, позволяет нам отправлять живые корни на самые дальние расстояния.</p>
          <blockquote><b>Мы не берем предоплату – мы уверены в себе и доверяем своим клиентам!</b></blockquote>
          <p>Цветы, семена овощей, плодовые деревья, ягодные кустарники, саженцы роз, луковицы и клубни цветов – это и многое Долина Растений готовит для Вас.</p>
        </section>
      </div>
    );

  }

}

export default Main;
