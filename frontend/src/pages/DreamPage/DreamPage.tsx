import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectMockData, selectMockUsers } from "../../mock/store/features/mock/mockSlice";

import { DreamEdit } from "../../components/DreamEdit";
import { selectUser } from "../../store/features/user/userSlice";
import { CustomButton } from "../../components/UI/CustomButton";

import './DreamPage.scss';
import { DreamCard } from '../../components/DreamCard/DreamCard';
import { selectDream } from '../../store/features/dream/dreamSlice';
import { loadDream } from '../../store/sagas/actions';

export const DreamPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const dream = useAppSelector(selectDream);

  const { dreamId } = useParams();
  const authUser = useAppSelector(selectUser);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(loadDream({ dreamId: dreamId || '' }));
  }, [dispatch, dreamId])

  const isOwner = authUser?.userId === dream?.user;

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  if (!dream) {
    return <h1>This Card is not found</h1>
  }

  console.log('dream', dream);

  return (
    <main className="DreamPage">
      <DreamCard dream={dream} pageMode />

      {isOwner && (<div onClick={toggleEditMode}>
        <CustomButton title='Edit' />
      </div>)}

      {isOwner && editMode && <DreamEdit dream={dream} />}
    </main>
  );
}

export default DreamPage;
