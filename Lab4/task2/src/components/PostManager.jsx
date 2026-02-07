import { useState } from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

export default function PostManager() {
  const [entries, setEntries] = useState([
    { id: 1, title: 'Первый пост', summary: 'Краткое содержание первого поста' },
    { id: 2, title: 'Второй пост', summary: 'Краткое содержание второго поста' }
  ]);

  const [header, setHeader] = useState('');
  const [desc, setDesc] = useState('');

  const pushEntry = () => {
    if (!header.trim()) return;
    const fresh = {
      id: Date.now(),
      title: header,
      summary: desc
    };
    setEntries([fresh, ...entries]);
    setHeader('');
    setDesc('');
  };

  const dropEntry = (id) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      <h1 style={{ color: '#7c3aed' }}>Менеджер постов</h1>

      <CreatePost
        headText={header}
        descText={desc}
        onHeadChange={setHeader}
        onDescChange={setDesc}
        onPush={pushEntry}
      />

      <PostList
        items={entries}
        onDrop={dropEntry}
      />
    </div>
  );
}