import React, { useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectMockData, selectMockUsers } from "../../mock/store/features/mock/mockSlice";

import { DreamEdit } from "../../components/DreamEdit";
import { selectUser } from "../../store/features/user/userSlice";
import { Button } from "../../components/Button";

import './DreamPage.scss';
import { routes } from "../../routes/routerConfig";

export const DreamPage: React.FC = () => {
  const { dreamId } = useParams();
  const dreams = useAppSelector(selectMockData);
  const users = useAppSelector(selectMockUsers);
  const authUser = useAppSelector(selectUser);
  const [editMode, setEditMode] = useState(false);

  // useEffect(() => {
  //  fetch dream by dreamId
  // }, [dreamId])

  const dream = useMemo(() => {
    return dreams.find(d => d.id === dreamId);
  }, [dreamId, dreams]);

  const owner = useMemo(() => {
    return users.find(user => String(user.id) === String(dream?.userId));
  }, [dreamId, dreams]);

  const isOwner = authUser?.userId === dream?.userId;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  if (!dream) {
    return <h1>This Card is not found</h1>
  }

  return (
    <div className="DreamPage">
      <h2 className="DreamPage__title title">{dream.title}</h2>
      <img
        className="DreamPage__img" 
        src={dream.photo || undefined} 
        alt="" 
      />

      <div className="DreamPage__description"> 
        <p className="DreamPage__body">{dream.body}</p>
        <p className="DreamPage__status">Status: <span>{dream.status ? 'completed' : 'not completed'}</span></p>
        <p>Owner:&nbsp;
          <Button to={`${routes.user.path.parent}/${owner?.id}`}>
            {owner?.name}
          </Button>
        </p>
      </div>

      {isOwner && (<div onClick={toggleEditMode}>
        <Button title='Edit' />
      </div>)}

      {isOwner && editMode && <DreamEdit dream={dream} />}
    </div>

  );
}

export default DreamPage;
