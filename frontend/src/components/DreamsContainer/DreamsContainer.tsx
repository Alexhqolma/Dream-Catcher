import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

import { Dream } from "../../types/Dream";
import { DreamCard } from "../DreamItem/DreamCard";
import { DreamItemBig } from "../DreamItem/big";
import { DreamItemSmall } from "../DreamItem/small/DreamItemSmall";
import './DreamsContainer.scss';

export const DreamsContainer: React.FC = () => {
  const dreams = useAppSelector(selectMockData);
  const [countDreams, setCountDreams] = useState(8);

  const dreamsCut:Dream[] = useMemo(() => {
    return dreams.slice(0, countDreams);
  }, [countDreams, dreams]);

  console.log(countDreams);

  return (
    <div className="container">
      <select
        value={countDreams}
        name="" 
        id=""
        onChange={(e) => setCountDreams(+e.target.value)}  
      >
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value={dreams.length}>all</option>
      </select>

      <ul className="dreams-container">
        {dreams.length && dreamsCut && dreamsCut.map(d => (
          <li key={d.id}><DreamCard dream={d}/></li>
        ))}
      </ul>

      <ul className="dreams-container">
        {dreams.length && dreamsCut && dreamsCut.map(d => (
          <li key={d.id}><DreamItemBig dream={d}/></li>
        ))}
      </ul>

      <ul className="dreams-container">
        {dreams.length && dreamsCut && dreamsCut.map(d => (
          <li key={d.id}><DreamItemSmall dream={d}/></li>
        ))}
      </ul>
    </div>
  );
}