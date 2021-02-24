import React, { useState } from 'react'
import '../styles.css';
import { Pokemon } from './Pokemon';
import { Debounced } from './Debounced';
import { Search } from './Search';

export const App = () => {
  const [state, setState] = useState('red');
  return (
    <div>
      <button onClick={() => setState('red')}>Red</button>
      <button onClick={() => setState('green')}>Green</button>
      <button onClick={() => setState('blue')}>Blue</button>
      <SimpleWrapper text={state} className={state} />
    </div>
  );
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const SimpleWrapper = ({ text, ...props }: { text: string } & DivProps) => {
  const DebouncedSearch = Debounced(500, Search)
  return (
    <div {...props}>
      <p>{text}</p>
      <DebouncedSearch placeholder="Search a pokemon" uselessProp1={5} />
      <Pokemon />
    </div>
  )
}