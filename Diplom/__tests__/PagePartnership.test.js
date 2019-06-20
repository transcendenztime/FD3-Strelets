import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PagePartnership from '../pages/PagePartnership';

test('внешний вид PagePartnership', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
      <Router>
          <PagePartnership />
      </Router>
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
          
  });