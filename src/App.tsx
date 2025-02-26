import React from 'react';
import Month from './components/molecules/month/index'; // 올바른 경로로 수정
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>TIME BLOCK</h1>
      <input type="text" id="search" placeholder="조회" />
      <main>
        <Month month="January" year={2025} />
        <Month month="February" year={2025} />
        <Month month="March" year={2025} />
        <Month month="April" year={2025} />
        <Month month="May" year={2025} />
        <Month month="June" year={2025} />
        <Month month="July" year={2025} />
        <Month month="August" year={2025} />
        <Month month="September" year={2025} />
        <Month month="October" year={2025} />
        <Month month="November" year={2025} />
        <Month month="December" year={2025} />
      </main>
    </div>
  );
}

export default App;
