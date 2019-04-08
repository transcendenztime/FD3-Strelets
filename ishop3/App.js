"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ProductsTable from './components/ProductsTable';

let nameForMyShop = "Интернет-магазин ishop";
let tableHeaders = {hId:'id',hName:'Название',hCost:'Цена',hPhotoUrl:'Фото',hCount:'Количество', hControl: 'Управление'};

import productsArr from './products.json';

ReactDOM.render(
  //React.createElement(ProductsTable,{shopName:nameForMyShop,tableHeaders:tableHeaders,products:productsArr,}), 
  //document.getElementById('MainContainer')

  <ProductsTable
    shopName={nameForMyShop}
    tableHeaders={tableHeaders}
    products={productsArr}
  />
  , document.getElementById('MainContainer')
);