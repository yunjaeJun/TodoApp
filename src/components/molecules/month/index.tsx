import React from 'react';
import Day from '../../atoms/day/index';
import styles from './style.module.css';

interface MonthProps {
  month: keyof typeof monthDays;
  year: number; // 윤년 계산을 위해 추가
}

const monthDays = {
  'January': 31,
  'February': 28,
  'March': 31,
  'April': 30,
  'May': 31,
  'June': 30,
  'July': 31,
  'August': 31,
  'September': 30,
  'October': 31,
  'November': 30,
  'December': 31
};

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDaysInMonth = (month: keyof typeof monthDays, year: number): number => {
  if (month === 'February' && isLeapYear(year)) {
    return 29;
  }
  return monthDays[month];
};

const getStartDayOfYear = (year: number): number => {
  const date = new Date(year, 0, 1); // 1월 1일
  return date.getDay(); // 요일을 숫자로 반환 (0: 일요일, 1: 월요일, ...)
};

const Month: React.FC<MonthProps> = ({ month, year }) => {
  const months = Object.keys(monthDays) as Array<keyof typeof monthDays>;
  const daysInMonth = getDaysInMonth(month, year);
  const monthIndex = months.indexOf(month);
  
  // 현재 달의 첫 번째 요일 계산
  const startDayOfYear = getStartDayOfYear(year);
  const startDay = months.slice(0, monthIndex).reduce((acc, m) => {
    return (acc + getDaysInMonth(m, year)) % 7;
  }, startDayOfYear);

  const days = Array.from({ length: daysInMonth }, (_, i) => (
    <div
      key={i + 1}
      style={{ gridColumnStart: i === 0 ? startDay + 1 : undefined }} // gridColumnStart는 1부터 시작
    >
      <Day dayNumber={i + 1} />
    </div>
  ));

  return (
    <div className={styles.month}>
      <h2>{month}</h2>
      <div className={styles.days}>
        {days}
      </div>
    </div>
  );
};

export default Month;
