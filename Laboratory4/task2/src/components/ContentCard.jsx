import { useState } from 'react';

export default function ContentCard({ data, onDelete }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li style={{
      backgroundColor: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '12px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          href={`#${data.id}`}
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
          style={{
            color: '#38bdf8',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          {data.header}
        </a>

        <button
          onClick={() => onDelete(data.id)}
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
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
        color: '#94a3b8',
        lineHeight: '1.5',
        display: expanded ? 'block' : 'none'
      }}>
        {data.body}
      </p>
    </li>
  );
}