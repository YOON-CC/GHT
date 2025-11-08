import { useState } from 'react';
import './AppHeader.css';

type AppHeaderProps = {
  title: string;
  subtitle: string;
  description?: string;
};

function AppHeader({ title, subtitle, description }: AppHeaderProps) {

  const [count, setCount] = useState(0);

  // 주석용
  // ###dev dev dev
  // ###dev dev dev
  return (
    <header className="app-header">
      <p className="app-header__eyebrow">{subtitle}</p>
      <p>추가</p>
      <h1 className="app-header__title">{title}</h1>
      {description ? <p className="app-header__description">{description}</p> : null}
    </header>
  );
}

export default AppHeader;
