import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

import './DreamsContainer.scss';
import { DreamCard } from "../DreamCard/DreamCard";
import { Dream } from "../../types/Dream";

export const DreamsContainer: React.FC = () => {
  const dreams = useAppSelector(selectMockData);
  const [countDreams, setCountDreams] = useState(8);

  const dreamsCut: Dream[] = useMemo(() => {
    return dreams.slice(0, countDreams);
  }, [countDreams, dreams]);

  console.log(countDreams);

  return (
    <div className="container">
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

      <ul className="dreams-container">
        {dreams.length && dreamsCut.length && dreamsCut.map(d => (
          <li key={d.id}><DreamCard dream={d}/></li>
        ))}
      </ul>
    </div>
  );
}