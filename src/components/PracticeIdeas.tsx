import './PracticeIdeas.css';

type Difficulty = 'easy' | 'medium' | 'challenge';

type PracticeIdea = {
  title: string;
  description: string;
  difficulty: Difficulty;
};

type PracticeIdeasProps = {
  ideas: PracticeIdea[];
};

const difficultyLabel: Record<Difficulty, string> = {
  easy: '쉬움',
  medium: '보통',
  challenge: '도전'
};

function PracticeIdeas({ ideas }: PracticeIdeasProps) {
  return (
    <section className="practice">
      <h2 className="practice__title">연습 아이디어</h2>
      <ul className="practice__list">
        {ideas.map((idea) => (
          <li key={idea.title} className="practice__item">
            <span className={`practice__badge practice__badge--${idea.difficulty}`}>
              {difficultyLabel[idea.difficulty]}
            </span>
            <div>
              <h3>{idea.title}</h3>
              <p>{idea.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export type { PracticeIdea };
export default PracticeIdeas;
