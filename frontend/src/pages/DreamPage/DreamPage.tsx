import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

import './DreamPage.scss';

export const DreamPage: React.FC = () => {
  const { dreamId } = useParams();
  const dreams = useAppSelector(selectMockData);

  const dream = useMemo(() => {
    return dreams.find(d => d.id === dreamId);
  }, [dreamId, dreams]);

  console.log('dream', dream);

  return (
    <div className="dreamPage">
      <button type="button" onClick={() => window.history.go(-1)}>Back</button>
      {dream && 
      <div className="dream">
        <div className="dream__container">
          <img
            src={dream?.photo || '/'}
            alt="Dream Photo"
            className="dream__photo" />
          <h2 className="dream__title">{dream.title}</h2>
          <p className="dream__body">{dream?.body}</p>
          <button className="dream__button">
            Fulfill Dream
          </button>
        </div>
      </div>}
    </div>
  );
}

export default DreamPage;
