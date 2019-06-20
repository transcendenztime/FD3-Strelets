import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import PagesLinks from '../pages/PagesLinks';

test('внешний вид PagesLinks', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
      <Router>
          <PagesLinks />
      </Router>
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
          
  });