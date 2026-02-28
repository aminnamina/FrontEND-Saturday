interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, className = '' }: CardProps) => {
  const isImportant = className.includes('important');

  return (
    <article className={`card ${className}`}>
      {isImportant && <span>⭐</span>}
      <h3>{title}</h3>
      <div>{children}</div>
      <small>Карточка создана</small>
    </article>
  );
};

export default Card;