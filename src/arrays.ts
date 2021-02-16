type User = {
  id: number,
  name: string,
  age: number,
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const text: string[] = ['mucho', 'texto', 'mucha', 'compu'];
const data: User[] = [
  {
    age: 15,
    id: 10,
    name: 'Juanito'
  },
  {
    age: 19,
    id: 11,
    name: 'Pedro'
  },
  {
    age: 25,
    id: 12,
    name: 'Luis'
  }
];

const filterBasic = (array: number[], predicate: (number: number) => boolean): number[] => {
  const result: number[] = [];
  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
};

const filterBasic2 = (array: string[], predicate: (number: string) => boolean): string[] => {
  const result: string[] = [];
  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
};

const filterBasic3 = (array: any[], predicate: (number: any) => boolean): any[] => {
  const result: string[] = [];
  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
};

const filter = <T>(array: T[], predicate: (e: T) => boolean): T[] => {
  const result: T[] = [];
  for (const element of array) {
    if (predicate(element)) {
      result.push(element);
    }
  }
  return result;
};

const filterAndMap = <T, K>(array: T[], predicate: (e: T) => boolean, mapper: (e: T) => K): K[] => {
  const result: K[] = [];
  for (const element of array) {
    if (predicate(element)) {
      result.push(mapper(element));
    }
  }
  return result;
}

export const example1 = () => {

  const res = filterBasic(numbers, n => n % 2 === 0);
  console.log(res);

  const resGeneric = filter(data, e => e.age > 18);
  console.log(resGeneric);

  const resGeneric2 = filter(numbers, n => n % 2 === 0);
  console.log(resGeneric2);

  const filtered = filterAndMap(
    text,
    t => !t.includes('much'),
    t => ({
      name: t,
      age: t.length * 3
    })
  );
  console.log(filtered);
}
