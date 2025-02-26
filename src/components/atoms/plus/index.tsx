import React from 'react';
import styles from './style.module.css';

const PlusButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={styles.plusButton} onClick={onClick}>
      +
    </button>
  );
};

export default PlusButton;
export {};