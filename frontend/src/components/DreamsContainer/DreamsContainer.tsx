import React, { useMemo, useState } from 'react';
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { DreamCard } from "../DreamCard/DreamCard";
import { Dream } from "../../types/Dream";
import { BasicPagination } from "../BasicPagination";

import './DreamsContainer.scss';
import { CustomSelect } from '../CustomSelect';

export const DreamsContainer: React.FC = () => {
  const dreams = useAppSelector(selectMockData);
  const [dreamsPerPage, setDreamsPerPage] = useState<number>(8);
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  }

  const dreamsCut: Dream[] = useMemo(() => {
    return dreams.slice((page - 1) * dreamsPerPage, page * dreamsPerPage);
  }, [dreamsPerPage, dreams, page]);

  const totalPages = Math.ceil(dreams.length / dreamsPerPage);

  return (
    <div 
      className="DreamsContainer" 
    >
      <div className="DreamsContainer__controls">
        <CustomSelect
          onChange={(value) => setDreamsPerPage(+value)}
          className="DreamsContainer__select"
          values={['4', '8', '16', '48']}
          valueForAll={dreams.length.toString()}
          currentValue={dreamsPerPage.toString()}
        />

        <BasicPagination 
          onPageChange={onPageChange} 
          totalPages={totalPages} 
          page={page}
        />
      </div>

      <ul className="DreamsContainer__content grid">
        {dreams.length && dreamsCut.length && dreamsCut.map(d => (
          <li key={d.id}><DreamCard dream={d} page={""} /></li>
        ))}
      </ul>

      <div className="DreamsContainer__controls">
        <BasicPagination 
          onPageChange={onPageChange}
          totalPages={totalPages}
          page={page}
        />
      </div>
    </div>
  );
}