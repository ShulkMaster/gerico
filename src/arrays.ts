export const filterBasic = (array: number[], predicate: (number: number) => boolean): number[] => {
    const result: number[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

export const filterBasic2 = (array: string[], predicate: (number: string) => boolean): string[] => {
    const result: string[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

export const filterBasic3 = (array: any[], predicate: (number: any) => boolean): any[] => {
    const result: string[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};

export const filter = <T>(array: T[], predicate: (e: T) => boolean): T[] => {
    const result: T[] = [];
    for (const element of array) {
        if(predicate(element)){
            result.push(element);
        }
    }
    return result;
};
