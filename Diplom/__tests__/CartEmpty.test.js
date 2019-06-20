import React from 'react';
import renderer from 'react-test-renderer';

import CartEmpty from '../components/Cart/CartEmpty';

test('внешний вид CartEmpty', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
          <CartEmpty />
    );
  
    // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
    let componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
          
  });