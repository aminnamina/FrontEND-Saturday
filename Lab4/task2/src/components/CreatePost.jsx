export default function CreatePost({ headText, descText, onHeadChange, onDescChange, onPush }) {
  return (
    <section style={{
      backgroundColor: '#f3f4f6',
      padding: '20px',
      borderRadius: '12px',
      marginBottom: '24px'
    }}>
      <h3 style={{ marginTop: 0, color: '#374151' }}>Новый пост</h3>

      <input
        type="text"
        placeholder="Заголовок"
        value={headText}
        onChange={(e) => onHeadChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '6px',
          border: '1px solid #d1d5db',
          boxSizing: 'border-box'
        }}
      />

      <input
        type="text"
        placeholder="Краткое описание"
        value={descText}
        onChange={(e) => onDescChange(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '12px',
          borderRadius: '6px',
          border: '1px solid #d1d5db',
          boxSizing: 'border-box'
        }}
      />

      <button
        onClick={onPush}
        style={{
          padding: '10px 20px',
          backgroundColor: '#7c3aed',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        Добавить
      </button>
    </section>
  );
}