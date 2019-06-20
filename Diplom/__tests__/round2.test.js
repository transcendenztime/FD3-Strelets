"use strict";

import {round2} from '../services/round2';

test('проверка округления числа до 2-х знаков после запятой', () => {

  expect(round2(7.996,100)).toBe(8.00);

  expect(round2(18.1512345,100)).toBe(18.15);

  expect(round2(28.888888,100)).toBe(28.89);

  expect(round2(45.99123456,100)).toBe(45.99);

  expect(round2(50,100)).toBe(50.00);

  expect(round2(65.83234234,100)).toBe(65.83);

});