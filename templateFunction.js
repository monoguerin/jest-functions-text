export const currencyFormat = (strings, ...args) => {
  let first = "";

  strings.forEach((a, index)=> {
      first += a
      if(args.length > index){
          first += `$${args[index]}.00`;
      }
  });

  return `${first}`;
}

export const themeBuilder = (theme) => (strings, ...args) => {
  let result = "";

  strings.forEach((string, index)=> {
      result += string;

      if (args.length > index) {
        const value = args[index];
        const typeOfValue = typeof value;
        const valueFormatted = typeOfValue === 'string' || typeOfValue === 'number' ? value : value(theme);

        result += valueFormatted;
      }
  });

  return `${result}`;
};