import { onlyOnce } from '../highOrder';

describe('My First Test of High Order', () => {
  test('onlyOnce be a function', () => {
    const typeOfOnlyOnce = typeof onlyOnce;

    expect(typeOfOnlyOnce).toBe('function');
  });

  test('onlyOnce returns a function when invoked', () => {
    const oneTime = onlyOnce();
    const typeOfOneTime = typeof oneTime;

    expect(typeOfOneTime).toBe('function');
  });

  test('call callback when returned function is invoked', () => {
    const callback = jest.fn();
    const oneTime = onlyOnce(callback);

    oneTime();

    expect(callback).toHaveBeenCalled();
  });

  test('throw error when returned function is invoked twice', () => {
    const callback = jest.fn();
    const oneTime = onlyOnce(callback);

    oneTime();

    expect(callback).toHaveBeenCalled();
    expect(oneTime).toThrow();
  });

  test('arguments are passed to the callback', () => {
    const callback = jest.fn();
    const oneTime = onlyOnce(callback);

    oneTime(1,2,3);

    expect(callback).toHaveBeenCalledWith(1,2,3);
  })
});
