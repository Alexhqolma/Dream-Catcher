import React from 'react';
import './DreamItem.scss';

const dream = {
  id: 1,
  title: 'title',
  body: 'lore ipsum dolor sit amet, consectetur adconsectetur adi lorem ipsun piscingconsectetur adi lorem ipsun piscingconsectetur adi lorem ipsun piscingconsectetur adi lorem ipsun piscingconsectetur adi lorem ipsun piscingi lorem ipsun piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  executantId: 1,
  completed: false,
  createAt: '2021-10-10',
  photo: "https://www.suedkurier.de/storage/image/8/8/5/6/13416588_shift-644x395-1288w_1A8_NT_EmDlWX.webp",
}

export const DreamItem: React.FC = () => {

  const handleFulfill = () => {
    // dispatch(FulfillDream(id));
  };

  return (
    <div className="dream">
      <div className="dream__container">
        <img
          src={dream.photo}
          alt="Dream Photo"
          className="dream__photo" />
        <h2 className="dream__title">{dream.title}</h2>
        <p className="dream__body">{dream.body}</p>
        <p className="dream__created-at">Created at: {dream.createAt}</p>
        <button className="dream__button" onClick={handleFulfill}>
          Fulfill Dream
        </button>
      </div>
    </div>
  );
};