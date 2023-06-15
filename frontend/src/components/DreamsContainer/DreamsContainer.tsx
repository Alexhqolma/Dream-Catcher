import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { DreamCard } from "../DreamCard/DreamCard";
import BasicPagination from "../BasicPagination/BasicPagination";
import { Dream } from "../../types/Dream";

import './DreamsContainer.scss';

export const DreamsContainer: React.FC = () => {
  const dreams = useAppSelector(selectMockData);
  const [countDreams, setCountDreams] = useState(8);
  const [page, setPage] = useState(1);

  const onPageChange = (page: number) => {
    setPage(page);
  }

  const dreamsCut: Dream[] = useMemo(() => {
    return dreams.slice((page - 1) * countDreams, page * countDreams);
  }, [countDreams, dreams, page]);

  const totalPages = Math.ceil(dreams.length / countDreams);

  console.log(countDreams);

  return (
    <div className="container">
     <div>
        <label htmlFor="DreamsPerPage" className="select-dreams__label">
          Dreams per page&nbsp;
          <select
            value={countDreams}
            className="select-for-dreams-container"
            name="DreamsPerPage"
            id="DreamsPerPage"
            onChange={(e) => setCountDreams(+e.target.value)}
          >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
            <option value={dreams.length}>all</option>
          </select>
        </label>

        <BasicPagination onPageChange={onPageChange} totalPages={totalPages} />

        <ul className="dreams-container grid">
          {dreams.length && dreamsCut.length && dreamsCut.map(d => (
            <li key={d.id}><DreamCard dream={d} page={""} /></li>
          ))}
        </ul>
     </div>
      
    </div>
  );
}