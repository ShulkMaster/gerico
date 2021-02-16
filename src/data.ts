// generic types
type Loadable<T> = {
  isLoading: boolean;
  isDirty: boolean;
  data: T;
};

type Filterable<T> = {
  filter: number
} & Loadable<T>

const aLoadable: Loadable<number> = {
  data: 2,
  isDirty: false,
  isLoading: true,
}

const aFilterable: Filterable<number> = {
  data: 2,
  isDirty: false,
  isLoading: true,
  filter: 0,
}

// constrain generic functions
// T = object
const setLoading = <T>(loadable: Loadable<T>) => {
  loadable.isLoading = true;
  return loadable;
}

const setLoading2 = <T extends Loadable<unknown>>(loadable: T) => {
  loadable.isLoading = true;
  return loadable;
}

const loaded = setLoading2(aLoadable);
//const filtered = setLoading(aFilterable);
const filtered = setLoading2(aFilterable);
// filtered.filter = 0;
console.log(loaded);
console.log(filtered);


// default generics
type DefaultGeneric<T = number> = {
  data: T;
};

const myDefault: DefaultGeneric<string> = {data: '5'};

// Generic with recursive types
type GenericTree<T> = {
  data: T;
  left: GenericTree<T> | null;
  right: GenericTree<T> | null;
}

const myTree: GenericTree<number> = {
  data: 1,
  left: {
    data: 2,
    left: null,
    right: null
  },
  right: {
    right: null,
    left: {
      left: null,
      right: null,
      data: 3,
    },
    data: 4,
  }
}

// bound generic
type Identificable = { id: string | number };
type User = { id: string, name: string };
type WayBack<K, T extends K> = {
  parent: T,
  child: K
};

const wayback: WayBack<Identificable, User> = {
  parent: {id: 's', name: 'juancho'},
  child: {id: 's'},
}

