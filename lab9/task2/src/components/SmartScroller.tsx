import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { makeEntries, Entry } from "../utils/makeEntries";

interface Props {
  count?: number;
  height?: number;
}

export function SmartScroller({ count = 10000, height = 500 }: Props) {
  const [query, setQuery] = useState("");

  const raw = useMemo(() => makeEntries(count), [count]);
  const filtered = useMemo(() => {
    if (!query) return raw;
    const q = query.toLowerCase();
    return raw.filter((e) => e.title.toLowerCase().includes(q) || e.tag.toLowerCase().includes(q));
  }, [raw, query]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = filtered[index];
    return (
      <div style={{ ...style, padding: "0 16px", boxSizing: "border-box" }}>
        <div style={{ borderBottom: "1px solid #e5e7eb", padding: "12px 0" }}>
          <h4 style={{ margin: 0, color: "#7c3aed" }}>{item.title}</h4>
          <p style={{ margin: "4px 0", color: "#6b7280", fontSize: 14 }}>{item.body}</p>
          <span style={{ fontSize: 12, background: "#ede9fe", color: "#7c3aed", padding: "2px 8px", borderRadius: 12 }}>{item.tag}</span>
        </div>
      </div>
    );
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <h2 style={{ color: "#7c3aed" }}>Smart Scroller (Virtualized)</h2>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInput}
        style={{ width: "100%", padding: 10, marginBottom: 12, borderRadius: 8, border: "1px solid #d1d5db" }}
      />
      <p style={{ color: "#6b7280", fontSize: 14 }}>Showing {filtered.length} of {raw.length}</p>
      <List height={height} itemCount={filtered.length} itemSize={100} width="100%">
        {Row}
      </List>
    </div>
  );
}