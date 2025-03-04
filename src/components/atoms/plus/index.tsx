import React from 'react';
import styles from './style.module.css';

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton: React.FC<PlusButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={() => {
        console.log('추가 버튼 클릭');
        onClick();
      }} 
      className={styles.PlusButton}
    >
      추가
    </button>
  );
};

export default PlusButton;