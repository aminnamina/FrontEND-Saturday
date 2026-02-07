import { useState } from 'react';
import AddContent from './AddContent';
import ContentFeed from './ContentFeed';

export default function ContentHub() {
  const [notes, setNotes] = useState([
    { id: 1, header: 'Первый пост', body: 'Содержание первого поста' },
    { id: 2, header: 'Второй пост', body: 'Содержание второго поста' }
  ]);

  const [headInput, setHeadInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const publishNote = () => {
    if (!headInput.trim()) return;
    const fresh = {
      id: Date.now(),
      header: headInput,
      body: bodyInput
    };
    setNotes([fresh, ...notes]);
    setHeadInput('');
    setBodyInput('');
  };

  const removeNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#1e293b',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3)'
    }}>
      <h1 style={{ color: '#38bdf8', textAlign: 'center', marginTop: 0 }}>
        Менеджер заметок
      </h1>

      <AddContent
        headValue={headInput}
        bodyValue={bodyInput}
        onHeadChange={setHeadInput}
        onBodyChange={setBodyInput}
        onPublish={publishNote}
      />

      <ContentFeed
        items={notes}
        onRemove={removeNote}
      />
    </div>
  );
}