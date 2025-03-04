// src/data/monthData.ts
export interface MonthObject {
    name: string;
    days: number;
    startDay: number;
  }
  
  export const months: MonthObject[] = [
    { name: 'January', days: 31, startDay: 3 },
    { name: 'February', days: 28, startDay: 6 },
    { name: 'March', days: 31, startDay: 6 },
    { name: 'April', days: 30, startDay: 2 },
    { name: 'May', days: 31, startDay: 4 },
    { name: 'June', days: 30, startDay: 0 },
    { name: 'July', days: 31, startDay: 2 },
    { name: 'August', days: 31, startDay: 5 },
    { name: 'September', days: 30, startDay: 1 },
    { name: 'October', days: 31, startDay: 3 },
    { name: 'November', days: 30, startDay: 6 },
    { name: 'December', days: 31, startDay: 1 }
  ];
  