import React, {useEffect} from 'react';

export type SearchProps = {
  placeholder: string;
  uselessProp1: number;
  onSearch: (term: string) => void;
  term: string;
  uselessProp2?: boolean;
}

export const Search = ({placeholder, uselessProp1, uselessProp2, onSearch, term}: SearchProps) => {
  console.log('uselessProp1', uselessProp1);
  console.log('uselessProp2', uselessProp2);
  console.log('re rendering component');

  useEffect(() => {
    if(term){
      console.log('The term was updated', term);
    }
  }, [term]);

  return (
    <div className="skill-search">
      <input
        className="skill-input"
        defaultValue={term}
        maxLength={100}
        placeholder={placeholder}
        onChange={event => onSearch(event.target.value)}
      />
    </div>
  );
}