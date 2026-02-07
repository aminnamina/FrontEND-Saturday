import { useState } from 'react';
import PersonData from './PersonData';

export default function PersonSelector() {
  const [chosenId, setChosenId] = useState(1);

  const pickPerson = (id) => {
    setChosenId(id);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#7c3aed',
        marginBottom: '30px',
        fontSize: '2rem'
      }}>
        Лабораторная 3.2 — Данные с API
      </h1>

      {/* Панель кнопок */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => pickPerson(num)}
            style={{
              padding: '12px 24px',
              borderRadius: '50px',
              border: '2px solid #7c3aed',
              backgroundColor: chosenId === num ? '#7c3aed' : 'white',
              color: chosenId === num ? 'white' : '#7c3aed',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            Профиль {num}
          </button>
        ))}

        <button
          onClick={() => pickPerson(Math.floor(Math.random() * 10) + 1)}
          style={{
            padding: '12px 24px',
            borderRadius: '50px',
            border: '2px solid #ec4899',
            backgroundColor: chosenId > 3 ? '#ec4899' : 'white',
            color: chosenId > 3 ? 'white' : '#ec4899',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Случайный (1-10)
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <PersonData memberId={chosenId} />
      </div>
    </div>
  );
}