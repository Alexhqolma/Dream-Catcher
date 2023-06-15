import { useState } from "react";
import { Dream } from "../../types/Dream";

interface DreamEditProps {
  dream: Dream;
}

export const DreamEdit: React.FC<DreamEditProps> = ({ dream }) => {
  const [updatedDream, setUpdatedDream] = useState(dream);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setUpdatedDream((prevDream) => ({
      ...prevDream,
      [name]: value,
    }));
  };

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
    </div>
  );
}

