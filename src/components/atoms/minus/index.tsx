import React from 'react';
import styles from './style.module.css';

const MinusButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={styles.minusButton} onClick={onClick}>
      +
    </button>
  );
};

export default MinusButton;
export {};