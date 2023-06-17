import React, { useEffect } from 'react';
import SearchBar from '@mkyy/mui-search-bar';
import './Search.scss';
// import { useAppDispatch } from '../../store//hooks';
// import { setQuery } from '../../store/features/Search/Search';
interface SearchProps {
  query: string;
  onChange: (value: string) => void;
  options: string[];
  optionsHandler: () => void;
}

export const Search: React.FC<SearchProps> = ({
  query = '',
  onChange = () => console.warn('onChange is absent'),
  options = [],
  optionsHandler = () => console.warn('optionsHandler is absent'),
}) => {

  useEffect(() => {
    optionsHandler();
  }, [optionsHandler, query])

  return (
    <SearchBar
      value={query}
      className="searchBar"
      onSearch={onChange}
      options={options}
    />
  );
};
