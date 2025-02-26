import React from 'react';
import styles from './style.module.css';

interface DayProps {
  dayNumber: number;
}

const Day: React.FC<DayProps> = ({ dayNumber }) => {
  return (
    <div className={styles.day}>
      {dayNumber}
    </div>
  );
};

export default Day;
export {};