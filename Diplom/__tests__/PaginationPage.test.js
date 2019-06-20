"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import combinedReducer from '../redux/reducers.js';
import { Provider } from 'react-redux';

import PaginationPage from '../components/Pagination/PaginationPage';
  
const prods = [{
    "id": 1,
    "name": "Томат Гранатовая капля",
    "brand": "Гавриш",
    "category": "Семена овощей",
    "price": 1.32,
    "description": "Сладкий фруктовый вкус. Среднеспелый сорт для пленочных теплиц и открытого грунта.",
    "imgUrl": "./img/ed940bf6db9540b843b64bacabbae4ae.jpg",
    "qty": 1,
    "sum": 1.32
  },
  {
    "id": 2,
    "name": "Свекла Смуглянка",
    "brand": "Гавриш",
    "category": "Семена овощей",
    "price": 0.99,
    "description": "Среднеспелый сорт столовой свёклы с превосходными вкусовыми качествами.",
    "imgUrl": "./img/f19a9bbfa325e1ae0b3e6bd185602826.jpg",
    "qty": 1,
    "sum": 0.99
  }
];

let store=createStore(combinedReducer);

test('внешний вид и работа PaginationPage', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <PaginationPage products = {prods}  startLink = {'/catalogue'} pagesQty = {0}/>
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // создаём 2 тестовую версию компонента
  const component2 = renderer.create(
    <Router>
      <Provider store={store}>
        <PaginationPage products = {prods}  startLink = {'/catalogue/category'} pagesQty = {1}/>
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree2=component2.toJSON();
  expect(componentTree2).toMatchSnapshot();
        
});
