import React, { useState } from 'react';
import { Dream } from '../../types/Dream';

import './dreamEdit.scss';

interface DreamItemProps {
  dream: Dream;
}

export const DreamEdit: React.FC<DreamItemProps> = ({ dream }) => {
return (
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
  </div>
);
}

  const [updatedDream, setUpdatedDream] = useState<Dream>(dream);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedDream((prevDream) => ({
      ...prevDream,
      [name]: value,
    }));
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUpdatedDream((prevDream) => ({
      ...prevDream,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(updatedDream);
  };

  return (
    <div className="edit-card">
      <input
        type="text"
        name="title"
        value={updatedDream.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <textarea
        name="body"
        value={updatedDream.body}
        onChange={handleTextareaChange}
        placeholder="Dream description"
      />
      {/* Add additional input fields for other dream properties as needed */}

      <button onClick={handleSave}>Save</button>
    </div>
  );
};
