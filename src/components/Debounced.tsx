import {debounce} from 'lodash';
import {useState} from 'react';

type DebouncedProps = {
  term: string;
  onSearch: (term: string) => void;
}

export const Debounced = <Props extends DebouncedProps>(
  milliseconds: number,
  component: (props: Props) => JSX.Element
) => {
  const [state, setState] = useState('');
  console.log('re rendering HOC');
  const debounced = debounce(setState, milliseconds);
  return (args: Omit<Props, 'term' | 'onSearch'>) => {
    // this compound type will be type Props at runtime but this is beyond the compiler so casting is necessary
    const props = {
      onSearch: debounced,
      term: state,
      ...args
    };
    return component(props as unknown as Props);
  };
}