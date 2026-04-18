import { useMemo } from "react";

interface Props {
  dataset: string[];
}

// Тяжёлая функция (имитация)
function heavyMath(list: string[]): number {
  console.log("Heavy compute...");
  let sum = 0;
  for (let i = 0; i < 5000000; i++) sum += Math.sqrt(i);
  return sum + list.length;
}

export function NumberCruncher({ dataset }: Props) {
  // useMemo кэширует результат, пока dataset не поменяется
  const value = useMemo(() => heavyMath(dataset), [dataset]);

  console.log("NumberCruncher render");
  return (
    <div style={{ background: "#1e293b", padding: 16, borderRadius: 12 }}>
      <h4 style={{ margin: 0, color: "#e879f9" }}>Hard Math</h4>
      <p style={{ color: "#94a3b8" }}>Result: {Math.floor(value)}</p>
    </div>
  );
}