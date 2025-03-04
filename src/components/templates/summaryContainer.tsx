import React from 'react';
import styles from './summaryContainer.module.css';

const SummaryContainer: React.FC = () => {
  const keys = Object.keys(localStorage);
  const data = keys.map(key => ({
    key,
    inputs: JSON.parse(localStorage.getItem(key) || '[]')
  })).filter(item => item.inputs.length > 0); // 입력된 내용이 있는 키만 필터링

  return (
    <div className={styles.container}>
      {data.map(({ key, inputs }) => (
        <div key={key} className={`${styles.item} ${inputs.length > 0 ? styles.highlight : ''}`}>
          <h3>{key}</h3>
          <ul>
            {inputs.map((input: string, index: number) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SummaryContainer;