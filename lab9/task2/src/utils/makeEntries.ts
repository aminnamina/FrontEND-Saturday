export interface Entry {
  idx: number;
  title: string;
  body: string;
  date: Date;
  tag: string;
}

const tags = ["Work", "Code", "Life", "Food", "Sport"];

export function makeEntries(count: number): Entry[] {
  const out: Entry[] = [];
  for (let i = 0; i < count; i++) {
    out.push({
      idx: i,
      title: `Entry ${i + 1}`,
      body: `Description text for item number ${i + 1}. Demo for virtualization lab.`,
      date: new Date(Date.now() - Math.random() * 10000000000),
      tag: tags[Math.floor(Math.random() * tags.length)],
    });
  }
  return out;
}