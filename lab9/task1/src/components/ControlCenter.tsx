import { useState, useCallback } from "react";
import { PersonBadge } from "./PersonBadge";
import { NumberCruncher } from "./NumberCruncher";
import { Clicker } from "./Clicker";

interface Account {
  id: number;
  nick: string;
  mail: string;
}

export function ControlCenter() {
  const [ticks, setTicks] = useState(0);
  const [account] = useState<Account>({ id: 1, nick: "Alex", mail: "alex@test.com" });
  const [dataset] = useState(["a", "b", "c"]);

  // useCallback делает функцию стабильной между рендерами
  const bump = useCallback(() => setTicks((c) => c + 1), []);
  const log = useCallback(() => console.log("clicked"), []);

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24, background: "#0f172a", minHeight: "100vh", color: "#e2e8f0" }}>
      <h1 style={{ color: "#e879f9" }}>Center (ticks: {ticks})</h1>
      <button onClick={bump} style={{ padding: "10px 20px", background: "#e879f9", border: "none", borderRadius: 8, cursor: "pointer", marginBottom: 24 }}>
        Bump
      </button>

      <div style={{ display: "grid", gap: 16 }}>
        <PersonBadge account={account} />
        <NumberCruncher dataset={dataset} />
        <Clicker onPress={log} caption="Logger" />
      </div>
    </div>
  );
}