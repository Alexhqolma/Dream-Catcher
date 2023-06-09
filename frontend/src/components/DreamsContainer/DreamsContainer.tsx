import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Dream } from "../../types/Dream";
import { CustomSelect } from '../UI/CustomSelect';
import { BasicPagination } from '../UI/BasicPagination';
import { Search } from '../UI/Search';
import { selectAllDreams } from '../../store/features/allDreams/allDreamsSlice';
import { loadAllDreams } from '../../store/sagas/actions';
import { DreamCard } from '../DreamCard/DreamCard';
import { selectScreen } from '../../store/features/controls/controlsSlice';
import { useOptionsSelectGridContainer } from '../../hooks/useScreen';

import './DreamsContainer.scss';

export const DreamsContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const allDreams = useAppSelector(selectAllDreams);
  const screen = useAppSelector(selectScreen);
  const { gridColumn, selectValues } = useOptionsSelectGridContainer(screen);

  const [dreamsPerPage, setDreamsPerPage] = useState<number>(gridColumn * 2);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchOptions, setSearchOptions] = useState<string[]>([]);

  const onChangePage = (page: number) => setPage(page);

  const dreamsCut: Dream[] = allDreams.slice((page - 1) * dreamsPerPage, page * dreamsPerPage).filter(d => d.title.toLowerCase().includes(searchQuery));
  const totalPages = Math.ceil(allDreams.length / dreamsPerPage);
  const isChoseAllDreams = dreamsPerPage === allDreams.length;

  const optionsHandler = useCallback(() => setSearchOptions(
    dreamsCut
      .filter(d => d.title.toLowerCase().includes(searchQuery.toLowerCase()))
      .map(d => d.title),
    ), []);

  useEffect(() => {
    dispatch(loadAllDreams());
  }, [dispatch])

  if (!allDreams.length && !dreamsCut.length) {
    return (
      <div className="centeredContainer">
        <h1 className='title'>There are no any dreams!</h1>
      </div>
    )
  }

  return (
    <div className="DreamsContainer" >
      <div className="DreamsContainer__controls">
        <CustomSelect
          onChange={(value) => setDreamsPerPage(+value)}
          className="DreamsContainer__select"
          values={selectValues}
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
        {dreamsCut.map(dream => (
          <li key={dream.id}><DreamCard dream={dream} /></li>
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
