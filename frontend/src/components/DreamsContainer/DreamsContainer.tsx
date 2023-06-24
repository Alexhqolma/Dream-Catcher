import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { DreamCard } from "../DreamCard/DreamCard";
import { Dream } from "../../types/Dream";
import { selectAllDreams } from '../../store/features/allDreams/allDreamsSlice';
import { CustomSelect } from '../UI/CustomSelect';
import { BasicPagination } from '../UI/BasicPagination';
import { Search } from '../UI/Search';

import './DreamsContainer.scss';
import { loadAllDreams } from '../../store/sagas/actions';

export const DreamsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const allDreams = useAppSelector(selectAllDreams);


  const [dreamsPerPage, setDreamsPerPage] = useState<number>(8);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  const onChangePage = (page: number) => setPage(page);

  const dreamsCut: Dream[] = useMemo(() => allDreams.slice((page - 1) * dreamsPerPage, page * dreamsPerPage).filter(d => d.title.toLowerCase().includes(searchQuery)), []);
 

  const totalPages = Math.ceil(allDreams.length / dreamsPerPage);
  const isChoseAllDreams = dreamsPerPage === allDreams.length;

  const optionsHandler = useCallback(() => setSearchOptions(
    dreamsCut
      .filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(d => d.title),
    ), []);

  useEffect(() => {
    dispatch(loadAllDreams());
  }, [])

  if (!allDreams.length && !dreamsCut.length) {
    return (
      <div className="centeredContainer">
        <h1 className='title'>there are no any dreams!</h1>
      </div>
    )
  }

  return (
    <div className="DreamsContainer" >
      dreams container
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
            onPageChange={onChangePage} 
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
        {allDreams.map(d => (
          <li key={d.id}><DreamCard dream={d} catalogMode /></li>
        ))}
      </ul>


      {!isChoseAllDreams && 
        <div className="DreamsContainer__lowerControls">
          <BasicPagination 
            onPageChange={onChangePage}
            totalPages={totalPages}
            page={page}
          />
        </div>}
    </div>
  );
}
