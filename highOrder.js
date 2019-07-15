export const onlyOnce = (cb) => {
  let hasBeenCalled = false;

  return (...args) => {
    if (!hasBeenCalled) {
      cb(...args);
      hasBeenCalled = true;
    } else {
      throw new Error();
    }
  };
};

