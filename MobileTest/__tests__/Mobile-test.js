"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

const clientsArr=[ 
    {id:101, clientF:"Иванов", clientI:"Иван", clientO:"Иванович", balance:200}, 
    {id:105, clientF:"Сидоров", clientI:"Сидор", clientO:"Сидорович", balance:250}, 
    {id:110, clientF:"Петров", clientI:"Петр", clientO:"Петрович", balance:180},
    {id:120, clientF:"Григорьев", clientI:"Григорий", clientO:"Григорьевич", balance:-220},
  ];

test('тестируем MobileCompany (фильтрация клиентов)', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
    <MobileCompany
    clients={clientsArr}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем отображение только "активных" клиентов
  component.getInstance().clientsFilterActive();
  // получаем снэпшот с "активными" клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем отображение только "блокированных" клиентов
  component.getInstance().clientsFilterBlocked();
  // получаем снэпшот с "блокированными" клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  //имитируем отображение всех клиентов
  component.getInstance().clientsFilterAll();
  // получаем снэпшот со всеми клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('тестируем MobileCompany (добавление клиента)', () => {

    // создаём тестовую версию компонента
    const component = renderer.create(
    <MobileCompany
    clients={clientsArr}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем добавление клиента
  
  /*
  //имитируем отображение только "активных" клиентов
  component.getInstance().clientsFilterActive();
  // получаем снэпшот с "активными" клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
  //имитируем отображение только "блокированных" клиентов
  component.getInstance().clientsFilterBlocked();
  // получаем снэпшот с "блокированными" клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  //имитируем отображение всех клиентов
  component.getInstance().clientsFilterAll();
  // получаем снэпшот со всеми клиентами
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();*/
});