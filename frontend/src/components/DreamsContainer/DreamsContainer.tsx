import React, { useCallback, useMemo, useState } from 'react';
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { DreamCard } from "../DreamCard/DreamCard";
import { Dream } from "../../types/Dream";
import { BasicPagination } from "../BasicPagination";

import './DreamsContainer.scss';
import { CustomSelect } from '../CustomSelect';
import { Search } from '../Search';

export const DreamsContainer: React.FC = () => {
  const dreams = useAppSelector(selectMockData);
  const [dreamsPerPage, setDreamsPerPage] = useState<number>(8);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  const onPageChange = (page: number) => {
    setPage(page);
  }

  const dreamsCut: Dream[] = useMemo(() => {
    return dreams
    .slice((page - 1) * dreamsPerPage, page * dreamsPerPage)
    .filter(d => d.title.toLowerCase().includes(searchQuery))
  }, [dreamsPerPage, dreams, page, searchQuery]);

  const totalPages = Math.ceil(dreams.length / dreamsPerPage);
  const isChoseAllDreams = dreamsPerPage === dreams.length;

  const optionsHandler = useCallback(() => setSearchOptions(
    dreamsCut
      .filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(d => d.title),
    ), []);

  if (!dreams.length && !dreamsCut.length) {
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
          valueForAll={dreams.length.toString()}
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
          <li key={d.id}><DreamCard dream={d} catalogMode={true} /></li>
        ))}
      </ul>


      {!isChoseAllDreams && 
        <div className="DreamsContainer__controls">
          <BasicPagination 
            onPageChange={onPageChange}
            totalPages={totalPages}
            page={page}
          />
        </div>}
    </div>
  );
}
