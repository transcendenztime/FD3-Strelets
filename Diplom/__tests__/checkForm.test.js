"use strict";

import {checkNameValue, checkEmailValue, checkTelValue, checkTextValue} from '../services/checkForm';

test('проверка валидации имени', () => {

  expect(checkNameValue('Mike')).toBe(0);
  
  expect(checkNameValue('Елена')).toBe(0);

  expect(checkNameValue('')).toBe(1);

  expect(checkNameValue('123456qwerty')).toBe(2);

  expect(checkNameValue('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjkl')).toBe(2);

});

test('проверка валидации email', () => {

    expect(checkEmailValue('')).toBe(0);//валидно, так как поле не обязательное
  
    expect(checkEmailValue('test@gmail.com')).toBe(0);
    
    expect(checkEmailValue('test@mail.ru')).toBe(0);

    expect(checkEmailValue('asdfghj')).toBe(2);
  
    expect(checkEmailValue('qwerty@qwerty')).toBe(2);
      
});
  
test('проверка валидации телефонного номера', () => {

  expect(checkTelValue('+375(29)1234422')).toBe(0);

  expect(checkTelValue('8033-123-44-22')).toBe(0);  

  expect(checkTelValue('')).toBe(1);
  
  expect(checkTelValue('123qwe')).toBe(2);
  
  expect(checkTelValue('87654321')).toBe(2);
  
  expect(checkTelValue('+2912312332')).toBe(2);
      
});

  
test('проверка заполнения текстовой формы', () => {

  expect(checkTextValue('qwerty')).toBe(0);
    
  expect(checkTextValue('aaaaa/ ? , 1234567')).toBe(0);    

  expect(checkTextValue('')).toBe(1);
    
});