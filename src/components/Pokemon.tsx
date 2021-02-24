import React from 'react';
import {useState} from 'react';
import {Loadable} from '../data';
import {apiGet, isApiSuccessResult} from '../request';

type Pokemon = {
  base_experience: number;
  height: number,
  name: string;
  weight: number;
  order: number
  forms: { name: string }[];
}

export const Pokemon = () => {
  const [state, setState] = useState<Loadable<Pokemon | undefined>>({
    data: undefined,
    error: undefined,
    isDirty: false,
    isLoading: false,
  })

  const keys = ['base_experience', 'height', 'name', 'weight']
  const entries = Object.entries(state.data || {}).filter(e => keys.includes(e[0]));

  const fetch = () => {
    apiGet<Pokemon>('/pokemon/25').then(r => {
      if (isApiSuccessResult(r.result)) {
        setState({
          isDirty: false,
          error: undefined,
          isLoading: false,
          data: r.result,
        });
      } else {
        setState({
          isDirty: false,
          error: r.result,
          isLoading: false,
          data: undefined,
        });
      }
    })
  }

  if (state.error) return <p>{state.error.message}</p>;
  return (
    <div>
      {state.isDirty
        ? entries.map((e, i) => <p key={i}>{e[0]}: {e[1].toString()}</p>)
        : (<button onClick={fetch}>Load pikachu</button>)}
    </div>
  )
};