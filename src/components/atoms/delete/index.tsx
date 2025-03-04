import React from 'react';
import styles from './style.module.css';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={() => {
        console.log('삭제 버튼 클릭');
        onClick();
      }} 
      className={styles.DeleteButton}
    >
      삭제
    </button>
  );
};

export default DeleteButton;