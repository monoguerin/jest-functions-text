import { currencyFormat } from '../templateFunction';

describe('Test template functions', () => {
  test('return formatted currency', () => {
    const value = 10;
    const result = currencyFormat`Your value is ${value}`;

    expect(result).toBe('Your value is $10.00');
  });

  test('return formatted currency from 2 values', () => {
    const value = 10;
    const value2 = 20;
    const result = currencyFormat`Your value is ${value} and ${value2}`;

    expect(result).toBe('Your value is $10.00 and $20.00');
  });

  test('return formatted currency from 3 values', () => {
    const value = 10;
    const value2 = 20;
    const result = currencyFormat`${value} Your value is ${value} and ${value2}`;

    expect(result).toBe('$10.00 Your value is $10.00 and $20.00');
  });

  test('return empty from empty', () => {
    const result = currencyFormat``;

    expect(result).toBe('');
  });
})