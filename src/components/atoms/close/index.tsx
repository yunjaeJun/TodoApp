import React from 'react';
import styles from './style.module.css';

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={() => {
        console.log('닫기 버튼 클릭');
        onClick();
      }} 
      className={styles.CloseButton}
    >
      닫기
    </button>
  );
};

export default CloseButton;