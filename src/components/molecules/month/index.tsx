import React from 'react';
import Day from '../../atoms/day/index';
import styles from './style.module.css';
import { MonthObject } from '../../atoms/monthdata/MonthData';

interface MonthProps {
  month: MonthObject;
  isEditing: boolean;
  onDayClick: (dayKey: string) => void;
  isModalOpen: boolean;
  searchText: string;
}

const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const Month: React.FC<MonthProps> = ({ month, isEditing, onDayClick, isModalOpen, searchText }) => {
  const days = Array.from({ length: month.days }, (_, i) => {
    const dayKey = `${month.name}-${i + 1}`;
    const hasInput = localStorage.getItem(dayKey) && JSON.parse(localStorage.getItem(dayKey) || '[]').length > 0;
    const inputs = JSON.parse(localStorage.getItem(dayKey) || '[]');
    const matchesSearch = inputs.some((input: string) => input.toLowerCase().includes(searchText));

    return isEditing ? (
      <button
        key={i + 1}
        style={{ gridColumnStart: i === 0 ? month.startDay + 1 : undefined }}
        onClick={() => {
          if (!isModalOpen) {
            onDayClick(dayKey);
          }
        }}
        className={hasInput ? styles.highlight : ''}
      >
        <Day dayNumber={i + 1} />
      </button>
    ) : (
      <div
        key={i + 1}
        style={{ gridColumnStart: i === 0 ? month.startDay + 1 : undefined }}
        className={matchesSearch ? styles.highlight : ''}
      >
        <Day dayNumber={i + 1} />
      </div>
    );
  });

  return (
    <div className={styles.month}>
      <h2>{month.name}</h2>
      <div className={styles.days}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.dayName}>{day}</div>
        ))}
        {days}
      </div>
    </div>
  );
};

export default Month;