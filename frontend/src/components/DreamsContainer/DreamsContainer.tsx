import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from "../../store/hooks";
import { DreamCard } from "../DreamCard/DreamCard";
import { Dream } from "../../types/Dream";

import './DreamsContainer.scss';
import { selectAllDreams } from '../../store/features/allDreams/allDreamsSlice';
import { CustomSelect } from '../UI/CustomSelect';
import { BasicPagination } from '../UI/BasicPagination';
import { Search } from '../UI/Search';

export const DreamsContainer: React.FC = () => {
  // const dreams = useAppSelector(selectMockData);
  const allDreams = useAppSelector(selectAllDreams);
  const [dreamsPerPage, setDreamsPerPage] = useState<number>(8);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  const onPageChange = (page: number) => {
    setPage(page);
  }

  const dreamsCut: Dream[] = useMemo(() => {
    return allDreams.slice((page - 1) * dreamsPerPage, page * dreamsPerPage).filter(d => d.title.toLowerCase().includes(searchQuery))
  }, [dreamsPerPage, allDreams, page, searchQuery]);

  console.log('dreams = ', allDreams.length);
  console.log('dreamsCut = ', dreamsCut);

  const totalPages = Math.ceil(allDreams.length / dreamsPerPage);
  const isChoseAllDreams = dreamsPerPage === allDreams.length;

  const optionsHandler = useCallback(() => setSearchOptions(
    dreamsCut
      .filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(d => d.title),
    ), []);

  useEffect(() => {
    console.log('container');
  }, [allDreams.length, dreamsCut])


  if (!allDreams.length && !dreamsCut.length) {
    return (
      <div className="centeredContainer">
        <h1 className='title'>there are no any dreams!</h1>
      </div>
    )
  }

  return (
    <div className="DreamsContainer" >
      <div className="DreamsContainer__controls">
        <CustomSelect
          onChange={(value) => setDreamsPerPage(+value)}
          className="DreamsContainer__select"
          values={['4', '8', '16', '48']}
          valueForAll={allDreams.length.toString()}
          currentValue={dreamsPerPage.toString()}
        />

        {!isChoseAllDreams &&
          <BasicPagination 
            onPageChange={onPageChange} 
            totalPages={totalPages} 
            page={page}
          />
        }

        <Search 
          query={searchQuery}
          onChange={value => setSearchQuery(value.toLowerCase())}
          options={searchOptions}
          optionsHandler={optionsHandler}
        />
      </div>

      <ul className="DreamsContainer__content grid" >
        {dreamsCut.map(d => (
          <li key={d.id}><DreamCard dream={d} catalogMode /></li>
        ))}
      </ul>


      {!isChoseAllDreams && 
        <div className="DreamsContainer__lowerControls">
          <BasicPagination 
            onPageChange={onPageChange}
            totalPages={totalPages}
            page={page}
          />
        </div>}
    </div>
  );
}
