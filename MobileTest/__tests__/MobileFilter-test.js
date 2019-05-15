"use strict";

import React from 'react';
import renderer from 'react-test-renderer';

import MobileCompany from '../components/MobileCompany';

test('MobileCompany нажали FilterAll', () => {

    let clientsArr=[ 
        {id:101, clientF:"Иванов", clientI:"Иван", clientO:"Иванович", balance:200}, 
        {id:105, clientF:"Сидоров", clientI:"Сидор", clientO:"Сидорович", balance:250}, 
        {id:110, clientF:"Петров", clientI:"Петр", clientO:"Петрович", balance:180},
        {id:120, clientF:"Григорьев", clientI:"Григорий", clientO:"Григорьевич", balance:-220},
      ];
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany
    clients={clientsArr}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  //expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку "FilterAll"
  const buttonFilterAll = component.root.find( el => el.props.className=='FilterAll' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё
  buttonFilterAll.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});

test('MobileCompany нажали FilterActive', () => {

    let clientsArr=[ 
        {id:101, clientF:"Иванов", clientI:"Иван", clientO:"Иванович", balance:200}, 
        {id:105, clientF:"Сидоров", clientI:"Сидор", clientO:"Сидорович", balance:250}, 
        {id:110, clientF:"Петров", clientI:"Петр", clientO:"Петрович", balance:180},
        {id:120, clientF:"Григорьев", clientI:"Григорий", clientO:"Григорьевич", balance:-220},
      ];
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany
    clients={clientsArr}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  //expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку "FilterActive"
  const buttonFilterActive = component.root.find( el => el.props.className=='FilterActive' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё
  buttonFilterActive.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});

test('MobileCompany нажали FilterBlocked', () => {

    let clientsArr=[ 
        {id:101, clientF:"Иванов", clientI:"Иван", clientO:"Иванович", balance:200}, 
        {id:105, clientF:"Сидоров", clientI:"Сидор", clientO:"Сидорович", balance:250}, 
        {id:110, clientF:"Петров", clientI:"Петр", clientO:"Петрович", balance:180},
        {id:120, clientF:"Григорьев", clientI:"Григорий", clientO:"Григорьевич", balance:-220},
      ];
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany
    clients={clientsArr}
    />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  //expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку "FilterBlocked"
  const buttonFilterBlocked = component.root.find( el => el.props.className=='FilterBlocked' /*&& el.props.aaa == 'bbb'*/ ); 
  // и "нажмём" на неё
  buttonFilterBlocked.props.onClick();

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

});
