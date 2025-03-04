import React from 'react';
import PlusButton from '../../atoms/Plus';

interface AddInputButtonProps {
  onAdd: () => void;
}

const AddInputButton: React.FC<AddInputButtonProps> = ({ onAdd }) => {
  return <PlusButton onClick={onAdd} />;
};

export default AddInputButton;