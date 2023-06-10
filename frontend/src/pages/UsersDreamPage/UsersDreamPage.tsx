import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

import { DreamEdit } from "../../components/DreamEdit";

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
      {dream && <DreamEdit dream={dream} />}
    </div>
  );
}

export default DreamPage;
