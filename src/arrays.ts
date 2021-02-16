const numbers: number[] = [1, 2, 3, 4, 5];
const text: string[] = ['mucho', 'texto', 'mucha', 'compu'];

type user = {
    id: number,
    name: string,
    age: number,
}

const data: user[] = [
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
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

const filterBasic2 = (array: string[], predicate: (number: string) => boolean): string[] => {
    const result: string[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

const filterBasic3 = (array: any[], predicate: (number: any) => boolean): any[] => {
    const result: string[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

const filter = <T>(array: T[], predicate: (e: T) => boolean): T[] => {
    const result: T[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

const res = filterBasic(numbers, n => n % 2 === 0);
console.log(res);

const resGeneric = filter(data, e => e.age > 18);
console.log(res);
