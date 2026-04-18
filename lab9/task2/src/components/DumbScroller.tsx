import { useMemo } from "react";
import { makeEntries } from "../utils/makeEntries";

interface Props {
  count?: number;
}

export function DumbScroller({ count = 10000 }: Props) {
  const data = useMemo(() => makeEntries(count), [count]);

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 24 }}>
      <h2 style={{ color: "#ef4444" }}>Dumb Scroller (Regular)</h2>
      <p style={{ color: "#6b7280", fontSize: 14 }}>Rendering all {data.length} items...</p>
      <div style={{ maxHeight: 500, overflow: "auto", border: "1px solid #e5e7eb", borderRadius: 8 }}>
        {data.map((item) => (
          <div key={item.idx} style={{ padding: "12px 16px", borderBottom: "1px solid #f3f4f6" }}>
            <h4 style={{ margin: 0, color: "#374151" }}>{item.title}</h4>
            <p style={{ margin: "4px 0", color: "#6b7280", fontSize: 14 }}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}