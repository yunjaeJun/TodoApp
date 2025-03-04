import { useState } from 'react';

export const useEditMode = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(EditMode => !EditMode);
  };

  return {
    isEditing,
    toggleEditMode,
    setEditMode: setIsEditing
  };
};
