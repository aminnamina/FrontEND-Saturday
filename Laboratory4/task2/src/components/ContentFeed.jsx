import ContentCard from './ContentCard';

export default function ContentFeed({ items, onRemove }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map(item => (
        <ContentCard
          key={item.id}
          data={item}
          onDelete={onRemove}
        />
      ))}
    </ul>
  );
}