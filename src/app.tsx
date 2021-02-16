import React, {useState} from 'react'
import {example1} from './arrays';
import './styles.css';

export const App = () => {
  const [state, setState] = useState('red');
  return (
    <div>
      <button onClick={() => setState('red')}>Red</button>
      <button onClick={() => setState('green')}>Green</button>
      <button onClick={() => setState('blue')}>Blue</button>
      <SimpleWrapper text={state} className={state} onClick={example1}/>
    </div>
  );
}

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const SimpleWrapper = ({text, ...props}: { text: string } & DivProps) => {
  return (
    <div {...props}>
      <p>{text}</p>
    </div>
  )
}