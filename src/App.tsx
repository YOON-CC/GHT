import { useState } from 'react';
import CounterCard from './components/CounterCard';
import PracticeIdeas, { PracticeIdea } from './components/PracticeIdeas';
import './App.css';

const practiceIdeas: PracticeIdea[] = [
  {
    title: 'TEXT COMPONENDEV',
    description: '사용자 이름을 입력받아 화면에 표시하는 컴포넌트를 추가해보세요.',
    difficulty: 'easy'
  },
  {
    title: '컴포넌트 분리 연습222222',
    description: '카운터 버튼을 별도의 컴포넌트로 분리하고 props로 동작을 제어해보세요.',
    difficulty: 'medium'
  },
  {
    title: 'API 요청 처리2222222',
    description: '공공 API를 호출해 데이터를 화면에 렌더링하는 비동기 로직을 추가해보세요.',
    difficulty: 'challenge'
  }
];

// dev 입니다.

// fixfix
// fixfix22
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app__background" aria-hidden />
      <div className="app__layout">
        <main className="app__content">
          <CounterCard
            count={count}
            onIncrement={() => setCount((c) => c + 1)}
            onDecrement={() => setCount((c) => c - 1)}
            onReset={() => setCount(0)}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
