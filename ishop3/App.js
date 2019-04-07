"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ProductsTable from './components/ProductsTable';

var nameForMyShop = "Интернет-магазин ishop";
var tableHeaders = {hId:'id',hName:'Название',hCost:'Цена',hPhotoUrl:'Фото',hCount:'Количество', hControl: 'Управление'};

var productsArr=require('./products.json');

ReactDOM.render(
  React.createElement(ProductsTable,{shopName:nameForMyShop,tableHeaders:tableHeaders,products:productsArr,}), 
  document.getElementById('MainContainer') 
);