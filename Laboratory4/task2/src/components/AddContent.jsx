export default function AddContent({ headValue, bodyValue, onHeadChange, onBodyChange, onPublish }) {
  return (
    <section style={{
      backgroundColor: '#0f172a',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '24px',
      border: '1px solid #334155'
    }}>
      <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Новая заметка</h3>

      <input
        type="text"
        placeholder="Заголовок"
        value={headValue}
        onChange={(e) => onHeadChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '12px',
          borderRadius: '8px',
          border: '2px solid #334155',
          backgroundColor: '#1e293b',
          color: '#e2e8f0',
          boxSizing: 'border-box'
        }}
      />

      <input
        type="text"
        placeholder="Содержание"
        value={bodyValue}
        onChange={(e) => onBodyChange(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '16px',
          borderRadius: '8px',
          border: '2px solid #334155',
          backgroundColor: '#1e293b',
          color: '#e2e8f0',
          boxSizing: 'border-box'
        }}
      />

      <button
        onClick={onPublish}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#38bdf8',
          color: '#0f172a',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Опубликовать
      </button>
    </section>
  );
}