const double = (n: number) => n * 2;

const inclement = (n: number) => n + 1;

const deny = (s: string) => {
  return 'I don\'t ' + s.replace('I do ', '') + '|';
};

const confirm = (s: string) => {
  return 'I do ' + s.replace('I don\'t ', '') + '_'
}


const compose = <F, G, H>(f: (input: F) => G, g: (input: G) => H): (input: F) => H => input => g(f(input));

const pipe = <T>(...transforms: ((input: T) => T)[]): (input: T) => T => {
  return input => {
    let temp = input;
    for (const transform of transforms) {
      temp = transform(temp);
    }
    return temp;
  }
}

export const example2 = () => {
  // by composing function we can stack transforms
  const func = compose(double, inclement);
  const func2 = compose(inclement, double);
  console.log(func(5))
  console.log(func2(5))
  const func3 = compose(func, func2);
  console.log(func3(3));

  // by queuing transform we can modify the output
  const piped = pipe(double, inclement, inclement, double)
  console.log(piped(3));

  const yesNoPipe = pipe(deny, confirm, deny, confirm)
  console.log(yesNoPipe('jump'));
}