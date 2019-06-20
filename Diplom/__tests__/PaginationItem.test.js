"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import combinedReducer from '../redux/reducers.js';
import { Provider } from 'react-redux';

import PaginationItem from '../components/Pagination/PaginationItem';
  

let store=createStore(combinedReducer);

test('внешний вид и работа PaginationItem', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <PaginationItem num = {1} startLink ={'/catalogue'}/>
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
        <PaginationItem num = {5} startLink ={'/catalogue/category'}/>
      </Provider>
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree2=component2.toJSON();
  expect(componentTree2).toMatchSnapshot();
        
});
