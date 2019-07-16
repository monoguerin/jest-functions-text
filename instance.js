export function Sum (initialValue = 0, delta = 1) {
  const api = {
    value: initialValue,
    add: function() {
      api.value += delta;
      return api;
    }
  };

  return api;
};
