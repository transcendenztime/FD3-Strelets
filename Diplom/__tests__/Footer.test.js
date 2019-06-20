"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

test('внешний вид Footer', () => {

  // создаём тестовую версию компонента
  const component = renderer.create(
    <Router>
      <Footer />
    </Router>
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

    
});
