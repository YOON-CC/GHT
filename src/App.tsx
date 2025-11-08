import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app__header">
        <h1>React + TypeScript 연습</h1>
        <p>간단한 카운터 컴포넌트로 상태 관리를 연습해보세요.</p>
      </header>

      <section className="app__counter">
        <span className="app__count">{count}</span>
        <div className="app__actions">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            증가
          </button>
          <button type="button" onClick={() => setCount(0)}>
            초기화
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
