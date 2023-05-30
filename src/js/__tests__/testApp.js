import Validator from '../app.js';

test('Проверяем наш никнейм', () => {
  const validator = new Validator();
  const result = validator.validateUsername('Life_969-a');
  expect(result).toBe('Life_969-a');
});

test('Проверяем наличие кирилицы', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Lifeш_969-a');
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Проверяем наличие спец символов', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Life$_969-a');
  expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('Проверяем на наличие в никнейме не более 3х цифр подряд', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Life_9696-a');
  expect(result).toThrow('Имя не должно содержать подряд более трёх цифр');
});

test('Проверяем, чтобы никнейм не начинался цифрами', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('7Life_969-a');
  expect(result).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('Проверяем, чтобы никнейм не начинался символами подчёркивания или тире', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('-Life_969-a');
  expect(result).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('Проверяем, чтобы никнейм не заканчивался цифрами', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Life_969-a9');
  expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});

test('Проверяем, чтобы никнейм не заканчивался символами подчёркивания или тире', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('Life_969-a_');
  expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});
