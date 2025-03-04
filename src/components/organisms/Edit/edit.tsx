// src/components/organisms/Edit/edit.tsx
import React from 'react';
import Modal from '../ModalOpen/modal';
import styles from './style.module.css';
import { useModal } from '../hooks/useModal';

interface EditButtonProps {
  onEditClick: () => void;
  onEditModeToggle: () => void;
  isEditing: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({ onEditModeToggle, isEditing }) => {
  const { isOpen, closeModal, modalKey } = useModal();

  return (
    <div>
      <button onClick={onEditModeToggle} className={styles.button}>
        {!isEditing ? '변경' : '적용'}
      </button>
      {isOpen && modalKey && <Modal onClose={closeModal} modalKey={modalKey} />}
    </div>
  );
};

export default EditButton;
