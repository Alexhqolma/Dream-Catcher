import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

export const DreamPage: React.FC = () => {
  const { dreamId } = useParams();
  const dreams = useAppSelector(selectMockData);

  const dream = useMemo(() => {
    return dreams.find(d => d.id === dreamId);
  }, [dreamId, dreams]);

  console.log('dream', dream);

  return (
    <>
      Dream Page {dream?.id}

      <h2>{dream?.title}</h2>
      <img src={dream?.photo ? dream.photo : undefined} alt="" />

      <p>{dream?.title}</p>
    </>
  );
}

export default DreamPage;
