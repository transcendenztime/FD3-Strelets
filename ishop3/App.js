"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ProductsTable from './components/ProductsTable';

var nameForMyShop = "Интернет-магазин ishop";
var tableHeaders = {hId:'id',hName:'Название',hCost:'Цена',hPhotoUrl:'Фото',hCount:'Количество', hControl: 'Управление'};
var productsArr = [
      {id:1,name:'Кроссовки',cost:250,photoUrl:'image/products/krossovki.jpg',count:5},
      {id:2,name:'Джинсы',cost:300,photoUrl:'image/products/dzhinsy.jpg',count:2},
      {id:3,name:'Майка',cost:200,photoUrl:'image/products/majka.png',count:4},
      {id:4,name:'Байка',cost:400,photoUrl:'image/products/bajka.jpg',count:4},
      {id:5,name:'Кепка',cost:150,photoUrl:'image/products/kepka.jpg',count:6},
    ];

ReactDOM.render(
  React.createElement(ProductsTable,{shopName:nameForMyShop,tableHeaders:tableHeaders,products:productsArr,}), 
  document.getElementById('MainContainer') 
);