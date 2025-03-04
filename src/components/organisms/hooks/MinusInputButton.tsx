import React from 'react';
import DeleteButton from '../../atoms/delete';

interface MinusInputButtonProps {
  inputs: string[];
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  lastFocusedRef: React.MutableRefObject<HTMLInputElement | null>;
}

const MinusInputButton: React.FC<MinusInputButtonProps> = ({ inputs, setInputs, inputRefs, lastFocusedRef }) => {
  const handleMinus = () => {
    const focusedIndex = inputRefs.current.findIndex(input => input === lastFocusedRef.current);
    if (focusedIndex !== -1) {
      const newInputs = inputs.filter((_, index) => index !== focusedIndex);
      setInputs(newInputs);
      inputRefs.current = inputRefs.current.filter((_, index) => index !== focusedIndex);
    }
  };

  return <DeleteButton onClick={handleMinus} />;
};

export default MinusInputButton;