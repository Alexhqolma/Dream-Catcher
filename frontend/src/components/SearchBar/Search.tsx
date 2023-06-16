import React, { useState } from 'react';
import SearchBar from '@mkyy/mui-search-bar';
import { useAppDispatch } from '../../../store/hooks';
import { setQuery } from '../../../store/features/filter';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    dispatch(setQuery(searchValue));
  };

  return (
    <SearchBar
      className="searchBar"
      onChange={(value) => setSearchValue(value)}
      onSearch={handleSearch}
    />
  );
};
