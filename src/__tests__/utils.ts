import { utils } from '../lambda/modules/utils';

test('Fizz', () => {
  expect(utils.fizzBuzz(3)).toBe('Fizz');
});

test('Buzz', () => {
  expect(utils.fizzBuzz(5)).toBe('Buzz');
});

test('FizzBuzz', () => {
  expect(utils.fizzBuzz(15)).toBe('FizzBuzz');
});

test('else', () => {
  expect(utils.fizzBuzz(8)).toBe('8');
});
