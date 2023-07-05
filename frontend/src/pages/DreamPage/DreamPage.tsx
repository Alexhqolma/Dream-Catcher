import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { DreamEdit } from "../../components/DreamEdit";
import { selectUser } from "../../store/features/user/userSlice";
import { CustomButton } from "../../components/UI/CustomButton";
import { DreamCard } from '../../components/DreamCard/DreamCard';
import { selectDream } from '../../store/features/dream/dreamSlice';
import { loadDream } from '../../store/sagas/actions';
import { ErrorPageLayout } from '../../components/layouts/ErrorPage.Layout/ErrorPage.Layout';

import './DreamPage.scss';

interface DreamPageProps {
  tabIndex: number;
}

export const DreamPage: React.FC<DreamPageProps> = ({ tabIndex }) => {
  const dispatch = useAppDispatch();
  const dream = useAppSelector(selectDream);
  const errorMessage = useAppSelector(state => state.dream.message || state.dream.error);
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
    return <ErrorPageLayout title={errorMessage || "This dream is not found!"} />
  }

  console.log('dream', dream);

  return (
    <main className="DreamPage">
      <DreamCard dream={dream} pageMode tabIndex={tabIndex} />

      {isOwner && (
        <div onClick={toggleEditMode}>
          <CustomButton title='Edit' tabIndex={tabIndex + 1} />
        </div>
      )}

      {isOwner && editMode && <DreamEdit dream={dream} />}
    </main>
  );
}

export default DreamPage;
