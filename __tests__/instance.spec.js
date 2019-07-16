import  { Sum } from '../instance';

describe('test Sum constructor', () => {
  test('should return an Object with value and add properties', () => {
    const instance = new Sum();

    expect(typeof instance.value).toBe('number');
    expect(typeof instance.add).toBe('function');
  });

  test('should return added value by one', () => {
    const instance = new Sum(10);

    expect(instance.value).toBe(10);

    instance.add();

    expect(instance.value).toBe(11);
  });

  test('should return added value by one', () => {
    const instance = new Sum();

    expect(instance.value).toBe(0);

    instance.add();

    expect(instance.value).toBe(1);
  });

  test('should return added value by delta', () => {
    const instance = new Sum(14, 2);

    expect(instance.value).toBe(14);

    instance.add().add().add();

    expect(instance.value).toBe(20);
  });

  test('should return added value by delta', () => {
    const instance = new Sum(2, 3);

    for (let i = 1; i <= 10; i++) {
      instance.add();
    }

    expect(instance.value).toBe(32);
  });
})