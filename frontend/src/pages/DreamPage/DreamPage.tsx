import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";

import { DreamEdit } from "../../components/DreamEdit";
import { selectUser } from "../../store/features/user/userSlice";
import { Button } from "../../components/Button";

import './DreamPage.scss';

export const DreamPage: React.FC = () => {
  const { dreamId } = useParams();
  const dreams = useAppSelector(selectMockData);
  const authUser = useAppSelector(selectUser);
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //  fetch dream by dreamId
  // }, [dreamId])

  const dream = useMemo(() => {
    return dreams.find(d => d.id === dreamId);
  }, [dreamId, dreams]);

  const isOwner = authUser?.userId === dream?.userId;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  if (!dream) {
    return <h1>This Card is not found</h1>
  }

  return (
    <div>
      <img src={dream.photo || undefined} alt="" />
      <h2>{dream.title}</h2>
      <p>{dream.body}</p>
      <p>{dream.status ? 'completed' : 'not completed'}</p>
      <p>{dream.userId}</p>

      {isOwner && (<div onClick={toggleEditMode}>
        <Button title='Edit' />
      </div>)}

      {isOwner && editMode && <DreamEdit dream={dream} />}
    </div>

  );
}

export default DreamPage;
