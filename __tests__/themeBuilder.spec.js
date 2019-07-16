import { themeBuilder } from '../templateFunction';

describe('test themeBuilder', () => {
  test('themeBuilder returns a function when invoked', () => {
    const themeFactory = themeBuilder();
    const typeOfThemeFactory = typeof themeFactory;

    expect(typeOfThemeFactory).toBe('function');
  });

  test('themeBuilder returns a value from theme when invoked', () => {
    const THEME = {
      main: 'red',
    };
    const themeFactory = themeBuilder(THEME);
    const result = themeFactory`${(theme) => theme.main}`;

    expect(result).toBe('red');
  });

  test('themeBuilder returns same value if Number when invoked', () => {
    const THEME = {};
    const themeFactory = themeBuilder(THEME);
    const result = themeFactory`${10}px`;
    const result2 = themeFactory`${'10'}px`;

    expect(result).toBe('10px');
    expect(result2).toBe('10px');
  });

  test('themeBuilder returns a value from theme when invoked', () => {
    const RADIUS = 10;
    const SIZE = '1rem';
    const THEME = {
      main: 'red',
      secondary: 'green',
      alternative: 'blue',
    };
    const themeFactory = themeBuilder(THEME);
    const result = themeFactory`{
      background: ${(theme) => theme.main};
      border-color: ${(theme) => theme.secondary};
      color: ${(theme) => theme.alternative};
      border-radius: ${RADIUS}px;
      font-size: ${SIZE};
    }`;

    expect(result).toBe(`{
      background: red;
      border-color: green;
      color: blue;
      border-radius: 10px;
      font-size: 1rem;
    }`);
  });

});
