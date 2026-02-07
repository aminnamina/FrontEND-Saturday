import PostCard from './PostCard';

export default function PostList({ items, onDrop }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {items.map(item => (
        <PostCard
          key={item.id}
          data={item}
          onDelete={onDrop}
        />
      ))}
    </ul>
  );
}