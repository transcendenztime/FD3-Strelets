import React from 'react';
import renderer from 'react-test-renderer';

import PageMain from '../pages/PageMain';

test('внешний вид PageMain', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
          <PageMain />
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
          
  });