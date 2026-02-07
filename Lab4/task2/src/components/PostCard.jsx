import { useState } from 'react';

export default function PostCard({ data, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li style={{
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          href={`#${data.id}`}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          style={{
            color: '#7c3aed',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '18px'
          }}
        >
          {data.title}
        </a>

        <button
          onClick={() => onDelete(data.id)}
          style={{
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          Удалить
        </button>
      </div>

      <p style={{
        marginTop: '12px',
        marginBottom: 0,
        color: '#4b5563',
        display: isOpen ? 'block' : 'none',
        lineHeight: '1.5'
      }}>
        {data.summary}
      </p>
    </li>
  );
}