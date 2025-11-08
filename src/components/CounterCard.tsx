import './CounterCard.css';

type CounterCardProps = {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

function CounterCard({ count, onIncrement, onDecrement, onReset }: CounterCardProps) {
  return (
    <section className="counter-card">
      <div className="counter-card__badge">카운터 실습</div>
      <div className="counter-card__value" aria-live="polite">
        {count}
      </div>
      <p className="counter-card__hint">버튼을 클릭해 값이 어떻게 변하는지 확인해보세요.</p>
      <div className="counter-card__actions">
        <button type="button" onClick={onDecrement} aria-label="감소">
          − 1
        </button>
        <button type="button" onClick={onReset} aria-label="초기화">
          초기화
        </button>
        <button type="button" onClick={onIncrement} aria-label="증가">
          + 1
        </button>
      </div>
    </section>
  );
}

export default CounterCard;
