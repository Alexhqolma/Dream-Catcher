import React, { useMemo, useState } from 'react';
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { DreamCard } from "../DreamCard/DreamCard";
import { Dream } from "../../types/Dream";
import { BasicPagination } from "../BasicPagination";
import { SelectPerPage } from "../SelectPerPage";

import './DreamsContainer.scss';

export const DreamsContainer: React.FC = () => {
  const dreams = useAppSelector(selectMockData);
  const [dreamsPerPage, setDreamsPerPage] = useState(8);
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  }

  const dreamsCut: Dream[] = useMemo(() => {
    return dreams.slice((page - 1) * dreamsPerPage, page * dreamsPerPage);
  }, [dreamsPerPage, dreams, page]);

  const totalPages = Math.ceil(dreams.length / dreamsPerPage);

  console.log(dreamsPerPage);

  return (
    <div className="DreamsContainer">
      <div className="DreamsContainer__controls">
        <SelectPerPage
          onChange={(e) => setDreamsPerPage(+e.target.value)}
          className="DreamsContainer__select"
          values={[4, 8, 16, 48]}
          countAllDreams={dreams.length} 
          defaultValue={dreamsPerPage}        
        />

        <BasicPagination onPageChange={onPageChange} totalPages={totalPages} />
      </div>

      <ul className="DreamsContainer__content grid">
        {dreams.length && dreamsCut.length && dreamsCut.map(d => (
          <li key={d.id}><DreamCard dream={d} page={""} /></li>
        ))}
      </ul>

      <div className="DreamsContainer__controls">
        <BasicPagination onPageChange={onPageChange} totalPages={totalPages} />
      </div>
    </div>
  );
}