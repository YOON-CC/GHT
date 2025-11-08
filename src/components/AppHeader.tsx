import './AppHeader.css';

type AppHeaderProps = {
  title: string;
  subtitle: string;
  description?: string;
};

function AppHeader({ title, subtitle, description }: AppHeaderProps) {
  return (
    <header className="app-header">
      <p className="app-header__eyebrow">{subtitle}</p>
      <h1 className="app-header__title">{title}</h1>
      {description ? <p className="app-header__description">{description}</p> : null}
    </header>
  );
}

export default AppHeader;
