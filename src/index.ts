import {filter, filterBasic} from './arrays';

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const text: string[] = ['mucho', 'texto', 'mucha', 'compu'];

type User = {
  id: number,
  name: string,
  age: number,
}

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

const res = filterBasic(numbers, n => n % 2 === 0);
console.log(res);

const resGeneric = filter(data, e => e.age > 18);
console.log(resGeneric);

const resGeneric2 = filter(numbers, n => n % 2 === 0);
console.log(resGeneric2);