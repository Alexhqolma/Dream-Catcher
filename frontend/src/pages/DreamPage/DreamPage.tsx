import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

import './DreamPage.scss';
import { DreamEdit } from "../../components/DreamEdit";
import { DreamCard } from "../../components/DreamCard/DreamCard";

export const DreamPage: React.FC = () => {
  const { dreamId } = useParams();
  const dreams = useAppSelector(selectMockData);

  const dream = useMemo(() => {
    return dreams.find(d => d.id === dreamId);
  }, [dreamId, dreams]);

  console.log('dream', dream);

  if (!dream) {
    return <h1>This Card is not found</h1>
  }

  return (
    <div>
      <DreamCard dream={dream}/>

      <DreamEdit dream={dream} />
    </div>

  );
}

export default DreamPage;
