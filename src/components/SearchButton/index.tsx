import React from 'react';

import './styles.css'

interface SearchButtonProps {
  name: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ name }) =>{
  return (
    <button className='search-button'>{name}</button>
  );
}

export default SearchButton;