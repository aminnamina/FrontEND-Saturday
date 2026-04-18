export default function AboutStatic() {
  return (
    <main style={{
      maxWidth: 700,
      margin: "80px auto",
      textAlign: "center",
      fontFamily: "sans-serif",
      color: "#495057"
    }}>
      <h1 style={{ color: "#f0883e" }}>About (Static)</h1>
      <p>Generated once. No server load.</p>
    </main>
  );
}