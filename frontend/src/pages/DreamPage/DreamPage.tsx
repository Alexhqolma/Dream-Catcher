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

      <h1>Dream Page {dream?.id}</h1>

      <h2 className="dreamPage__title">{dream?.title}</h2>
      <img
        className="dreamPage__img"
        src={dream?.photo || undefined}
        alt="" 
      />

      <p className="dreamPage__body">{dream?.title}</p>
    </div>
  );
}

export default DreamPage;
