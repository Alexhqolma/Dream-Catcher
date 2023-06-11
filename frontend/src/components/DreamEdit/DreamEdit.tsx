import { useState } from "react";
import { Dream } from "../../types/Dream";

type DreamEditProps = {
  dream: Dream;
};

export const DreamEdit: React.FC<DreamEditProps> = ({ dream }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedDream, setUpdatedDream] = useState(dream);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setUpdatedDream((prevDream) => ({
      ...prevDream,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditMode(false);
  };

  if (!editMode) {
    return (
      <div className="edit-card">
        <h2>{dream?.title}</h2>
        <p>{dream?.body}</p>

        <button onClick={toggleEditMode}>Edit</button>
      </div>
    );
  }

  return (
      <div className="edit-card">
        <input
          type="text"
          name="title"
          value={updatedDream?.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <textarea
          name="body"
          value={updatedDream?.body}
          onChange={handleInputChange}
          placeholder="Dream description"
        />

        <button onClick={handleSave}>Save</button>
      </div>)}

