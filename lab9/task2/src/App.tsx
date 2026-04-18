import { SmartScroller } from "./components/SmartScroller";
import { DumbScroller } from "./components/DumbScroller";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#fafafa", minHeight: "100vh", padding: "20px 0" }}>
      <SmartScroller />
      <div style={{ borderTop: "4px dashed #e5e7eb", margin: "40px 0" }} />
      <DumbScroller />
    </div>
  );
}